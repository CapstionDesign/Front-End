import Phaser from 'phaser';

export default class Union1F extends Phaser.Scene {
  constructor() {
    super({ key: 'Union1F' });
  }

  preload() {
    // 배경 화면
    this.load.image('Union1F', 'img/world/StudentUnion1F.png');

    // 포탈 이미지
    this.load.spritesheet("portal", "img/world/portal.png", {
      frameWidth: 80,
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
    this.add.image(0, 0, "Union1F").setOrigin(0, 0);

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
    const lowerWall = this.add.rectangle(1200, 2240, 2080, 1, 0x00ff00, 0);
    const leftWall = this.add.rectangle(160, 1200, 1, 2000, 0x00ff00, 0);
    const rightWall = this.add.rectangle(2240, 1200, 1, 2000, 0x00ff00, 0);

    const lengthWall1 = this.add.rectangle(1872, 2064, 32, 352, 0x00ff00, 0);
    const lengthWall2 = this.add.rectangle(1872, 1632, 32, 320, 0x00ff00, 0);
    const lengthWall3 = this.add.rectangle(1872, 1136, 32, 480, 0x00ff00, 0);
    const lengthWall4 = this.add.rectangle(2224, 768, 32, 256, 0x00ff00, 0);
    const lengthWall5 = this.add.rectangle(2064, 528, 32, 416, 0x00ff00, 0);
    const lengthWall6 = this.add.rectangle(2224, 298, 32, 192, 0x00ff00, 0);
    const lengthWall7 = this.add.rectangle(1616, 384, 32, 384, 0x00ff00, 0);
    const lengthWall8 = this.add.rectangle(1104, 384, 32, 384, 0x00ff00, 0);
    const lengthWall9 = this.add.rectangle(624, 384, 32, 384, 0x00ff00, 0);
    const lengthWall10 = this.add.rectangle(464, 734, 32, 256, 0x00ff00, 0);
    const lengthWall11 = this.add.rectangle(464, 1184, 32, 448, 0x00ff00, 0);
    const lengthWall12 = this.add.rectangle(464, 1600, 32, 192, 0x00ff00, 0);
    const lengthWall13 = this.add.rectangle(464, 2000, 32, 416, 0x00ff00, 0);
    const lengthWall14 = this.add.rectangle(1072, 2032, 32, 352, 0x00ff00, 0);
    const lengthWall15 = this.add.rectangle(1520, 2032, 32, 352, 0x00ff00, 0);

    const widthWall1 = this.add.rectangle(2064, 1712, 352, 32, 0x00ff00, 0);
    const widthWall2 = this.add.rectangle(2064, 928, 352, 32, 0x00ff00, 0);
    const widthWall3 = this.add.rectangle(2160, 512, 160, 64, 0x00ff00, 0);
    const widthWall4 = this.add.rectangle(1440, 560, 320, 32, 0x00ff00, 0);
    const widthWall5 = this.add.rectangle(1120, 560, 192, 32, 0x00ff00, 0);
    const widthWall6 = this.add.rectangle(768, 560, 384, 32, 0x00ff00, 0);
    const widthWall7 = this.add.rectangle(336, 560, 352, 32, 0x00ff00, 0);
    const widthWall8 = this.add.rectangle(304, 1040, 288, 32, 0x00ff00, 0);
    const widthWall9 = this.add.rectangle(304, 1520, 288, 32, 0x00ff00, 0);
    const widthWall10 = this.add.rectangle(1104, 1872, 32, 32, 0x00ff00, 0);
    const widthWall11 = this.add.rectangle(1344, 1872, 320, 32, 0x00ff00, 0);

    const stairWall1 = this.add.rectangle(1520, 1264, 96, 288, 0x00ff00, 0);
    const stairWall2 = this.add.rectangle(1440, 1264, 64, 288, 0x00ff00, 0);


    // 충돌을 감지하기 위해 Physics에 등록
    this.physics.add.existing(upperWall, true);
    this.physics.add.existing(lowerWall, true);
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
    this.physics.add.existing(stairWall1, true);
    this.physics.add.existing(stairWall2, true);

    // 충돌 설정
    this.physics.add.collider(player, [
        upperWall, lowerWall, leftWall, rightWall,
        lengthWall1, lengthWall2, lengthWall3, lengthWall4, lengthWall5, lengthWall6,
        lengthWall7, lengthWall8, lengthWall9, lengthWall10, lengthWall11, lengthWall12,
        lengthWall13, lengthWall14, lengthWall15,
        widthWall1, widthWall2, widthWall3, widthWall4, widthWall5, widthWall6,
        widthWall7, widthWall8, widthWall9, widthWall10, widthWall11,
        stairWall1, stairWall2

    ], () => {});

    // 카메라 경계 설정
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    this.cameras.main.startFollow(player);

    // MainWorld 포탈
    const mainPortal = this.physics.add.sprite(1680, 2250, "portal", 10);
    mainPortal.setCollideWorldBounds(true);
    mainPortal.setImmovable(true);

    this.physics.add.collider(player, mainPortal, () => {
      mainPortal.setVelocity(0);

      // 초기 좌표를 고정
      this.registry.set('playerData', { x: 3160, y: 2880 });
      this.time.delayedCall(500, () => {
        this.scene.start("MainWorld");
      }, null, this);
    }, null, this);

    // Union2F 포탈
    const upPortal = this.physics.add.sprite(1500, 1380, "portal", 10);
    upPortal.setCollideWorldBounds(true);
    upPortal.setImmovable(true);

    this.physics.add.collider(player, upPortal, () => {
      upPortal.setVelocity(0);

      // 초기 좌표를 고정
      this.registry.set('playerData', { x: 1085, y: 1050 });
      this.time.delayedCall(500, () => {
        this.scene.start("Union2F");
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