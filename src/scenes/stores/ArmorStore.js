class ArmorStore extends Phaser.Scene {
    constructor() {
        super("armor_store");
    }

    preload() {
        this.load.image('armor_store_background', './src/assets/store_scenes/armor_store.png');
    }

    create() {
        this.add.image(400, 300, 'armor_store_background');

        goBackButton = this.input.keyboard.addKey('Q');

        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});
    }

    update() {
        listenShopExit(638, 312, this);
    }
}
