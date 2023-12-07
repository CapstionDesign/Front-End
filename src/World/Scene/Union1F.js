import Phaser from 'phaser';

export default class Union1F extends Phaser.Scene {
  constructor() {
    super({ key: 'Union1F' });
  }

  preload() {
    // 배경 화면
    this.load.image('Union1F', 'img/world/StudentUnion.png');

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

    // 충돌을 감지하기 위해 Physics에 등록
    this.physics.add.existing(upperWall, true);
    this.physics.add.existing(lowerWall, true);
    this.physics.add.existing(leftWall, true);
    this.physics.add.existing(rightWall, true);

    // 충돌 설정
    this.physics.add.collider(player, [upperWall, lowerWall, leftWall, rightWall], () => {
      // 여기에 원하는 동작을 추가할 수 있습니다.
    });

    // 카메라 경계 설정
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    this.cameras.main.startFollow(player);

    // 건물 내부로 이동할 포탈 생성
    const mainPortal = this.physics.add.sprite(1680, 2240, "portal");
    mainPortal.setCollideWorldBounds(true);

    // 포탈과 플레이어 간 충돌 설정
    this.physics.add.collider(player, mainPortal, () => {
      // 초기 좌표를 고정
      this.registry.set('playerData', { x: 3160, y: 2880 });

      // 새로운 맵으로 전환
      this.scene.start("MainWorld");
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

      player.anims.play("turn", true);
    }
  }
}