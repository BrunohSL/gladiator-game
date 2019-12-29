class CharSelection extends Phaser.Scene {
    constructor() {
        super("char_selection");
    }

    preload() {
        this.load.image('character_selection_background', './src/assets/menu_scenes/select_character.png');
        this.load.image('new_character_card', './src/assets/menu_scenes/new_character_card.png');
        this.load.image('selected_new_character_card', './src/assets/menu_scenes/selected_new_character_card.png');
        this.load.image('character_card', './src/assets/menu_scenes/character_card.png');
        this.load.image('selected_character_card', './src/assets/menu_scenes/selected_character_card.png');
    }

    create() {
        this.add.image(400, 300, 'character_selection_background');

        gameStartButton = this.input.keyboard.addKey('SPACE');
        newCharButton = this.input.keyboard.addKey('N');
        saveCharButton = this.input.keyboard.addKey('S');
        loadCharButton = this.input.keyboard.addKey('L');
        deleteCharButton = this.input.keyboard.addKey('D');
        nextCharacterButton = this.input.keyboard.addKey('X');
        previousCharacterButton = this.input.keyboard.addKey('Z');

        character = new Character(100, 100, 10, 5);
        actualItem = 0;

        characterList = this.createCharacterCards();
    }

    update() {
        if (gameStartButton.isDown) {
            this.scene.start("main_game");
        }

        if (this.input.keyboard.checkDown(saveCharButton, 2000)) {
            if (localStorage.length < 3) {
                saveGame(character, 'save_0');
                console.log("Salvou o player: " + character);
                character.setAtk(20);
                character.setDef(40);
                saveGame(character, 'save_1');
                // console.log("Salvou o player: " + character);
                // character.setAtk(50);
                // character.setDef(50);
                // saveGame(character, 'save_2');
                // console.log("Salvou o player: " + character);
            }
        }

        if (this.input.keyboard.checkDown(loadCharButton, 2000)) {
            var characterInfo = loadGame('save_0');
            console.log("Carregou o jogo: " + characterInfo);
        }

        if (nextCharacterButton.isDown && actualItem < 2) {
            if (this.input.keyboard.checkDown(nextCharacterButton, 500)) {
                this.rightCharacter();
            }
        }

        if (previousCharacterButton.isDown && actualItem > 0) {
            if (this.input.keyboard.checkDown(previousCharacterButton, 500)) {
                this.leftCharacter();
            }
        }

        if (this.input.keyboard.checkDown(deleteCharButton, 2000)) {
            deleteGame('save_0');
            console.log("Deletou");
            deleteGame('save_1');
            console.log("Deletou");
            deleteGame('save_2');
            console.log("Deletou");
        }
    }

    rightCharacter() {
        actualItem++;

        oldCardInfo = getCardInfo(characterList[actualItem - 1]);
        actualCardInfo = getCardInfo(characterList[actualItem]);

        characterList[actualItem -1].image.destroy();
        characterList[actualItem -1].text.destroy();
        characterList[actualItem -1] = this.createFullCharacterCard(oldCardInfo.position, 'character_card', oldCardInfo.text, "black", this)

        characterList[actualItem].image.destroy();
        characterList[actualItem].text.destroy();
        characterList[actualItem] = this.createFullCharacterCard(actualCardInfo.position, "selected_character_card", actualCardInfo.text, "black", this);
    }

    leftCharacter() {
        actualItem--;

        oldCardInfo = getCardInfo(characterList[actualItem + 1]);
        actualCardInfo = getCardInfo(characterList[actualItem]);

        characterList[actualItem +1].image.destroy();
        characterList[actualItem +1].text.destroy();
        characterList[actualItem +1] = this.createFullCharacterCard(oldCardInfo.position, 'character_card', oldCardInfo.text, "black", this)

        characterList[actualItem].image.destroy();
        characterList[actualItem].text.destroy();
        characterList[actualItem] = this.createFullCharacterCard(actualCardInfo.position, "selected_character_card", actualCardInfo.text, "black", this);
    }

    createCharacterText(saveSlot) {
        var info = loadGame(saveSlot);

        var text = "HP: " + info.actualHp + "\\" + info.maxHp
        + "\nMP: " + info.actualMp + "\\" + info.maxMp
        + "\nAtk: " + info.atk
        + "\nDef: " + info.def;

        return text;
    }

    createCharacterCardPositionObject(imageX, imageY, textX, textY) {
        return {
            cardStartPoint: {
                "x": imageX,
                "y": imageY,
            },
            textStartPoint: {
                "x": textX,
                "y": textY,
            },
        }
    }

    createCharacterCards() {
        var position = this.createCharacterCardPositionObject(190, 370, 120, 400);

        var characterCardsArray = [];
        var counter = 0;

        for (var key in localStorage) {
            if (/save/g.test(key)) {
                var text = this.createCharacterText(key);

                if (position.cardStartPoint.x == 190 && position.cardStartPoint.y == 370) {
                    characterCardsArray[counter] = this.createFullCharacterCard(position, 'selected_character_card', text, "black", this);
                } else {
                    characterCardsArray[counter] = this.createFullCharacterCard(position, 'character_card', text, "black", this);
                }

                position.cardStartPoint.x  = position.cardStartPoint.x + 220;
                position.textStartPoint.x  = position.textStartPoint.x + 220;
                counter++;
            }
        }

        this.checkForEmptyCharacter(position, characterCardsArray, counter);

        return characterCardsArray;
    }

    createFullCharacterCard(position, image, text, textColor, context) {
        var fullCard = [];

        fullCard["image"] = context.add.image(position.cardStartPoint.x, position.cardStartPoint.y, image);
        fullCard["text"] = context.add.text(position.textStartPoint.x, position.textStartPoint.y, text, {fontFamily: "courier", color: textColor});

        return fullCard;
    }

    checkForEmptyCharacter(position, characterCardsArray, counter) {
        var empty = 3 - localStorage.length;

        if (empty > 0) {
            if (empty === 3) {
                characterCardsArray[counter] = this.add.image(190, 370, 'selected_new_character_card');
                position.cardStartPoint.x  = position.cardStartPoint.x + 220;
                empty--;
                counter++;
            }

            for (var i = empty; i > 0; i--) {
                characterCardsArray[counter] = this.add.image(position.cardStartPoint.x, position.cardStartPoint.y, 'new_character_card');
                position.cardStartPoint.x  = position.cardStartPoint.x + 220;
                counter++;
            }
        }

        return characterCardsArray;
    }
}
