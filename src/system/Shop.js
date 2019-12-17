class Shop {
    createCards(itemsByPage, context) {
        var cardStartPoint = {
            "x": 300,
            "y": 170,
        };

        var textStartPoint = {
            "x": 55,
            "y": 160,
        };

        itemsByPage[actualPage].forEach(item => {
            var text =  this.createText(item);

            context.add.image(cardStartPoint.x, cardStartPoint.y, 'shop_card');
            context.add.text(textStartPoint.x, textStartPoint.y, text, {fontFamily: "courier", color: "black"});

            cardStartPoint.y  = cardStartPoint.y + 54;
            textStartPoint.y  = textStartPoint.y + 54;
        });
    }

    createText(item) {
        var name = item.name.toString();
        var attack = item.attack.toString();
        var price = item.price.toString();

        return "Name: " + name.padEnd(15, " ") + "Attack Power: " + attack.padEnd(8, " ") + price.padStart(5, " ") + " G";
    }
}
