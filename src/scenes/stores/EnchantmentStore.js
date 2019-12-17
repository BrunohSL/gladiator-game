class EnchantmentStore extends Phaser.Scene {
    constructor() {
        super("enchantment_store");
    }

    preload() {
        this.load.image('enchantment_store_background', './src/assets/store_scenes/enchantment_store.png');
    }

    create() {
        this.add.image(400, 300, 'enchantment_store_background');
        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        goBackButton = this.input.keyboard.addKey('Q');

        // var storeGroupItems = itemList.getItemsByGroup("potions");
        // var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        // shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 488, this);
    }
}
