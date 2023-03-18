function debounce(f, ms) {

    let awaiting = false;

    return function () {
        if (awaiting) return;
        f.apply(this, arguments);
        awaiting = true;
        setTimeout(() => awaiting = false, ms);
    };

}

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);