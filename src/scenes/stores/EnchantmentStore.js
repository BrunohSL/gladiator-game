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

        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});
    }

    update() {
        listenShopExit(175, 488, this);
    }
}
