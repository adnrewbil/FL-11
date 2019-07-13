function addOne(x) {
    return x + 1;
}

function pipe() {
    let num = arguments[0];
    let func = 0;

    for (let i = 1; i < arguments.length; i++) {
        func = arguments[i];
        num = func(num);
    }
    return num;
}
console.log(pipe(1, addOne, addOne));