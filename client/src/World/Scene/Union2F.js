import Phaser from 'phaser';

export default class Union2F extends Phaser.Scene {
    constructor() {
        super({ key: 'Union2F' });
    }

    preload() {
        // 배경 화면
        this.load.image('Union2F', 'img/world/StudentUnion2F.png');

        // 포탈 이미지
        this.load.spritesheet("portal", "img/world/portal.png", {
            frameWidth: 115.5,
            frameHeight: 70
        });

        // 캐릭터 이미지
        this.load.spritesheet("human", "assets/character/nancy.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        // 배경 화면
        this.add.image(0, 0, "Union2F").setOrigin(0, 0);

        // 게임 월드 크기
        const worldWidth = 2400;
        const worldHeight = 2400;
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        // 이전 씬에서 저장한 플레이어 데이터를 가져옴
        const playerData = this.registry.get('playerData');

        // 플레이어 생성 시 초기 좌표 설정
        const player = this.physics.add.sprite(playerData.x, playerData.y, 'human').setName("player");

        // 투명한 박스 생성 (fillColor, alpha)
        const upperWall = this.add.rectangle(1200, 160, 2080, 1, 0x00ff00, 0);
        const lowerWall1 = this.add.rectangle(1200, 2240, 2080, 1, 0x00ff00, 0);
        const lowerWall2 = this.add.rectangle(2112, 2176, 256, 1, 0x00ff00, 0);
        const leftWall = this.add.rectangle(160, 1200, 1, 2000, 0x00ff00, 0);
        const rightWall = this.add.rectangle(2240, 1200, 1, 2000, 0x00ff00, 0);

        const lengthWall1 = this.add.rectangle(1104, 2144, 32, 128, 0x00ff00, 0);
        const lengthWall2 = this.add.rectangle(1456, 2144, 32, 128, 0x00ff00, 0);
        const lengthWall3 = this.add.rectangle(1936, 2160, 32, 96, 0x00ff00, 0);
        const lengthWall4 = this.add.rectangle(1968, 2096, 32, 96, 0x00ff00, 0);
        const lengthWall5 = this.add.rectangle(1968, 1840, 32, 224, 0x00ff00, 0);
        const lengthWall6 = this.add.rectangle(1968, 1520, 32, 224, 0x00ff00, 0);
        const lengthWall7 = this.add.rectangle(1968, 1200, 32, 224, 0x00ff00, 0);
        const lengthWall8 = this.add.rectangle(1968, 880, 32, 224, 0x00ff00, 0);
        const lengthWall9 = this.add.rectangle(1968, 624, 32, 96, 0x00ff00, 0);
        const lengthWall10 = this.add.rectangle(1776, 1888, 32, 64, 0x00ff00, 0);
        const lengthWall11 = this.add.rectangle(1776, 1648, 32, 224, 0x00ff00, 0);
        const lengthWall12 = this.add.rectangle(1776, 1328, 32, 224, 0x00ff00, 0);
        const lengthWall13 = this.add.rectangle(1776, 1024, 32, 192, 0x00ff00, 0);
        const lengthWall14 = this.add.rectangle(2032, 240, 32, 160, 0x00ff00, 0);
        const lengthWall15 = this.add.rectangle(1808, 304, 32, 224, 0x00ff00, 0);
        const lengthWall16 = this.add.rectangle(1360, 304, 32, 224, 0x00ff00, 0);
        const lengthWall17 = this.add.rectangle(912, 304, 32, 224, 0x00ff00, 0);
        const lengthWall18 = this.add.rectangle(496, 528, 32, 736, 0x00ff00, 0);
        const lengthWall19 = this.add.rectangle(496, 1184, 32, 384, 0x00ff00, 0);
        const lengthWall20 = this.add.rectangle(496, 1680, 32, 412, 0x00ff00, 0);
        const lengthWall21 = this.add.rectangle(496, 2096, 32, 224, 0x00ff00, 0);
        const lengthWall22 = this.add.rectangle(688, 1888, 32, 64, 0x00ff00, 0);
        const lengthWall23 = this.add.rectangle(688, 1648, 32, 224, 0x00ff00, 0);
        const lengthWall24 = this.add.rectangle(688, 1328, 32, 224, 0x00ff00, 0);
        const lengthWall25 = this.add.rectangle(688, 1008, 32, 224, 0x00ff00, 0);
        const lengthWall26 = this.add.rectangle(688, 704, 32, 192, 0x00ff00, 0);
        const lengthWall27 = this.add.rectangle(976, 1264, 32, 1312, 0x00ff00, 0);
        const lengthWall28 = this.add.rectangle(1488, 688, 32, 160, 0x00ff00, 0);
        const lengthWall29 = this.add.rectangle(1488, 1392, 32, 1056, 0x00ff00, 0);

        const widthWall1 = this.add.rectangle(2112, 1872, 256, 32, 0x00ff00, 0);
        const widthWall2 = this.add.rectangle(2112, 1552, 256, 32, 0x00ff00, 0);
        const widthWall3 = this.add.rectangle(2112, 1232, 256, 32, 0x00ff00, 0);
        const widthWall4 = this.add.rectangle(2112, 912, 256, 32, 0x00ff00, 0);
        const widthWall5 = this.add.rectangle(2112, 592, 256, 32, 0x00ff00, 0);
        const widthWall6 = this.add.rectangle(2032, 336, 224, 32, 0x00ff00, 0);
        const widthWall7 = this.add.rectangle(1760, 432, 128, 32, 0x00ff00, 0);
        const widthWall8 = this.add.rectangle(1376, 432, 512, 32, 0x00ff00, 0);
        const widthWall9 = this.add.rectangle(912, 432, 288, 32, 0x00ff00, 0);
        const widthWall10 = this.add.rectangle(608, 432, 192, 32, 0x00ff00, 0);
        const widthWall11 = this.add.rectangle(832, 624, 256, 32, 0x00ff00, 0);
        const widthWall12 = this.add.rectangle(1232, 624, 480, 32, 0x00ff00, 0);
        const widthWall13 = this.add.rectangle(832, 944, 256, 32, 0x00ff00, 0);
        const widthWall14 = this.add.rectangle(1632, 944, 256, 32, 0x00ff00, 0);
        const widthWall15 = this.add.rectangle(320, 1200, 320, 32, 0x00ff00, 0);
        const widthWall16 = this.add.rectangle(832, 1264, 256, 32, 0x00ff00, 0);
        const widthWall17 = this.add.rectangle(1632, 1264, 256, 32, 0x00ff00, 0);
        const widthWall18 = this.add.rectangle(832, 1584, 256, 32, 0x00ff00, 0);
        const widthWall19 = this.add.rectangle(1632, 1584, 256, 32, 0x00ff00, 0);
        const widthWall20 = this.add.rectangle(1232, 1904, 1120, 32, 0x00ff00, 0);

        const centerBox = this.add.rectangle(1088, 1216,128,128, 0x00ff00,0);

        // 충돌을 감지하기 위해 Physics에 등록
        this.physics.add.existing(upperWall, true);
        this.physics.add.existing(lowerWall1, true);
        this.physics.add.existing(lowerWall2, true);
        this.physics.add.existing(leftWall, true);
        this.physics.add.existing(rightWall, true);
        this.physics.add.existing(lengthWall1, true);
        this.physics.add.existing(lengthWall2, true);
        this.physics.add.existing(lengthWall3, true);
        this.physics.add.existing(lengthWall4, true);
        this.physics.add.existing(lengthWall5, true);
        this.physics.add.existing(lengthWall6, true);
        this.physics.add.existing(lengthWall7, true);
        this.physics.add.existing(lengthWall8, true);
        this.physics.add.existing(lengthWall9, true);
        this.physics.add.existing(lengthWall10, true);
        this.physics.add.existing(lengthWall11, true);
        this.physics.add.existing(lengthWall12, true);
        this.physics.add.existing(lengthWall13, true);
        this.physics.add.existing(lengthWall14, true);
        this.physics.add.existing(lengthWall15, true);
        this.physics.add.existing(lengthWall16, true);
        this.physics.add.existing(lengthWall17, true);
        this.physics.add.existing(lengthWall18, true);
        this.physics.add.existing(lengthWall19, true);
        this.physics.add.existing(lengthWall20, true);
        this.physics.add.existing(lengthWall21, true);
        this.physics.add.existing(lengthWall22, true);
        this.physics.add.existing(lengthWall23, true);
        this.physics.add.existing(lengthWall24, true);
        this.physics.add.existing(lengthWall25, true);
        this.physics.add.existing(lengthWall26, true);
        this.physics.add.existing(lengthWall27, true);
        this.physics.add.existing(lengthWall28, true);
        this.physics.add.existing(lengthWall29, true);
        this.physics.add.existing(widthWall1, true);
        this.physics.add.existing(widthWall2, true);
        this.physics.add.existing(widthWall3, true);
        this.physics.add.existing(widthWall4, true);
        this.physics.add.existing(widthWall5, true);
        this.physics.add.existing(widthWall6, true);
        this.physics.add.existing(widthWall7, true);
        this.physics.add.existing(widthWall8, true);
        this.physics.add.existing(widthWall9, true);
        this.physics.add.existing(widthWall10, true);
        this.physics.add.existing(widthWall11, true);
        this.physics.add.existing(widthWall12, true);
        this.physics.add.existing(widthWall13, true);
        this.physics.add.existing(widthWall14, true);
        this.physics.add.existing(widthWall15, true);
        this.physics.add.existing(widthWall16, true);
        this.physics.add.existing(widthWall17, true);
        this.physics.add.existing(widthWall18, true);
        this.physics.add.existing(widthWall19, true);
        this.physics.add.existing(widthWall20, true);
        this.physics.add.existing(centerBox, true);

        // 충돌 설정
        this.physics.add.collider(player, [
            upperWall, lowerWall1, lowerWall2, leftWall, rightWall,
            lengthWall1, lengthWall2, lengthWall3, lengthWall4, lengthWall5, lengthWall6,
            lengthWall7, lengthWall8, lengthWall9, lengthWall10, lengthWall11, lengthWall12,
            lengthWall13, lengthWall14, lengthWall15, lengthWall16, lengthWall17, lengthWall18,
            lengthWall19, lengthWall20, lengthWall21, lengthWall22, lengthWall23, lengthWall24,
            lengthWall25, lengthWall26, lengthWall27, lengthWall28, lengthWall29,
            widthWall1, widthWall2, widthWall3, widthWall4, widthWall5, widthWall6,
            widthWall7, widthWall8, widthWall9, widthWall10, widthWall11, widthWall12,
            widthWall13, widthWall14, widthWall15, widthWall16, widthWall17, widthWall18,
            widthWall19, widthWall20, centerBox
        ], () => {});

        // 카메라 경계 설정
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.cameras.main.startFollow(player);

        // 건물 내부로 이동할 포탈 생성
        const downPortal = this.physics.add.sprite(1090, 1180, "portal", 10);
        downPortal.setCollideWorldBounds(true);
        downPortal.setImmovable(true);

        // 포탈과 플레이어 간 충돌 설정
        this.physics.add.collider(player, downPortal, () => {
            downPortal.setVelocity(0);

            // 초기 좌표를 고정
            this.registry.set('playerData', { x: 1510, y: 1480 });
            this.time.delayedCall(500, () => {
                this.scene.start("Union1F");
            }, null, this);
        }, null, this);

        // 오른쪽으로 움직이는 컷
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('human', { start: 24, end: 29 }),
            frameRate: 10,
            repeat: -1
        });

        // 위쪽으로 움직이는 컷
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('human', { start: 30, end: 35 }),
            frameRate: 10,
            repeat: -1
        });

        // 왼쪽으로 움직이는 컷
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('human', { start: 36, end: 41 }),
            frameRate: 10,
            repeat: -1
        });

        // 아래쪽으로 움직이는 컷
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('human', { start: 42, end: 47 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'human', frame: 21 } ],
            frameRate: 20
        });
    }

    update() {
        const cursors = this.input.keyboard.createCursorKeys();

        const player = this.children.getByName("player");
        const speed = 350;
        if (cursors.left.isDown) {
            player.setVelocityX(-speed);

            player.anims.play("left", true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(speed);

            player.anims.play("right", true);
        } else if (cursors.up.isDown) {
            player.setVelocityY(-speed);

            player.anims.play("up", true);
        } else if (cursors.down.isDown) {
            player.setVelocityY(speed);

            player.anims.play("down", true);
        } else {
            player.setVelocityX(0);
            player.setVelocityY(0);

            player.anims.play("turn", true);
        }
    }
}