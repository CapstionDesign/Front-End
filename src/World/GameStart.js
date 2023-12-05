import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MainWorld from './Scene/MainWorld.js';
import Union1F from './Scene/Union1F.js';
import Union2F from './Scene/Union2F.js'
import config from './Config';

const PhaserGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      ...config,
      scene: [
          MainWorld,
          Union1F,
          Union2F
      ],
    });

    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game-container" ref={ gameRef }/>;

};

export default PhaserGame;