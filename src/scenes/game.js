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

var player;
var cursors;
var canEnter = false;

var backFromStore = false;
var storePosition = {};
var shopCards;
var actualPage;
var actualItem;
var cardInfo;
var oldCardInfo;

var actionButton;
var gameStartButton;
var goBackButton;
var nextPageButton;
var upButton;
var downButton;

var playerSpeed = 350;
var doors;

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
