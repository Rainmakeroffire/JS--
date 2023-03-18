function fib(n) {
    let x = 1;
    let y = 1;
    
    for (let i = 3; i <= n; i++) {
      let z = x + y;
      x = y;
      y = z;
    }
    return y;
  }

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));