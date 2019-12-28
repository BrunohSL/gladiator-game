class Shop {
    createCards(itemsByPage, context) {
        var position = this.createCardPositionObject(300, 170, 55, 160);

        var shopItemArray = [];
        var itemCount = 0;

        itemsByPage[actualPage].forEach(item => {
            var text =  this.createText(item, context.constructor.name);
            if (position.cardStartPoint.x == 300 && position.cardStartPoint.y == 170) {
                shopItemArray[itemCount] = this.createFullCard(position, 'selected_shop_card', text, "white", context);
                itemCount++;
            } else {
                shopItemArray[itemCount] = this.createFullCard(position, 'shop_card', text, "black", context);
                itemCount++;
            }

            position.cardStartPoint.y  = position.cardStartPoint.y + 54;
            position.textStartPoint.y  = position.textStartPoint.y + 54;
        });

        return shopItemArray;
    }

    createText(item, group) {
        var name = item.name.toString();
        var price = item.price.toString();

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

        return "Name: " + name.padEnd(15, " ") + type.padEnd(13, " ") + atkDefReg.padEnd(8, " ") + price.padStart(5, " ") + " G";
    }

    createFullCard(position, image, text, textColor, context) {
        var fullCard = [];

        fullCard["image"] = context.add.image(position.cardStartPoint.x, position.cardStartPoint.y, image);
        fullCard["text"] = context.add.text(position.textStartPoint.x, position.textStartPoint.y, text, {fontFamily: "courier", color: textColor});

        return fullCard;
    }

    createCardPositionObject(imageX, imageY, textX, textY) {
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
}
