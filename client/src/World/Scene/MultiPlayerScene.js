import Phaser from 'phaser';
import { Client } from 'colyseus.js';
import { createCharacterAnims } from '../Character/CharacterAnims';
import { createPlayerMovements } from '../Character/PlayerMovements';
import { Modal } from '../Character/Modal';

export class MultiPlayerScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MultiplayerScene' });
        this.client = new Client("ws://localhost:2567");
        this.room = null;
        this.inputPayload = {};
        this.cursorKeys = null;
        this.playerEntities = {};
        this.currentPlayer = null;
        this.remoteRef = null;
        this.characterKey = null;
        this.modal = null;
        this.playerMovements = null;
    }

    preload() {
        // 배경 이미지
        this.load.image("campus", "img/world/Campus.png");

        // 건물 이미지
        this.load.image("ezraHall", "img/building/school_ezra_hall.png");
        this.load.image("library", "img/building/school_library.png");
        this.load.image("memorialHall", "img/building/school_memorial_hall.png");
        this.load.image("paulHall", "img/building/school_paul_hall.png");
        this.load.image("studentUnion", "img/building/school_student_union.png");

        // 포탈 이미지
        this.load.spritesheet("portal", "img/world/portal.png", {
            frameWidth: 115.5,
            frameHeight: 70
        });

        // 캐릭터 이미지
        this.load.spritesheet("adam", "img/character/adam.png", {
            frameWidth: 32,
            frameHeight: 48
        });
        // 캐릭터 이미지
        this.load.spritesheet("ash", "img/character/ash.png", {
            frameWidth: 32,
            frameHeight: 48
        });
        // 캐릭터 이미지
        this.load.spritesheet("lucy", "img/character/lucy.png", {
            frameWidth: 32,
            frameHeight: 48
        });
        // 캐릭터 이미지
        this.load.spritesheet("nancy", "img/character/nancy.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    async create() {
        console.log("Joining room...");
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        const worldWidth = 4800;
        const worldHeight = 3200;
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        try {
            this.room = await this.client.joinOrCreate("my_room");
            console.log("Joined successfully!");

            // 배경 이미지 추가
            this.add.image(0, 0, 'campus').setOrigin(0, 0);

            // 캐릭터 선택을 위한 모달 설정
            this.modal = new Modal(
                this,
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                200,
                200,
                ['adam', 'ash', 'lucy', 'nancy'],
                (character) => {
                    // 선택된 캐릭터에 맞는 애니메이션 설정
                    const animationKeys = createCharacterAnims(this.anims, this.room.sessionId, character);

                    // 서버로 선택한 캐릭터 정보 전송
                    this.room.send('selectCharacter', { character : character, animationKeys });

                    // 모달 숨기기
                    this.modal.setVisible(false);

                    // 플레이어가 추가될 때의 로직
                    this.room.state.players.onAdd((player, sessionId) => {
                        if (this.physics && this.physics.add) {
                        const entity = this.physics.add.sprite(player.x, player.y, character);
                        entity.setData('sessionId', sessionId);
                        entity.setData('characterKey', character);

                        // 플레이어 움직임 설정
                        this.playerMovements = createPlayerMovements(this, this.cursorKeys, this.room, character);

                        // 플레이어 충돌 설정
                        // this.physics.add.collider(entity, this.buildings, this.CollisionHandler, null, this);
                        this.physics.add.collider(entity, this.unionPortal, this.enterPortal, null, this);

                        // 플레이어 엔티티에 대한 참조 유지
                        this.playerEntities[sessionId] = entity;
                        this.playerEntities[sessionId].body.setCollideWorldBounds(true);

                        if (sessionId === this.room.sessionId) {
                            this.currentPlayer = entity;

                            // remoteRef is being used for debug only
                            this.remoteRef = this.add.rectangle(0, 0, entity.width, entity.height);

                            player.onChange(() => {
                                this.remoteRef.x = player.x;
                                this.remoteRef.y = player.y;
                            });

                        } else {
                            // 서버로부터 데이터 업데이트가 있을 때의 로직
                            player.onChange(() => {
                                entity.setData('serverX', player.x);
                                entity.setData('serverY', player.y);
                            });
                        }
                        }
                    });
                    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
                    this.cameras.main.startFollow(this.playerEntities[this.room.sessionId]);  // 카메라가 선택된 캐릭터를 따라가도록 설정
                }
            );

            this.modal.setVisible(true);

            // 건물들
            this.buildings = this.physics.add.group();

            const ezraHall = this.createBuilding(3511, 581, "ezraHall");
            const library = this.createBuilding(2846, 1408, "library");
            const memorialHall = this.createBuilding(1325, 1158, "memorialHall");
            const paulHall = this.createBuilding(3632, 1902, "paulHall");
            const studentUnion = this.createBuilding(3068, 2625, "studentUnion");

            this.buildings.add(ezraHall);
            this.buildings.add(library);
            this.buildings.add(memorialHall);
            this.buildings.add(paulHall);
            this.buildings.add(studentUnion);

            this.buildings.children.iterate(function (building) {
                building.setCollideWorldBounds(true);
                building.setImmovable(true);
            });

            // 건물 내부로 이동할 포탈 생성
            this.unionPortal = this.physics.add.sprite(3160, 2800, "portal", 10);
            this.unionPortal.setCollideWorldBounds(true);



            // listen for updates from the server regarding player states
            this.room.onMessage("playerState", (message) => {
                const { sessionId, x, y, selectedCharacter, animationKeys } = message;

                // update the player entity position
                const playerEntity = this.playerEntities[sessionId];
                if (playerEntity) {
                    playerEntity.setPosition(x, y);

                    if (selectedCharacter) {
                        // Load the spritesheet based on the selected character
                        playerEntity.setTexture(selectedCharacter);
                    }

                    if (animationKeys) {
                        // Play the animation based on animationKeys
                        const { left, right, up, down, turn } = animationKeys;
                        if (left) {
                            playerEntity.anims.play(left, true);
                        } else if (right) {
                            playerEntity.anims.play(right, true);
                        } else if (up) {
                            playerEntity.anims.play(up, true);
                        } else if (down) {
                            playerEntity.anims.play(down, true);
                        } else if (turn) {
                            playerEntity.anims.play(turn);
                        }
                    }
                }
            });

            // 클라이언트에서의 처리
            this.room.onMessage('stopMovement', (message) => {
                const { sessionId, x, y } = message;

                // sessionId에 해당하는 플레이어의 좌표를 업데이트합니다.
                const playerEntity = this.playerEntities[sessionId];
                if (playerEntity) {
                    playerEntity.setPosition(x, y);

                    playerEntity.setVelocity(0);
                }
            });

            this.room.onMessage('portalEntered', (message) => {
                const { roomSessionId, sessionId, x, y, selectedCharacter } = message;

                // 현재 클라이언트의 세션 ID와 비교하여 동일한 경우에만 다음 장면으로 이동
                if (this.room.sessionId === sessionId) {
                    this.scene.start('Union1F', { player: { roomSessionId, sessionId, x, y, selectedCharacter } });
                }
            });

            // 플레이어 업데이트 이벤트 리스너
            this.room.state.players.onChange((player, sessionId) => {
                // update the player entity position
                const playerEntity = this.playerEntities[sessionId];
                if (playerEntity) {
                    playerEntity.setPosition(player.x, player.y);
                }
            });

            // 플레이어가 나갔을 때의 로직
            this.room.state.players.onRemove((player, sessionId) => {
                // remove the player entity
                const entity = this.playerEntities[sessionId];
                if (entity) {
                    entity.destroy();
                    delete this.playerEntities[sessionId];
                }
            });
        } catch (e) {
            console.error(e);
        }
    }

    update(time, delta) {
        // 아직 방에 연결되지 않은 경우 루프 건너뛰기
        if (!this.room || !this.playerMovements) {
            return;
        }

        // 서버로 입력을 전송
        this.playerMovements.handleInput(this.inputPayload);

        // 플레이어 위치 업데이트 및 애니메이션 적용
        this.playerMovements.updatePlayerPosition(this.inputPayload, this.currentPlayer);
        this.playerMovements.sendMoveInfo();
    }

    // // 플레이어와 건물 간의 충돌 처리 함수
    // CollisionHandler(playerEntity, building) {
    //     if (!playerEntity) {
    //         console.error("Player entity is undefined");
    //         return;
    //     }
    //     // 호출된 플레이어에 대한 이동속도를 감소시킴
    //     // const playerMovements = playerEntity.getData('playerMovements');
    //     // console.log(playerMovements);
    //     if (this.playerMovements) {
    //         this.playerMovements.decreasePlayerSpeed(playerEntity); // 이 함수는 createPlayerMovements에 추가해야 함
    //         console.log(playerEntity.body.velocity.x);
    //     }
    //
    //     // playerEntity.setVelocity(0);
    //     building.setVelocity(0);
    // }

    createBuilding(x, y, key) {
        const building = this.physics.add.sprite(x, y, key);

        return building;
    }

    // 포탈을 탈 때 호출되는 함수
    enterPortal(playerEntity, portal) {
        const playerData = {
            roomSessionId: this.room.sessionId,
            sessionId: playerEntity.getData('sessionId'),
            x: 1680,
            y: 3150,
            selectedCharacter: playerEntity.getData('characterKey')
        };

        // 서버로 데이터 전송
        this.room.send('enterPortal', playerData);

        portal.setVelocity(0);

        // Union1F 씬으로 이동할 때 데이터를 추가하여 시작
        this.scene.start('Union1F', { playerData });
    }
}