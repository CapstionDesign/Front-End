export const createCharacterAnims = (anims, sessionId, characterKey) => {
    const animationKeys = {
        right: `right_${sessionId}`,
        up: `up_${sessionId}`,
        left: `left_${sessionId}`,
        down: `down_${sessionId}`,
        turn: `turn_${sessionId}`
    };

    if (!anims.exists(animationKeys.right)) {
        // 오른쪽으로 움직이는 애니메이션
        anims.create({
            key: animationKeys.right,
            frames: anims.generateFrameNumbers(characterKey, {start: 24, end: 29}),
            frameRate: 10,
            repeat: -1,
        });

        // 위로 움직이는 애니메이션
        anims.create({
            key: animationKeys.up,
            frames: anims.generateFrameNumbers(characterKey, {start: 30, end: 35}),
            frameRate: 10,
            repeat: -1,
        });

        // 왼쪽으로 움직이는 애니메이션
        anims.create({
            key: animationKeys.left,
            frames: anims.generateFrameNumbers(characterKey, {start: 36, end: 41}),
            frameRate: 10,
            repeat: -1,
        });

        // 아래로 움직이는 애니메이션
        anims.create({
            key: animationKeys.down,
            frames: anims.generateFrameNumbers(characterKey, {start: 42, end: 47}),
            frameRate: 10,
            repeat: -1,
        });

        anims.create({
            key: animationKeys.turn,
            frames: anims.generateFrameNumbers(characterKey, { start: 21, end: 21 }),
            frameRate: 20
        });
    }

    return animationKeys;
};
