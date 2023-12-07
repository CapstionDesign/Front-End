const http = require('http');
const express = require('express');
const { Server } = require('colyseus');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 2567;

const colyseus = new Server({ server });

// 게임 상태 정의
class GameState {
    constructor() {
        this.players = new Map();
    }

    // 플레이어 생성
    createPlayer(playerId, x, y) {
        this.players.set(playerId, { x, y });
    }

    // 플레이어 위치 업데이트
    updatePosition(playerId, { x, y }) {
        const player = this.players.get(playerId);
        if (player) {
            player.x = x;
            player.y = y;
        }
    }
}

colyseus.define('my_game_room', GameState);

colyseus.on('create', (room) => {
    console.log(`Room created: ${room.roomId}`);

    // 게임 상태 생성
    room.setState(new GameState());

    // 플레이어 생성 메시지 처리
    room.onMessage('createPlayer', (client, message) => {
        room.state.createPlayer(message.playerId, message.x, message.y);
    });

    // 플레이어 위치 업데이트 메시지 처리
    room.onMessage('updatePosition', (client, message) => {
        room.state.updatePosition(client.sessionId, message);
    });
});

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
