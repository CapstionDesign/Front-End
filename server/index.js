const http = require('http');
const express = require('express');
const { Server } = require('colyseus');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 2567;

const gameServer = new Server({
    server,
    pingInterval: 5000,
    pingMaxRetries: 3,
});

class GameState {
    constructor() {
        this.players = new Map();
    }

    createPlayer(playerId, x, y) {
        this.players.set(playerId, { x, y });
    }

    updatePosition(playerId, { x, y }) {
        const player = this.players.get(playerId);
        if (player) {
            player.x = x;
            player.y = y;
        }
    }
}

gameServer.define('your_room_name', GameState);

gameServer.on('create', (room) => {
    console.log(`Room created: ${room.roomId}`);
    room.setState(new GameState());

    room.onMessage('createPlayer', (client, message) => {
        room.state.createPlayer(message.playerId, message.x, message.y);
    });

    room.onMessage('updatePosition', (client, message) => {
        room.state.updatePosition(client.sessionId, message);
    });
});

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
