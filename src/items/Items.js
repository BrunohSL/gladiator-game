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

    getItemsFromGroup(group) {
        return items[group];
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
            "id": "wood_sword",
            "attack": 1,
            "properties": "",
        },
        "1": {
            "id": "wood_dagger",
            "attack": 1,
            "properties": "",
        },
        "2": {
            "id": "wood_axe",
            "attack": 1,
            "properties": "",
        },
        "3": {
            "id": "wood_staff",
            "attack": 1,
            "properties": "",
        },
        "4": {
            "id": "dumb_book",
            "attack": 1,
            "properties": "",
        },
        "5": {
            "id": "wood_bow",
            "attack": 1,
            "properties": "",
        },
        "6": {
            "id": "wood_crossbow",
            "attack": 1,
            "properties": "",
        },
    },

    "usable": {
        "0": {
            "id": "small_hp_potion",
            "restore_hp": 10,
            "restore_mp": 0,
        },
        "1": {
            "id": "small_mp_potion",
            "restore_hp": 0,
            "restore_mp": 10,
        },
    },
};
