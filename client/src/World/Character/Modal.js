import Phaser from 'phaser'

export class Modal extends Phaser.GameObjects.Container {
    constructor(scene, x, y, width, height, options, onSelectCallback) {
        super(scene, x, y);

        // 모달 창 배경
        const modalBackground = scene.add.graphics();
        modalBackground.fillStyle(0x000000, 0.7);
        modalBackground.fillRect(0, 0, width, height);
        this.add(modalBackground);

        // 모달 내용
        const modalContent = scene.add.container();
        this.add(modalContent);

        // 모달 내용 관련 로직...

        // 예시: 각 캐릭터를 선택할 수 있는 버튼을 생성
        options.forEach((character, index) => {
            const button = scene.add.text(0, index * 30, character, {
                color: '#ffffff',
                fontSize: 18,
            });

            // 버튼 이벤트 리스너 등록
            button.setInteractive();
            button.on('pointerdown', () => {
                // 캐릭터 선택 시 콜백 호출
                onSelectCallback(character);

                // 모달 창 숨기기
                this.setVisible(false);
            });

            modalContent.add(button);
        });

        // 모달 창 설정
        this.setSize(width, height);
        scene.add.existing(this);

        // 모달 창 보이기/숨기기
        this.setVisible(false);
    }
}
