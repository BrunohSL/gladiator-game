class ItemList {
    constructor() {

        items = {
            "armors": {
                "weak_helmet": {
                    "id": 0,
                    "defence": 3,
                    "properties": "",
                },
                "weak_armor": {
                    "id": 1,
                    "defence": 5,
                    "properties": "",
                },
                "weak_gloves": {
                    "id": 2,
                    "defence": 1,
                    "properties": "",
                },
                "weak_pants": {
                    "id": 3,
                    "defence": 2,
                    "properties": "",
                },
                "weak_boots": {
                    "id": 4,
                    "defence": 1,
                    "properties": "",
                },

            },

            "weapons": {
                "wood_sword": {
                    "id": 0,
                    "attack": 1,
                    "properties": "",
                },
                "wood_dagger": {
                    "id": 1,
                    "attack": 1,
                    "properties": "",
                },
                "wood_axe": {
                    "id": 2,
                    "attack": 1,
                    "properties": "",
                },
                "wood_staff": {
                    "id": 3,
                    "attack": 1,
                    "properties": "",
                },
                "dumb_book": {
                    "id": 4,
                    "attack": 1,
                    "properties": "",
                },
                "wood_bow": {
                    "id": 5,
                    "attack": 1,
                    "properties": "",
                },
                "wood_crossbow": {
                    "id": 6,
                    "attack": 1,
                    "properties": "",
                },
            },

            "usable": {
                "small_hp_potion": {
                    "id": 0,
                    "restore_hp": 10,
                    "restore_mp": 0,
                },
                "small_mp_potion": {
                    "id": 0,
                    "restore_hp": 0,
                    "restore_mp": 10,
                },
            },
        }
    }

    getItems() {
        console.log(items);
    }

    // getSpecificItem() {
    //     console.log(items);
    // }
}