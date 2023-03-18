function throttle(func, ms) {
    let throttleOn = false,
        argsSave,
        thisSave;

    function wrapper() {
        if (throttleOn) {
            thisSave = this;
            argsSave = arguments;
            return;
        }

        func.apply(this, arguments);

        throttleOn = true;

        setTimeout(function () {
            throttleOn = false;
            if (argsSave) {
                wrapper.apply(thisSave, argsSave);
                thisSave = null;
                argsSave = null;
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);