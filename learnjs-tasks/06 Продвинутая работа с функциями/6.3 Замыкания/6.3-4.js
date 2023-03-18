function sum(x) {

    return function (y) {
        return x + y;
    };

}

console.log((sum(1)(2)));
console.log((sum(5)(-1)));