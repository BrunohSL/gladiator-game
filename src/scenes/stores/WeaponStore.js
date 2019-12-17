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
        nextPageButton = this.input.keyboard.addKey('N');
        upButton = this.input.keyboard.addKey('UP');
        downButton = this.input.keyboard.addKey('DOWN');

        var storeGroupItems = itemList.getItemsByGroup("weapons");
        var itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        shopCards = shopClass.createCards(itemsSortedByPage, this);

        actualItem = 0;
        actualPage = 0;
    }

    update() {
        listenShopExit(175, 296, this);

        if (upButton.isDown && actualItem == 0) {
            console.log("Não pode subir mais");
        } else {
            if (this.input.keyboard.checkDown(upButton, 500)) {
                actualItem--;

                oldCardInfo = this.getCardInfo(shopCards[actualItem + 1]);
                cardInfo = this.getCardInfo(shopCards[actualItem]);

                shopCards[actualItem +1].image.destroy();
                shopCards[actualItem +1].text.destroy();
                shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", this);

                shopCards[actualItem].image.destroy();
                shopCards[actualItem].text.destroy();
                shopClass.createFullCard(cardInfo.position, "selected_shop_card", cardInfo.text, "white", this);
            }
        }

        if (downButton.isDown && actualItem == 5) {
            console.log("Não pode descer mais");
        } else {
            if (this.input.keyboard.checkDown(downButton, 500)) {
                actualItem++;

                oldCardInfo = this.getCardInfo(shopCards[actualItem - 1]);
                cardInfo = this.getCardInfo(shopCards[actualItem]);

                shopCards[actualItem -1].image.destroy();
                shopCards[actualItem -1].text.destroy();
                shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", this);

                shopCards[actualItem].image.destroy();
                shopCards[actualItem].text.destroy();
                shopClass.createFullCard(cardInfo.position, "selected_shop_card", cardInfo.text, "white", this);
            }
        }
    }

    getCardInfo(card) {
        var position = shopClass.createCardPositionObject(
            card.image.x,
            card.image.y,
            card.text.x,
            card.text.y,
        );

        var cardInfo = {
            "position": position,
            "text": card.text._text,
        };

        return cardInfo;
    }
}
