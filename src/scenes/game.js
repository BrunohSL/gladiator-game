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

var player;
var cursors;
var canEnter = false;

var backFromStore = false;
var storePosition = {};

var actionButton;
var gameStartButton;
var goBackButton;

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
