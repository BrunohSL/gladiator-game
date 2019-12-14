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
    scene: [Menu, Main]
}

var game = new Phaser.Game(config);

var player = "player";
var cursors;
var canEnter = false;

var actionButton;

var playerSpeed = 220;
var doors;
