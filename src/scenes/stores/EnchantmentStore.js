class EnchantmentStore extends Phaser.Scene {
    constructor() {
        super("enchantment_store");
    }

    preload() {
        this.load.image('enchantment_store_background', './src/assets/store_scenes/enchantment_store.png');
        this.load.image('shop_card', './src/assets/store_scenes/shop_card.png');
    }

    create() {
        this.add.image(400, 300, 'enchantment_store_background');
        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        goBackButton = this.input.keyboard.addKey('Q');

        var storeGroupItems = itemList.getItemsByGroup("potions");
        console.log(storeGroupItems);
        var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);
        console.log(itemsSortedByPage);

        shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 488, this);
    }
}
