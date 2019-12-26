class CharSelection extends Phaser.Scene {
    constructor() {
        super("char_selection");
    }

    preload() {
        this.load.image('character_selection_background', './src/assets/menu_scenes/select_character.png');
        this.load.image('new_character_card', './src/assets/menu_scenes/new_character_card.png');
        this.load.image('selected_new_character_card', './src/assets/menu_scenes/selected_new_character_card.png');
        this.load.image('selected_new_character_card', './src/assets/menu_scenes/selected_new_character_card.png');
        this.load.image('character_card', './src/assets/menu_scenes/character_card.png');
        this.load.image('selected_character_card', './src/assets/menu_scenes/selected_character_card.png');
    }

    create() {
        this.add.image(400, 300, 'character_selection_background');
        this.add.image(190, 370, 'selected_character_card');
        this.add.image(410, 370, 'character_card');
        this.add.image(630, 360, 'selected_new_character_card');
        // this.add.text(300, 300, "Press SPACE to select");

        gameStartButton = this.input.keyboard.addKey('SPACE');
        newCharButton = this.input.keyboard.addKey('N');
        loadCharButton = this.input.keyboard.addKey('L');
        deleteCharButton = this.input.keyboard.addKey('D');

        character = new Character(100, 100, 10, 5);
    }

    update() {
        if (gameStartButton.isDown) {
            this.scene.start("main_game");
        }

        if (this.input.keyboard.checkDown(newCharButton, 2000)) {
            saveGame(character, 'save_0');
            console.log(localStorage);
        }

        if (this.input.keyboard.checkDown(loadCharButton, 2000)) {
            var teste = loadGame('save_0');
            console.log(teste);
        }

        if (this.input.keyboard.checkDown(deleteCharButton, 2000)) {
            deleteGame('save_0');
            console.log(localStorage);
        }
    }
}
