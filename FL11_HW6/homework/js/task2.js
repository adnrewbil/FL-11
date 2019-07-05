const a = +prompt('Please enter A length');
const b = +prompt('Please enter B length');
const c = +prompt('Please enter C length');

if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
        console.log('Eequivalent triangle')
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle')
    } else {
        console.log('Normal triangle')
    }
} else {
    console.log('Triangle doesn’t exist')
}