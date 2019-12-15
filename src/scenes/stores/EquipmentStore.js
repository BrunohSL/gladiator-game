class EquipmentStore extends Phaser.Scene {
    constructor() {
        super("equipment_store");
    }

    preload() {
        this.load.image('equipment_store_background', './src/assets/store_scenes/equipment_store.png');
    }

    create() {
        this.add.image(400, 300, 'equipment_store_background');

        goBackButton = this.input.keyboard.addKey('Q');

        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});
    }

    update() {
        if (goBackButton.isDown) {
            backFromStore = true;
            storePosition = {x: 638, y: 312};
            this.scene.start("main_game");
        }
    }
}
