class Menu extends Phaser.Scene {
    constructor() {
        super("start_menu");
    }

    create() {
        this.add.text(300, 300, "Press SPACE to start");
    }

    update() {
        this.checkForGameStart();
    }

    checkForGameStart() {
        var gameStartButton = this.input.keyboard.addKey('SPACE');

        if (gameStartButton.isDown) {
            this.scene.start("main_game");
        }
    }
}
