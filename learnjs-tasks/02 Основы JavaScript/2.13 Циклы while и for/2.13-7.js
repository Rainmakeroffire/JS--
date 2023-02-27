let n = 10;

let simpleNumber = []

for (let number = 2; number <= n; number++) {
  simpleNumber.every(item => number % item !== 0) ? simpleNumber.push(number) : ""
}


console.log(simpleNumber)