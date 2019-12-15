class Main extends Phaser.Scene{
    constructor(){
        super("main_game");
    }

    preload () {
        this.load.spritesheet('dude', './src/assets/dude.png',{
            frameWidth: 32,
            frameHeight: 48
        });

        this.load.image("tiles", "./src/assets/atlas.png");
        this.load.tilemapTiledJSON("map", "./src/assets/mainCity.json");
    }

    create(){
        const map = this.make.tilemap({ key: "map" });

        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = map.addTilesetImage("newTileset", "tiles");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const background = map.createStaticLayer("background", tileset, 0, 0);
        doors = map.createStaticLayer("doors", tileset, 0, 0);
        const scenario = map.createStaticLayer("scenario", tileset, 0, 0);

        // ----------------------------------------------------

        player = this.physics.add.sprite(100, 450, 'dude');
        player.setCollideWorldBounds(true);

        // ----------------------------------------------------

        cursors = this.input.keyboard.createCursorKeys();
        actionButton = this.input.keyboard.addKey('SPACE');

        // ----------------------------------------------------

        scenario.setCollisionByProperty({ collision: true});
        background.setCollisionByProperty({ collision: true});
        player.setCollideWorldBounds(true);

        this.physics.add.collider(player, scenario);
        this.physics.add.collider(player, background);
    }

    update() {
        cursors = this.input.keyboard.createCursorKeys();

        // Stop any previous movement from the last frame
        player.body.setVelocity(0);

        // Horizontal movement
        if (cursors.left.isDown) {
            player.body.setVelocityX(-playerSpeed);
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(playerSpeed);
        }

        // Vertical movement
        if (cursors.up.isDown) {
            player.body.setVelocityY(-playerSpeed);
        } else if (cursors.down.isDown) {
            player.body.setVelocityY(playerSpeed);
        }

        var tile = doors.getTileAtWorldXY(player.x, player.y);

        if (tile) {
            canEnter = true;
        } else {
            canEnter= false;
        }

        if (backFromStore) {
            player.setPosition(storePosition.x, storePosition.y);
            backFromStore = false;
            storePosition = {};
        }

        if (canEnter === true) {
            switch (tile.properties.store) {
                case 'battle':
                    createTextAndDestroy(240, 200, "Press SPACE to enter the battle arena", this);
                    if (actionButton.isDown) {
                        console.log("entrou na batalha");
                    }
                    break;
                case 'weapon':
                    createTextAndDestroy(50, 330, "Press SPACE to enter the shop", this);
                    if (actionButton.isDown) {
                        this.scene.start("weapon_store");
                    }
                    break;
                case 'armor':
                    createTextAndDestroy(500, 345, "Press SPACE to enter the shop", this);
                    if (actionButton.isDown) {
                        this.scene.start("armor_store");
                    }
                    break;
                case 'magic':
                    createTextAndDestroy(500, 520, "Press SPACE to enter the shop", this);
                    if (actionButton.isDown) {
                        this.scene.start("magic_store");
                    }
                    break;
                case 'enchantment':
                    createTextAndDestroy(50, 520, "Press SPACE to enter the shop", this);
                    if (actionButton.isDown) {
                        this.scene.start("enchantment_store");
                    }
                    break;
            }
        }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        player.body.velocity.normalize().scale(playerSpeed);
    }
}
