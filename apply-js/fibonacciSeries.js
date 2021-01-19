function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibonacci(37));