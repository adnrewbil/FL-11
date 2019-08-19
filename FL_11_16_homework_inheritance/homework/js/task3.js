function Pokemon (type, specie, canFly) {
    this.type = type;
    this.specie = specie;
    this.isCanFly = canFly;

    this.getType = function () {
        return this.type;
    }
    this.getSpecie = function () {
        return this.specie;
    }
    this.canFly = function () {
        return this.isCanFly;
    }
    this.getPokemonType = function() {
        return this.constructor.name;
    }      
    
}

function Charmander () {
    Object.setPrototypeOf(this, new Pokemon('Fire', 'Lizard Pokémon', false));
    this.constructor = Charmander;

    this.evolve = function() {
        return new Charmeleon();
    }
}

function Charmeleon () {
    Object.setPrototypeOf(this, new Pokemon('Fire', 'Flame Pokémon', false));
    this.constructor = Charmeleon;

    this.evolve = function() {
        return new Charizard();
    }
}
function Charizard () {
    Object.setPrototypeOf(this, new Pokemon('Fire', 'Flame Pokémon', true));
    this.constructor = Charizard;

    this.evolve = function() {
        return this;
    }
}


function Pichu () {
    Object.setPrototypeOf(this, new Pokemon('Electric', 'Mouse Pokémon', false));
    this.constructor = Pichu;

    this.evolve = function() {
        return new Pikachu();
    }
}

function Pikachu () {
    Object.setPrototypeOf(this, new Pokemon('Electric', 'Mouse Pokémon', false));
    this.constructor = Pikachu;

    this.evolve = function() {
        return new Raichu();
    }
}

function Raichu () {
    Object.setPrototypeOf(this, new Pokemon('Electric', 'Mouse Pokémon', false));
    this.constructor = Raichu;

    this.evolve = function() {
        return this;
    }
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

 console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true


const pichu = new Pichu();
console.log(pichu.getPokemonType()); // => Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log(raichu2 === raichu); // true

