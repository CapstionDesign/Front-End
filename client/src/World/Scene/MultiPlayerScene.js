import Phaser from 'phaser';
import { Client } from 'colyseus.js';

export class MultiPlayerScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MultiplayerScene' });
        this.client = new Client("ws://localhost:2567");
        this.room = null;
        this.inputPayload = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        this.cursorKeys = null;
        this.playerEntities = {};
        this.currentPlayer = null;
        this.remoteRef = null;
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
        this.load.spritesheet("human", "img/character/nancy.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    async create() {
        console.log("Joining room...");
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        try {
            this.room = await this.client.joinOrCreate("my_room");
            console.log("Joined successfully!");
            // 배경 이미지 추가
            this.add.image(0, 0, 'mainWorld').setOrigin(0, 0);

            // 플레이어가 추가될 때의 로직
            this.room.state.players.onAdd((player, sessionId) => {
                const entity = this.physics.add.sprite(player.x, player.y, 'human');

                // 오른쪽으로 움직이는 컷
                this.anims.create({
                    key: `right_${sessionId}`,
                    frames: this.anims.generateFrameNumbers('human', { start: 24, end: 29 }),
                    frameRate: 10,
                    repeat: -1
                });

                // 위쪽으로 움직이는 컷
                this.anims.create({
                    key: `up_${sessionId}`,
                    frames: this.anims.generateFrameNumbers('human', { start: 30, end: 35 }),
                    frameRate: 10,
                    repeat: -1
                });

                // 왼쪽으로 움직이는 컷
                this.anims.create({
                    key: `left_${sessionId}`,
                    frames: this.anims.generateFrameNumbers('human', { start: 36, end: 41 }),
                    frameRate: 10,
                    repeat: -1
                });

                // 아래쪽으로 움직이는 컷
                this.anims.create({
                    key: `down_${sessionId}`,
                    frames: this.anims.generateFrameNumbers('human', { start: 42, end: 47 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: `turn_${sessionId}`,
                    frames: [ { key: 'human', frame: 21 } ],
                    frameRate: 20
                });

                // 플레이어 엔티티에 대한 참조 유지
                this.playerEntities[sessionId] = entity;

                // 카메라 설정
                const worldWidth = 4800;
                const worldHeight = 3200;
                const camera = this.cameras.add(0, 0, this.game.config.width, this.game.config.height);
                camera.setBounds(0, 0, worldWidth, worldHeight);
                camera.startFollow(entity);


                if (sessionId === this.room.sessionId) {
                    this.currentPlayer = entity;

                    // remoteRef is being used for debug only
                    this.remoteRef = this.add.rectangle(0, 0, entity.width, entity.height);
                    this.remoteRef.setStrokeStyle(1, 0xff0000);

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

                // 카메라가 플레이어를 따라가도록 설정
                this.cameras.main.startFollow(entity);
            });

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

        } catch (e) {
            console.error(e);
        }
    }

    update(time, delta) {
        // 아직 방에 연결되지 않은 경우 루프 건너뛰기
        if (!this.room) {
            return;
        }
        const velocity = 2;

        // 서버로 입력을 전송
        this.inputPayload.left = this.cursorKeys.left.isDown;
        this.inputPayload.right = this.cursorKeys.right.isDown;
        this.inputPayload.up = this.cursorKeys.up.isDown;
        this.inputPayload.down = this.cursorKeys.down.isDown;
        this.room.send(0, this.inputPayload);

        // 현재 플레이어의 위치 업데이트
        if (this.inputPayload.left) {
            this.currentPlayer.x -= velocity;
            this.currentPlayer.anims.play(`left_${this.room.sessionId}`, true);

        } else if (this.inputPayload.right) {
            this.currentPlayer.x += velocity;
            this.currentPlayer.anims.play(`right_${this.room.sessionId}`, true);

        } else if (this.inputPayload.up) {
            this.currentPlayer.y -= velocity;
            this.currentPlayer.anims.play(`up_${this.room.sessionId}`, true);

        } else if (this.inputPayload.down) {
            this.currentPlayer.y += velocity;
            this.currentPlayer.anims.play(`down_${this.room.sessionId}`, true);

        } else {
            this.currentPlayer.setVelocityX(0);
            this.currentPlayer.setVelocityY(0);

            this.currentPlayer.anims.play(`turn_${this.room.sessionId}`);
        }

        // 모든 플레이어에 대해 보간 로직 적용
        for (let sessionId in this.playerEntities) {
            if(sessionId === this.room.sessionId) {
                continue;
            }

            const entity = this.playerEntities[sessionId];
            const { serverX, serverY } = entity.data.values;

            // 보간(interpolate) 로직 적용
            entity.x = Phaser.Math.Linear(entity.x, serverX, 0.1);
            entity.y = Phaser.Math.Linear(entity.y, serverY, 0.1);

            // 원격 플레이어의 위치에 대한 동기화
            if (sessionId !== this.room.sessionId) {
                entity.x = serverX;
                entity.y = serverY;
            }
        }
    }
    // 추가적인 메소드나 로직이 필요한 경우 추가하세요.
}
