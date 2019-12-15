class MagicStore extends Phaser.Scene {
    constructor() {
        super("magic_store");
    }

    preload() {
        this.load.image('magic_store_background', './src/assets/store_scenes/magic_store.png');
    }

    create() {
        this.add.image(400, 300, 'magic_store_background');

        goBackButton = this.input.keyboard.addKey('Q');
    }

    update() {
        if (goBackButton.isDown) {
            backFromStore = true;
            storePosition = {x: 638, y: 488};
            this.scene.start("main_game");
        }
    }
}
