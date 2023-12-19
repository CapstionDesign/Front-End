import { createCharacterAnims } from './CharacterAnims';

export const createPlayerMovements = (scene, cursorKeys, room, characterKey) => {
    const animationKeys = createCharacterAnims(scene.anims, room.sessionId, characterKey);
    // 서버로 이동 정보를 전송하는 함수
    let velocity = 6;
    const sendMoveInfo = () => {
        room.send("move", {
            left: cursorKeys.left.isDown,
            right: cursorKeys.right.isDown,
            up: cursorKeys.up.isDown,
            down: cursorKeys.down.isDown
        });
    };
    const decreasePlayerSpeed = (player) => {
        velocity = 0;
        player.setVelocity(0);
    }

    const handleInput = (inputPayload) => {
        inputPayload.left = cursorKeys.left.isDown;
        inputPayload.right = cursorKeys.right.isDown;
        inputPayload.up = cursorKeys.up.isDown;
        inputPayload.down = cursorKeys.down.isDown;
    };

    const updatePlayerPosition = (inputPayload, currentPlayer) => {
        if (!currentPlayer) {
            return;
        }

        if (inputPayload.left) {
            currentPlayer.setVelocityX(-velocity);
            currentPlayer.anims.play(animationKeys.left, true);
        } else if (inputPayload.right) {
            currentPlayer.setVelocityX(velocity);
            currentPlayer.anims.play(animationKeys.right, true);
        } else if (inputPayload.up) {
            currentPlayer.setVelocityY(-velocity);
            currentPlayer.anims.play(animationKeys.up, true);
        } else if (inputPayload.down) {
            currentPlayer.setVelocityY(velocity);
            currentPlayer.anims.play(animationKeys.down, true);
        } else {
            currentPlayer.setVelocityX(0);
            currentPlayer.setVelocityY(0);
            // 정지할 때의 애니메이션을 여기에 추가
            currentPlayer.anims.play(animationKeys.turn);
        }
    };

    return {
        animationKeys,
        sendMoveInfo,
        handleInput,
        updatePlayerPosition,
        decreasePlayerSpeed
    };
};
