// For Loop
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

let n = factorial(4);
console.log(n);

// While Loop
function whileFactorial(n) {
    let p = 1;
    let f = 1;
    while (p <= n) {
        f *= p;
        p++;
    }
    return f;
}
let fa = whileFactorial(4);
console.log(fa);

// recursion
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log(factorialize(5));