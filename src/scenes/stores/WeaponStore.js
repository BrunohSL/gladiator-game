class WeaponStore extends Phaser.Scene {
    constructor() {
        super("weapon_store");
    }

    preload() {
        this.load.image('weapon_store_background', './src/assets/store_scenes/weapon_store.png');
        this.load.image('shop_card', './src/assets/store_scenes/shop_card.png');
        this.load.image('selected_shop_card', './src/assets/store_scenes/selected_shop_card.png');
    }

    create() {
        this.add.image(400, 300, 'weapon_store_background');
        this.add.text(50, 493, "Use the arrows to select the item", {fontFamily: "courier", color: "black"});
        this.add.text(50, 523, "Press N to next page", {fontFamily: "courier", color: "black"});
        this.add.text(50, 553, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        goBackButton = this.input.keyboard.addKey('Q');

        var storeGroupItems = itemList.getItemsByGroup("weapons");
        var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 296, this);
    }
}
