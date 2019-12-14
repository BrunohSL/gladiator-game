class Main extends Phaser.Scene{
    constructor(){
        super("main_game");
    }

    create(){
        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    }
}
