const deadManHp = 0;

class Fighter {
    constructor(fighter) {
        const {
            name,
            damage,
            hp,
            agility
        } = fighter;
        this.hp = hp;
        this.name = name;
        this.damage = damage;
        this.agility = agility;
        this.win = 0;
        this.losse = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getAgility() {
        return this.agility;
    }

    getHp() {
        return this.hp;
    }

    setHp(newHp) {
        this.hp = newHp;
        return this.hp;
    }

    getHealth() {
        return this.hp;
    }

    dealDamage(hp) {
        const updateHealth = hp - this.damage;
        if (updateHealth <= 0) {
            console.log(`${this.getName()} is won`);
            return 0;
        }
        return updateHealth;
    }

    attack(defender) {
        const success = 100;
        const hit = Math.floor(Math.random() * success);
        if (hit > defender.getAgility()) {
            console.log(`${this.name} make ${this.damage} damage to ${defender.getName()}`);
            const defendersHp = defender.getHp();
            const updateDefendersHp = this.dealDamage(defendersHp);
            defender.setHp(updateDefendersHp);
            return;
        } else {
            return console.log(`${this.name}'s attack missed`);
        }

    }

    addWin() {
        this.win += 1;
        return console.log(`${this.name} won's: ${this.win}`);
    }

    addLosse() {
        this.losse += 1;
        return console.log(`${this.name} losse's: ${this.losse}`);
    }

    logCombatHistory() {
        return console.log(`Name: ${this.name}, Wins: ${this.win}, Losses: ${this.losse}`);
    }

    heal(healHp) {
        this.hp += healHp;
        return this.hp;
    }
}

function battle(fighter1, fighter2) {
    let fighter1Hp = fighter1.getHp();
    let fighter2Hp = fighter2.getHp();
    if (fighter2Hp <= deadManHp) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
    if (fighter1Hp <= deadManHp) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }
    while (fighter1Hp !== deadManHp && fighter2Hp !== deadManHp) {
        fighter1.attack(fighter2);
        fighter2Hp = fighter2.getHp();
        if (fighter2Hp <= deadManHp) {
            fighter1.addWin();
            fighter2.addLosse();
            break;
        }
        fighter2.attack(fighter1);
        fighter1Hp = fighter1.getHp();
        if (fighter1Hp <= deadManHp) {
            fighter2.addWin();
            fighter1.addLosse();
            break;
        }
    }

}

const fighter1 = new Fighter({name:'John', damage: 20, hp: 100, agility: 40});
const fighter2 = new Fighter({name:'Joy', damage: 20, hp: 120, agility: 10});

battle(fighter1, fighter2);