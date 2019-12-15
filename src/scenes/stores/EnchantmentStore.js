class EnchantmentStore extends Phaser.Scene {
    constructor() {
        super("enchantment_store");
    }

    preload() {
        this.load.image('enchantment_store_background', './src/assets/store_scenes/enchantment_store.png');
    }

    create() {
        this.add.image(400, 300, 'enchantment_store_background');

        goBackButton = this.input.keyboard.addKey('Q');
    }

    update() {
        if (goBackButton.isDown) {
            backFromStore = true;
            storePosition = {x: 175, y: 488};
            this.scene.start("main_game");
        }
    }
}