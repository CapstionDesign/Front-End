import Phaser from 'phaser';

export default class MainWorld extends Phaser.Scene {
    constructor() {
        super({ key: 'MainWorld' });
    }

    init(data) {
        this.player = data.player;
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

        // 포탈 이미지
        this.load.spritesheet("portal", "img/world/portal.png", {
            frameWidth: 115.5,
            frameHeight: 70
        });

        // 캐릭터 이미지
        this.load.spritesheet("human", "img/character/nancy.png", {
            frameWidth: 32,
            frameHeight: 48
        })
    }

    create() {
        // 배경 화면
        this.add.image(0, 0, "mainWorld").setOrigin(0, 0);

        // 게임 월드 크기
        const worldWidth = 4800;
        const worldHeight = 3200;
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        // 이전에 설정한 registry에서 플레이어 데이터 가져오기
        const playerData = this.registry.get('playerData');

        // 플레이어 생성
        const player = this.physics.add.sprite(playerData.x, playerData.y, 'human').setName('player');

        // 카메라 경계 설정
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.cameras.main.startFollow(player);

        // 건물들
        const buildings = this.physics.add.group();

        const ezraHall = this.physics.add.sprite(3511, 581, "ezraHall");
        const library = this.physics.add.sprite(2846, 1408, "library");
        const memorialHall = this.physics.add.sprite(1325, 1158, "memorialHall");
        const paulHall = this.physics.add.sprite(3632, 1902, "paulHall");
        const studentUnion = this.physics.add.sprite(3068, 2620, "studentUnion");

        buildings.add(ezraHall);
        buildings.add(library);
        buildings.add(memorialHall);
        buildings.add(paulHall);
        buildings.add(studentUnion);

        // 플레이어와 건물 및 맵 간 충돌 설정
        this.physics.add.collider(player, buildings, this.CollisionHandler, null, this);
        player.setCollideWorldBounds(true);
        buildings.children.iterate(function (building) {
            building.setCollideWorldBounds(true);
            building.setImmovable(true);
        });

        // 건물 내부로 이동할 포탈 생성
        const unionPortal = this.physics.add.sprite(3160, 2800, "portal", 10);
        unionPortal.setCollideWorldBounds(true);

        // 포탈과 플레이어 간 충돌 설정
        this.physics.add.collider(player, unionPortal, () => {
            // 초기 좌표를 고정
            this.registry.set('playerData', { x: 1680, y: 2150 });

            // 새로운 맵으로 전환
            this.scene.start("Union1F");
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
        const speed = 400;
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

            player.anims.play("turn");
        }
    }

    // 플레이어와 건물 간의 충돌 처리 함수
    CollisionHandler(player, buildings) {
        player.setVelocityX(0);
        player.setVelocityY(0);

        buildings.setVelocityX(0);
        buildings.setVelocityY(0);
    }
}