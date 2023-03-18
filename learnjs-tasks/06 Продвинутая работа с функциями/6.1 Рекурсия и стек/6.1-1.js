// Решение через циклы
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(100));


// Решение через рекурсию

function sumTo(n) {
        return n == 1 ? n : sumTo(n - 1) + n;
    }

console.log(sumTo(100));


// Решение через формулу арифметической прогрессии
function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(100));