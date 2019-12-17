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
            var text =  this.createText(item, context.constructor.name);
            if (cardStartPoint.x == 300 && cardStartPoint.y == 170) {
                context.add.image(cardStartPoint.x, cardStartPoint.y, 'selected_shop_card');
                context.add.text(textStartPoint.x, textStartPoint.y, text, {fontFamily: "courier", color: "white"});
            } else {
                context.add.image(cardStartPoint.x, cardStartPoint.y, 'shop_card');
                context.add.text(textStartPoint.x, textStartPoint.y, text, {fontFamily: "courier", color: "black"});
            }

            cardStartPoint.y  = cardStartPoint.y + 54;
            textStartPoint.y  = textStartPoint.y + 54;
        });
    }

    createText(item, group) {
        var name = item.name.toString();
        var atkDefReg;
        var type;
        switch (group) {
            case "WeaponStore":
                atkDefReg = item.attack.toString();
                type = "Attack: ";
            break;
            case "ArmorStore":
                atkDefReg = item.defence.toString();
                type = "Deffence: ";
            break;
            case "EnchantmentStore":
                atkDefReg = item.restore.toString();
                type = "Restore: ";
            break;
            // case "MagicStore":
            //     atkDefReg = item.attack.toString();
            //     type = "Power: ";
            // break;
        }
        var price = item.price.toString();

        return "Name: " + name.padEnd(15, " ") + type.padEnd(13, " ") + atkDefReg.padEnd(8, " ") + price.padStart(5, " ") + " G";
    }
}
