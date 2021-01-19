function fibonacci(num) {
    var fibo = [0, 1];
    for (var i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacci(5));

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var result = fibonacci(10);
console.log(result);