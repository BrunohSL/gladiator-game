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
        this.add.text(50, 495, "Use the arrows to select the item", {fontFamily: "courier", color: "black"});
        this.add.text(50, 515, "Press X to next page", {fontFamily: "courier", color: "black"});
        this.add.text(50, 535, "Press Z to previous page", {fontFamily: "courier", color: "black"});
        this.add.text(50, 555, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});

        actualItem = 0;
        actualPage = 0;

        nextItemButton = this.input.keyboard.addKey('UP');
        goBackButton = this.input.keyboard.addKey('Q');
        previousItemButton = this.input.keyboard.addKey('DOWN');
        nextPageButton = this.input.keyboard.addKey('X');
        previousPageButton = this.input.keyboard.addKey('Z');

        var storeGroupItems = itemList.getItemsByGroup("weapons");
        itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        shopCards = shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 296, this);

        if (previousItemButton.isDown && actualItem >= itemsSortedByPage[actualPage].length -1) {
            console.log("Não tem mais item");
        } else {
            if (this.input.keyboard.checkDown(previousItemButton, 500)) {
                nextItem(this);
            }
        }

        if (nextItemButton.isDown && actualItem == 0) {
            console.log("Não pode subir mais");
        } else {
            if (this.input.keyboard.checkDown(nextItemButton, 500)) {
                previousItem(this);
            }
        }

        if (itemsSortedByPage.length > actualPage + 1) {
            if (this.input.keyboard.checkDown(nextPageButton, 500)) {
                nextPage(this);
            }
        }

        if ((actualPage) && (actualPage != 0)) {
            if (this.input.keyboard.checkDown(previousPageButton, 500)) {
                previousPage(this);
            }
        }
    }
}
