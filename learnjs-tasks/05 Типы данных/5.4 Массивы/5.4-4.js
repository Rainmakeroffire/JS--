function sumInput() {
  let nums = [];

  while (true) {
    number = prompt('Введите число', 0);
    
    if (!isFinite(number) || number === null || number === '') {
        break
    }
    
    nums.push(+number);
  }

  let sum = nums.reduce(function (x, y) {
    return x + y;
  }, 0);

  return sum;
}

alert(sumInput());