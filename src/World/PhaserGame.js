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
        this.load.image("mainWorld", "img/MainWorld.png");

        // 건물 이미지
        // this.load.image("library", "img/school_library.png");
        // this.load.image("memorialHall", "img/school_memorial_hall.png");

        // // tiled map 불러오기
        // this.load.tilemapTiledJSON('map', 'assets/maps/MainWorld.json');
        
        // // tilesets 불러오기
        // this.load.image('fountain', 'assets/images/Park_FountainON.gif');
        // this.load.image('parkTile', 'assets/images/Park_TileMap.png');
        // this.load.image('street', 'assets/images/52_garden_street_set.png');
        // this.load.image('library', 'assets/images/school_building_sprite_by_leandro_jorge_db1pwx5-removebg-preview.png');
        // this.load.image('memorialHall', 'assets/images/school_memorial_hall.png');
        
        // 캐릭터 이미지
        this.load.spritesheet("man", "img/Character.png", {
          frameWidth: 32,
          frameHeight: 32
        })
    }

    function create() {
        // 배경 화면
        this.add.image(0, 0, "mainWorld").setOrigin(0, 0);

        // 맵 로드
        // const map = this.make.tilemap({ key: "MainWorld" });
        // const tiles1 = map.addTilesetImage("school_fountain", "fountain");
        // const tiles2 = map.addTilesetImage("school_Tile", "parkTile");
        // const tiles3 = map.addTilesetImage("school_street", "street");
        // const tiles4 = map.addTilesetImage("school_library", "library");
        // const tiles5 = map.addTilesetImage("school_memorial_hall", "memorialHall");
            
        // // 맵 레이어 추가
        // const world = map.createLayer("World", [tiles1, tiles2, tiles3]);
        // const library = map.createLayer("Library", tiles4)
        // const hall = map.createLayer("100th Anniversary Memorial Hall", tiles5)
        const worldWidth = 4800;
        const worldHeight = 4800;

        // 플레이어 생성
        const player = this.physics.add.sprite(2065, worldHeight - 1800, 'man').setName("player");
        
        // 카메라 경계 설정
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.cameras.main.startFollow(player);

        // 게임 크기 설정
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        // 플레이어와 맵 간 충돌 설정
        player.setCollideWorldBounds(true);
        
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
      }
    

    // Cleanup 함수
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game-container" />;
};

export default PhaserGame;