// Task 1

const maxElement = (arr) => arr.reduce((a, b) => Math.max(a, b));

// Task 2

const copyArray = (copy) => [...copy];

// Task 3

function addUniqueId(obj) {
    let copiedObj = {...obj};
    let id = Symbol('id');
    copiedObj[id] = 1;
    return copiedObj;
}

// Task 4

function regroupObject(obj) {
    let {name, details: {id, age, university}} = obj;
    return {university, user: {age, firstName: name, id}};
} 

// Task 5

const findUniqueElements = (arr) => [... new Set(arr)];

// Task 6

const hideNumber = (num) => num.slice(-4).padStart(num.length, '*');

// Task 7

function add (x = null, y = null) {
    if (x === null || y === null){
        console.error('Uncaught Error: Missing property');
    } else {
        return x + y;
    }
}

// Task 8

function getNames(url) {
    fetch(url)
        .then((response) => response.json())
        .then((myJson) => {
            myJson.sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            });
            myJson.forEach(name => console.log(name.name));
        });
}

// Task 9

async function getNames1(url) {
    const response = await fetch(url);
    const myJson = await response.json();
    myJson.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    myJson.forEach(name => console.log(name.name));
}