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
        return this.maxHp;
    }

    getMaxMp() {
        return this.maxHp;
    }

    getActualMp() {
        return this.maxHp;
    }

    getAtk() {
        return this.maxHp;
    }

    getDef() {
        return this.maxHp;
    }
}
