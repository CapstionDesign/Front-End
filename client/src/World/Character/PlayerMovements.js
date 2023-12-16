import { createCharacterAnims } from './CharacterAnims';

export const createPlayerMovements = (scene, sessionId, characterKey, playerEntities) => {
    const animationKeys = createCharacterAnims(scene.anims, sessionId, characterKey);
    console.log(animationKeys);
    console.log(animationKeys.left);

    const handleInput = (cursorKeys, inputPayload) => {
        inputPayload.left = cursorKeys.left.isDown;
        inputPayload.right = cursorKeys.right.isDown;
        inputPayload.up = cursorKeys.up.isDown;
        inputPayload.down = cursorKeys.down.isDown;
    };

    const updatePlayerPosition = (inputPayload, currentPlayer) => {
        if (!currentPlayer || !playerEntities) {
            return;
        }

        const velocity = 200;

        if (inputPayload.left) {
            currentPlayer.x -= velocity;
            currentPlayer.anims.play(animationKeys.left, true);
        } else if (inputPayload.right) {
            currentPlayer.x += velocity;
            currentPlayer.anims.play(animationKeys.right, true);
        } else if (inputPayload.up) {
            currentPlayer.y -= velocity;
            currentPlayer.anims.play(animationKeys.up, true);
        } else if (inputPayload.down) {
            currentPlayer.y += velocity;
            currentPlayer.anims.play(animationKeys.down, true);
        } else {
            currentPlayer.setVelocityX(0);
            currentPlayer.setVelocityY(0);
            // 정지할 때의 애니메이션을 여기에 추가
            currentPlayer.anims.play(animationKeys.turn);
        }
    };

    return {
        handleInput,
        updatePlayerPosition,
    };
};
