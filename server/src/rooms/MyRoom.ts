import { Room, Client } from "@colyseus/core";
import { MyRoomState, Player } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 20;

  onCreate(options: any) {
    this.setState(new MyRoomState());

    // handle player input
    this.onMessage(0, (client, data) => {
      // get reference to the player who sent the message
      const player = this.state.players.get(client.sessionId);
      const velocity = 2;

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

    // listen for changes in the room state and broadcast updates
    this.state.players.onChange = () => {
      this.broadcast("playerState", this.state.players);
    };
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");

    const mapWidth = 4800;
    const mapHeight = 3200;

    // 플레이어 인스턴스 생성
    const player = new Player();

    // place Player at a random position
    player.x = 2065;
    player.y = 3000;

    // 플레이어를 세션 ID를 기준으로 하는 플레이어 맵에 배치
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");

    this.state.players.delete(client.sessionId);
  }
  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
