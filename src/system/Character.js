class Character {
    constructor(maxHp, maxMp, atk, def) {
        this.maxHp = maxHp;
        this.actualHp = maxHp;
        this.maxMp = maxMp;
        this.actualMp = maxMp;
        this.atk = atk;
        this.def = def;
    }

    setMaxHp(maxHp) {
        this.maxHp = maxHp;
    }

    setActualHp(actualHp) {
        this.actualHp = actualHp;
    }

    setMaxMp(maxMp) {
        this.maxMp = maxMp;
    }

    setActualMp(actualMp) {
        this.actualMp = actualMp;
    }

    setAtk(atk) {
        this.atk = atk;
    }

    setDef(def) {
        this.def = def;
    }

    getMaxHp() {
        return this.maxHp;
    }

    getActualHp() {
        return this.actualHp;
    }

    getMaxMp() {
        return this.maxMp;
    }

    getActualMp() {
        return this.actualMp;
    }

    getAtk() {
        return this.atk;
    }

    getDef() {
        return this.def;
    }
}
