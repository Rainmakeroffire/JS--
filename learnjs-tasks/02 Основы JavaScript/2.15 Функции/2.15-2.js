// вариант 1
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// вариант 2
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}