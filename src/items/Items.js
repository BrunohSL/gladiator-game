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
            "name": "weak_helmet",
            "defence": 3,
            "properties": "",
        },
        "1": {
            "name": "weak_armor",
            "defence": 5,
            "properties": "",
        },
        "2": {
            "name": "weak_gloves",
            "defence": 1,
            "properties": "",
        },
        "3": {
            "name": "weak_pants",
            "defence": 2,
            "properties": "",
        },
        "4": {
            "name": "weak_boots",
            "defence": 1,
            "properties": "",
        },
    },

    "weapons": {
        "0": {
            "name": "wood_sword",
            "attack": 1,
            "properties": "",
        },
        "1": {
            "name": "wood_dagger",
            "attack": 1,
            "properties": "",
        },
        "2": {
            "name": "wood_axe",
            "attack": 1,
            "properties": "",
        },
        "3": {
            "name": "wood_staff",
            "attack": 1,
            "properties": "",
        },
        "4": {
            "name": "dumb_book",
            "attack": 1,
            "properties": "",
        },
        "5": {
            "name": "wood_bow",
            "attack": 1,
            "properties": "",
        },
        "6": {
            "name": "wood_crossbow",
            "attack": 1,
            "properties": "",
        },
    },

    "potion": {
        "0": {
            "name": "small_hp_potion",
            "restore_hp": 10,
            "restore_mp": 0,
        },
        "1": {
            "name": "small_mp_potion",
            "restore_hp": 0,
            "restore_mp": 10,
        },
    }
};
