//Product of consecutive Fib numbers (5 kyu)

function productFib(prod){
    let n = 1, arr = [];
    while (prod > fib(n) * fib(n + 1)) {
        n++;
    }
    arr.push(fib(n));
    arr.push(fib(n + 1));
    arr.push(prod === fib(n) * fib(n + 1));
    return arr;
}
  
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}