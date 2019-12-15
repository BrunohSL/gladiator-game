class PotionStore extends Phaser.Scene {
    constructor() {
        super("potion_store");
    }

    preload() {
        this.load.image('potion_store_background', './src/assets/store_scenes/potion_store.png');
    }

    create() {
        this.add.image(400, 300, 'potion_store_background');

        goBackButton = this.input.keyboard.addKey('Q');

        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});
    }

    update() {
        if (goBackButton.isDown) {
            backFromStore = true;
            storePosition = {x: 175, y: 296};
            this.scene.start("main_game");
        }
    }
}
