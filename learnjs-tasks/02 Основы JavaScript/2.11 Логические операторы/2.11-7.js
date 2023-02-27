let age = 23;

// вариант 1
if (!(age >= 14 && age <= 90)) {
    console.log('true');
} else {
    console.log('false');
}

// вариант 2
if (age < 14 || age > 90) {
    console.log('true');
} else {
    console.log('false');
}