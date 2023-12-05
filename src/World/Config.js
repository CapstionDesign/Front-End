import Phaser from "phaser";

const config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    physics: {
      default: 'arcade',
        arcade: {
          debug: true
        }
    }
  };

export default config;