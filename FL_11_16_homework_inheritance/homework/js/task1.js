function assign(target, ...args) {
    for (let i = 0; i < args.length; i++) {
        for (let prop in args[i]) {
            if (Object.prototype.hasOwnProperty.call(args[i], prop)) {
                target[prop] = args[i][prop];
            }
        }
    }

    return target;
}

const defaults = {
    a: 123,
    b: 777
};
const options = {
    a: 456
};
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
