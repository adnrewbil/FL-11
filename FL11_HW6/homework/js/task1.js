const a1 = +prompt('Please input a1 number');
const a2 = +prompt('Please input a2 number');
const b1 = +prompt('Please input b1 number');
const b2 = +prompt('Please input b2 number');
const c1 = +prompt('Please input c1 number');
const c2 = +prompt('Please input c2 number');
const two = 2;

if ((a1 + b1) / two === c1 && (a2 + b2) / two === c2) {
    console.log(true);
} else {
    console.log(false);
}