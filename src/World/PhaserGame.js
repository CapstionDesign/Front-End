import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
  useEffect(() => {
    const config = {
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.RESIZE,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: window.innerWidth,
          height: window.innerHeight,
        },
        physics: {
          default: 'arcade'
        },
        scene: {
            preload: preload,
            create: create,
            update: update,
        },
    };

    const game = new Phaser.Game(config);

    function preload() {
      // 배경 이미지
      this.load.image("mainWorld", "img/world/MainWorld.png");

      // 건물 이미지
      this.load.image("ezraHall", "img/building/school_ezra_hall.png");
      this.load.image("library", "img/building/school_library.png");
      this.load.image("memorialHall", "img/building/school_memorial_hall.png");
      this.load.image("paulHall", "img/building/school_paul_hall.png");
      this.load.image("studentUnion", "img/building/school_student_union.png");
      
      // 캐릭터 이미지
      this.load.spritesheet("man", "img/character/Character.png", {
        frameWidth: 32,
        frameHeight: 32
      })
    }

    function create() {
      // 배경 화면
      this.add.image(0, 0, "mainWorld").setOrigin(0, 0);

      // 게임 월드 크기
      const worldWidth = 4800;
      const worldHeight = 3200;
      this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

      // 플레이어 생성
      const player = this.physics.add.sprite(2065, 3000, 'man').setName("player");
      
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
      this.physics.add.collider(player, buildings, CollisionHandler, null, this);
      player.setCollideWorldBounds(true);
      buildings.children.iterate(function (building) {
        building.setCollideWorldBounds(true);
        building.setImmovable(true);
      });
    
      // 아래쪽으로 움직이는 컷
      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('man', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
      });    
      
      // 왼쪽으로 움직이는 컷
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('man', { start: 12, end: 14 }),
        frameRate: 10,
        repeat: -1 
      });

      // 오른쪽으로 움직이는 컷
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('man', { start: 24, end: 26 }),
        frameRate: 10,
        repeat: -1
      });

      // 위쪽으로 움직이는 컷
      this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('man', { start: 36, end: 38 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'man', frame: 1 } ],
        frameRate: 20
      });
    }

    function update() {
      const cursors = this.input.keyboard.createCursorKeys();

      const player = this.children.getByName("player");
  
      if (cursors.left.isDown) {
        player.setVelocityX(-160);
  
        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
  
        player.anims.play("right", true);
      } else if (cursors.up.isDown) {
        player.setVelocityY(-160);
  
        player.anims.play("up", true);
      } else if (cursors.down.isDown) {
        player.setVelocityY(160);
  
        player.anims.play("down", true);
      } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
  
        player.anims.play("turn");
      }
      
      console.log(player.x, player.y); // 플레이어의 좌표
    }

    function CollisionHandler(player, buildings) {
      player.setVelocityX(0);
      player.setVelocityY(0);

      buildings.setVelocityX(0);
      buildings.setVelocityY(0);
    }
    

    // Cleanup 함수
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game-container" />;
};

export default PhaserGame;
