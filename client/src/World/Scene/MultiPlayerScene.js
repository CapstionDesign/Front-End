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
    }

    preload() {
        // 배경 이미지
        this.load.image("mainWorld", "img/world/MainWorld.png");

        // 건물 이미지
        this.load.image("ezraHall", "img/building/school_ezra_hall.png");
        this.load.image("library", "img/building/school_library.png");
        this.load.image("memorialHall", "img/building/school_memorial_hall.png");
        this.load.image("paulHall", "img/building/school_paul_hall.png");
        this.load.image("studentUnion", "img/building/school_student_union.png");

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

        try {
            // // 서버에게 새로운 세션 ID를 요청
            // const response = await fetch('ws://localhost:2567');
            // const { sessionId } = await response.json();

            this.room = await this.client.joinOrCreate("my_room");
            console.log("Joined successfully!");

            // 배경 이미지 추가
            this.add.image(0, 0, 'mainWorld').setOrigin(0, 0);

            const worldWidth = 4800;
            const worldHeight = 3200;
            this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

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
                    createCharacterAnims(this.anims, this.room.sessionId, character);

                    // 서버로 선택한 캐릭터 정보 전송
                    this.room.send('selectCharacter', { character });

                    // 모달 숨기기
                    this.modal.setVisible(false);

                    // 플레이어가 추가될 때의 로직
                    this.room.state.players.onAdd((player, sessionId) => {
                        const entity = this.physics.add.sprite(player.x, player.y, character);

                        // 플레이어 엔티티에 대한 참조 유지
                        this.playerEntities[sessionId] = entity;

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
                    });
                    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
                    this.cameras.main.startFollow(this.playerEntities[this.room.sessionId]);  // 카메라가 선택된 캐릭터를 따라가도록 설정
                }
            );

            // 플레이어 움직임 설정
            this.playerMovements = createPlayerMovements(this, this.room.sessionId, this.characterKey);

            // listen for updates from the server regarding player states
            this.room.onMessage("playerState", (message) => {
                const { sessionId, x, y } = message;

                // update the player entity position
                const playerEntity = this.playerEntities[sessionId];
                if (playerEntity) {
                    playerEntity.setPosition(x, y);
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

            this.modal.setVisible(true);

        } catch (e) {
            console.error(e);
        }
    }

    update(time, delta) {
        // 아직 방에 연결되지 않은 경우 루프 건너뛰기
        if (!this.room) {
            return;
        }

        // 서버로 입력을 전송
        this.playerMovements.handleInput(this.cursorKeys, this.inputPayload);
        this.room.send(0, this.inputPayload);

        // 플레이어 위치 업데이트 및 애니메이션 적용
        this.playerMovements.updatePlayerPosition(this.inputPayload, this.currentPlayer);
    }
}
