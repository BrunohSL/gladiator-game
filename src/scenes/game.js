var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: 0x000000,
    scene: [
        Menu,
        CharSelection,
        Main,
        WeaponStore,
        ArmorStore,
        MagicStore,
        EnchantmentStore,
    ]
}

var game = new Phaser.Game(config);

const itemList = new Items();
const shopClass = new Shop();

var character;
var player;
var cursors;
var canEnter = false;

var backFromStore = false;
var storePosition = {};
var shopCards;
var actualPage;
var actualItem;
var actualCardInfo;
var oldCardInfo;
var itemsSortedByPage;

var actionButton;
var gameStartButton;
var goBackButton;
var nextPageButton;
var previousPageButton;
var upButton;
var downButton;

var newCharButton;
var loadCharButton;
var deleteCharButton;

var playerSpeed = 350;
var doors;

function saveGame(player, saveName) {
    localStorage.setItem(saveName, JSON.stringify(player));
}

function loadGame(saveName) {
        return JSON.parse(localStorage.getItem(saveName));
}

function deleteGame(saveName) {
    localStorage.removeItem(saveName);
}

function createTextAndDestroy(x, y, text, context) {
    var newText = context.add.text(x, y, text, {fontFamily: "courier", color: "black"});

    setTimeout(function() {
        newText.destroy();
    }, 100);
}

function listenShopExit(x, y, context) {
    if (goBackButton.isDown) {
        backFromStore = true;
        storePosition = {x: x, y: y};
        context.scene.start("main_game");
    }
}

function nextItem(context) {
    actualItem++;

    oldCardInfo = getCardInfo(shopCards[actualItem - 1]);
    actualCardInfo = getCardInfo(shopCards[actualItem]);

    shopCards[actualItem -1].image.destroy();
    shopCards[actualItem -1].text.destroy();
    shopCards[actualItem -1] = shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", context);

    shopCards[actualItem].image.destroy();
    shopCards[actualItem].text.destroy();
    shopCards[actualItem] = shopClass.createFullCard(actualCardInfo.position, "selected_shop_card", actualCardInfo.text, "white", context);
}

function previousItem(context) {
    actualItem--;

    oldCardInfo = getCardInfo(shopCards[actualItem + 1]);
    actualCardInfo = getCardInfo(shopCards[actualItem]);

    shopCards[actualItem +1].image.destroy();
    shopCards[actualItem +1].text.destroy();
    shopCards[actualItem +1] = shopClass.createFullCard(oldCardInfo.position, "shop_card", oldCardInfo.text, "black", context);

    shopCards[actualItem].image.destroy();
    shopCards[actualItem].text.destroy();
    shopCards[actualItem] = shopClass.createFullCard(actualCardInfo.position, "selected_shop_card", actualCardInfo.text, "white", context);
}

function nextPage(context) {
    actualItem = 0;
    oldCardInfo = "";
    actualCardInfo = "";
    actualPage++;

    shopCards.forEach(card => {
        card.image.destroy();
        card.text.destroy();
    });

    shopCards = "";

    shopCards = shopClass.createCards(itemsSortedByPage, context);
}

function previousPage(context) {
    actualItem = 0;
    oldCardInfo = "";
    actualCardInfo = "";
    actualPage--;

    shopCards.forEach(card => {
        card.image.destroy();
        card.text.destroy();
    });

    shopCards = "";

    shopCards = shopClass.createCards(itemsSortedByPage, context);
}

function getCardInfo(card) {
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
