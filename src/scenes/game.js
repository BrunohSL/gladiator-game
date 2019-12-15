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
        EquipmentStore,
        MagicStore,
        PotionStore,
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
