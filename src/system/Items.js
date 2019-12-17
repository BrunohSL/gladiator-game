class Items {
    getItems() {
        return items;
    }

    getSpecificItem(group, id) {
        if (!group) {
            return "You need to pass the item group"
        }

        if (!id) {
            return "You need to pass the item id"
        }

        return items[group][id];
    }

    getItemsByGroup(group) {
        if (!items[group]) {
            return "Group not found";
        }

        return items[group];
    }

    sortItemsByPage(items) {
        var pageSize = 6;
        var paginatedItems = [];
        var pageNumber = 0;

        paginatedItems[pageNumber] = [];

        for (var key in items) {
            if (paginatedItems[pageNumber].length < pageSize) {
                paginatedItems[pageNumber].push(items[key]);
            } else {
                pageNumber++;
                paginatedItems[pageNumber] = [];
                paginatedItems[pageNumber].push(items[key]);
            };
        }

        return paginatedItems;
    }
}

const items = {
    "armors": {
        "0": {
            "name": "Weak Helmet",
            "defence": 3,
            "properties": "",
            "price": 300,
        },
        "1": {
            "name": "Weak Armor",
            "defence": 5,
            "properties": "",
            "price": 400,
        },
        "2": {
            "name": "Weak Gloves",
            "defence": 1,
            "properties": "",
            "price": 70,
        },
        "3": {
            "name": "Weak Pants",
            "defence": 2,
            "properties": "",
            "price": 200,
        },
        "4": {
            "name": "Weak Boots",
            "defence": 1,
            "properties": "",
            "price": 150,
        },
    },

    "weapons": {
        "0": {
            "name": "Wood Sword",
            "attack": 1,
            "properties": "",
            "price": 250,
        },
        "1": {
            "name": "Wood Dagger",
            "attack": 1,
            "properties": "",
            "price": 150,
        },
        "2": {
            "name": "Wood Axe",
            "attack": 1,
            "properties": "",
            "price": 300,
        },
        "3": {
            "name": "Woof Staff",
            "attack": 1,
            "properties": "",
            "price": 100,
        },
        "4": {
            "name": "Dumb Book",
            "attack": 1,
            "properties": "",
            "price": 200,
        },
        "5": {
            "name": "Wood Bow",
            "attack": 1,
            "properties": "",
            "price": 320,
        },
        "6": {
            "name": "Wood Crossbow",
            "attack": 1,
            "properties": "",
            "price": 380,
        },
    },

    "potions": {
        "0": {
            "name": "HP Potion",
            "restore": 10,
            "price": 50,
        },
        "1": {
            "name": "MP Potion",
            "restore": 10,
            "price": 50,
        },
    }
};
