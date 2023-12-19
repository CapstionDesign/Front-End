import { Room, Client } from "@colyseus/core";
import { MyRoomState, Player } from "./schema/MyRoomState";
import { createCharacterAnims } from '../../../client/src/World/Character/CharacterAnims';

export class MyRoom extends Room<MyRoomState> {
  maxClients = 20;

  onCreate(options: any) {
    this.setState(new MyRoomState());

    this.onMessage('move', (client, data) => {
      const player = this.state.players.get(client.sessionId);

      const velocity = 6;
      const input = data;

      if (input.left) {
        player.x -= velocity;
      } else if (input.right) {
        player.x += velocity;
      }

      if (input.up) {
        player.y -= velocity;
      } else if (input.down) {
        player.y += velocity;
      }

      // broadcasting the player state to all clients in the room
      this.broadcast("playerState", { sessionId: client.sessionId, x: player.x, y: player.y });
    });

    this.onMessage("playerState", (client, message) => {
      const { sessionId, x, y, selectedCharacter } = message;

      // Update the player state
      const player = this.state.players.get(client.sessionId);
      if (player) {
        player.x = x;
        player.y = y;
        player.selectedCharacter = selectedCharacter;
      }

      // broadcasting the updated player state to all clients in the room
      this.broadcast("playerState", { sessionId, x, y, selectedCharacter });
    });

    this.onMessage('selectCharacter', (client, data) => {
      const player = this.state.players.get(client.sessionId);

      // set selected character for the player
      player.selectedCharacter = data.character;
      player.animationKeys = data.animationKeys;

      // broadcasting the player state to all clients in the room
      this.broadcast('playerState', {
        sessionId: client.sessionId,
        x: player.x,
        y: player.y,
        selectedCharacter: player.selectedCharacter,
        animationKeys: player.animationKeys
      });
    });

    // 포탈 탔을 때
    this.onMessage('enterPortal', (client, data) => {
      const { sessionId, x, y } = data;

      // 찾아낸 플레이어의 상태를 업데이트
      const player = this.state.players.get(sessionId);
      if (player) {
        player.x = x;
        player.y = y;
      }

      // 해당 플레이어의 새로운 상태를 모든 클라이언트에게 알림
      this.broadcast('portalEntered', {
        sessionId: sessionId,
        x: 1680,
        y: 2150,
        selectedCharacter: player.selectedCharacter,
      });
    });

    // listen for changes in the room state and broadcast updates
    this.state.players.onChange( () => {
      this.broadcast("playerState", this.state.players);
    });
  }

  onJoin(client: Client, options: any) {
    const sessionId = client.sessionId;
    console.log(sessionId, "joined!");

    // 이미 해당 sessionId에 해당하는 플레이어가 있는지 확인
    if (!this.state.players.has(sessionId)) {
      // 플레이어 인스턴스 생성
      const player = new Player();

      // place Player at a random position
      player.x = 2065;
      player.y = 3000;

      // 플레이어를 세션 ID를 기준으로 하는 플레이어 맵에 배치
      this.state.players.set(client.sessionId, player);
    }
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");

    this.state.players.delete(client.sessionId);
  }
  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
