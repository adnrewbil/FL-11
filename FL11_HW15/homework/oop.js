class Humburger {
    constructor(type, calories, secretIngredient = false) {
        this.type = type;
        this._calories = calories;
        this.secretIngredient = secretIngredient;
        this.getCalories = () => this._calories;
        this.setCalories = (value) => {
            this._calories = value
        };
        this.countCheese = 0;
        this.countTomato = 0;
        this.countBite = 0;

    }

    addCheese() {
        let cheeseCal = 120;

        if (this.countCheese > 0) {
            console.log('Sorry, you can add cheese only once.');
        } else if (this.countBite > 0) {
            console.log('Sorry, you cannot add cheese.');
        } else {
            this.countCheese++
            this._calories += cheeseCal;
        }
    }

    addTomato() {
        let tomatoCal = 20;

        if (this.countTomato > 1) {
            console.log('Sorry, you can add tomato only twice.');
        } else if (this.countBite > 0) {
            console.log('Sorry, you cannot add tomato.');
        } else {
            this.countTomato++
            this._calories += tomatoCal;
        }
    }

    addSecretIngredient() {
        let secretIngCal = 100;

        if (this.secretIngredient === true) {
            console.log('Sorry, you can add secret ingredient only once.');
        } else if (this.countCheese + this.countTomato > 0) {
            console.log('Sorry, you can add secret ingredient only before another ingredient.');
        } else if (this.countBite > 0) {
            console.log('Sorry, you cannot add secret ingredient.');
        } else {
            this.secretIngredient = true;
            this._calories += secretIngCal;
        }
    }

    bite() {
        this.countBite++
    }

    info() {
        let secretInfo = '';
        let cheeseInfo = '';
        let tomatoInfo = '';

        if (this.secretIngredient) {
            secretInfo = 'with secret ingredient, ';
        }

        if (this.countCheese) {
            cheeseInfo = 'with cheese, ';
        }

        if (this.countTomato) {
            tomatoInfo = `with ${this.countTomato} tomato, `
        }

        console.log(`${this.type} humburger: ${secretInfo}${cheeseInfo}${tomatoInfo} 
        is bit ${this.countBite} times. Total calories: ${this._calories}`);
    }

}
let cal = 600;

const myHumburger = new Humburger('vegan', cal);

console.log(myHumburger.getCalories());

myHumburger.addSecretIngredient();
myHumburger.addCheese();
myHumburger.addTomato();
myHumburger.addTomato();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
myHumburger.info();
console.log(myHumburger);