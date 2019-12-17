class WeaponStore extends Phaser.Scene {
    constructor() {
        super("weapon_store");
    }

    preload() {
        this.load.image('weapon_store_background', './src/assets/store_scenes/weapon_store.png');
        this.load.image('shop_card', './src/assets/store_scenes/shop_card.png');
    }

    create() {
        this.add.image(400, 300, 'weapon_store_background');
        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        goBackButton = this.input.keyboard.addKey('Q');

        var storeGroupItems = itemList.getItemsByGroup("weapons");
        var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 296, this);
    }
}
