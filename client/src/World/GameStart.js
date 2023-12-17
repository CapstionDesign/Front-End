import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
// import MainWorld from './Scene/MainWorld.js';
// import Union1F from './Scene/Union1F.js';
import config from './Config';
import { MultiPlayerScene } from "./Scene/MultiPlayerScene";
// import {CharacterSelectionScene} from "./Scene/CharacterSelectionScene";

const GameStart = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      ...config,
      scene: [
        // MainWorld,
        //   CharacterSelectionScene,
          MultiPlayerScene,
        // Union1F,
      ]
    });

    // 초기 플레이어 데이터 설정
    const playerData = { x: 2065, y: 3000 };
    game.registry.set('playerData', playerData);

    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game-container" ref={ gameRef }/>;

};

export default GameStart;