class MagicStore extends Phaser.Scene {
    constructor() {
        super("magic_store");
    }

    preload() {
        this.load.image('magic_store_background', './src/assets/store_scenes/magic_store.png');
        this.load.image('shop_card', './src/assets/store_scenes/shop_card.png');
    }

    create() {
        this.add.image(400, 300, 'magic_store_background');
        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        goBackButton = this.input.keyboard.addKey('Q');

        // var storeGroupItems = itemList.getItemsByGroup("spells");
        // var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        // Shop.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(638, 488, this);
    }
}
