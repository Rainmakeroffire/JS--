// через setInterval

function printNumbers(from, to) {

    setInterval(function () {
        console.log(from);
        if (from == to) {
            clearInterval(setInterval);
        }
        from++;
    }, 1000);
}


printNumbers(1, 7);


// через setTimeout
function printNumbers(from, to) {
    setTimeout(function print() {
        console.log(from);
        if (from < to) {
            setTimeout(print, 1000);
        }
        from++;
    }, 1000);
}

printNumbers(1, 7);
