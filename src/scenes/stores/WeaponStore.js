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

        upButton = this.input.keyboard.addKey('UP');
        goBackButton = this.input.keyboard.addKey('Q');
        downButton = this.input.keyboard.addKey('DOWN');
        nextPageButton = this.input.keyboard.addKey('X');
        previousPageButton = this.input.keyboard.addKey('Z');

        var storeGroupItems = itemList.getItemsByGroup("weapons");
        itemsSortedByPage = itemList.sortItemsByPage(storeGroupItems);

        shopCards = shopClass.createCards(itemsSortedByPage, this);
    }

    update() {
        listenShopExit(175, 296, this);
        if (upButton.isDown && actualItem == 0) {
            console.log("Não pode subir mais");
        } else {
            if (this.input.keyboard.checkDown(upButton, 500)) {
                this.nextItem();
            }
        }

        if (downButton.isDown && actualItem >= itemsSortedByPage[actualPage].length -1) {
            console.log("Não pode descer mais");
        } else {
            if (this.input.keyboard.checkDown(downButton, 500)) {
                this.previousItem();
            }
        }

        if (itemsSortedByPage.length > actualPage + 1) {
            if (this.input.keyboard.checkDown(nextPageButton, 500)) {
                this.nextPage();
            }
        }

        if ((actualPage) && (actualPage != 0)) {
            if (this.input.keyboard.checkDown(previousPageButton, 500)) {
                this.previousPage();
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

    nextItem() {
        actualItem--;

        oldCardInfo = this.getCardInfo(shopCards[actualItem + 1]);
        actualCardInfo = this.getCardInfo(shopCards[actualItem]);

        shopCards[actualItem +1].image.destroy();
        shopCards[actualItem +1].text.destroy();
        shopCards[actualItem +1] = shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", this);

        shopCards[actualItem].image.destroy();
        shopCards[actualItem].text.destroy();
        shopCards[actualItem] = shopClass.createFullCard(actualCardInfo.position, "selected_shop_card", actualCardInfo.text, "white", this);
    }

    previousItem() {
        actualItem++;

        oldCardInfo = this.getCardInfo(shopCards[actualItem - 1]);
        actualCardInfo = this.getCardInfo(shopCards[actualItem]);

        shopCards[actualItem -1].image.destroy();
        shopCards[actualItem -1].text.destroy();
        shopCards[actualItem -1] = shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", this);

        shopCards[actualItem].image.destroy();
        shopCards[actualItem].text.destroy();
        shopCards[actualItem] = shopClass.createFullCard(actualCardInfo.position, "selected_shop_card", actualCardInfo.text, "white", this);
    }

    nextPage() {
        actualItem = 0;
        oldCardInfo = "";
        actualCardInfo = "";
        actualPage++;

        shopCards.forEach(card => {
            card.image.destroy();
            card.text.destroy();
        });

        shopCards = "";

        shopCards = shopClass.createCards(itemsSortedByPage, this);
    }

    previousPage() {
        actualItem = 0;
        oldCardInfo = "";
        actualCardInfo = "";
        actualPage--;

        shopCards.forEach(card => {
            card.image.destroy();
            card.text.destroy();
        });

        shopCards = "";

        shopCards = shopClass.createCards(itemsSortedByPage, this);
    }
}
