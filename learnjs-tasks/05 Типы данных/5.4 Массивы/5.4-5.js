function getMaxSubSum(arr) {
  let result = 0;
  let interimSum = 0;

  for (let i of arr) {
    interimSum += i;
    result = Math.max(result, interimSum);
    if (interimSum < 0) {
      interimSum = 0;
    }
  }

  return result;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))