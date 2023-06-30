console.log('Fibonacci')

// 100までのフィボナッチ数列

function Fibonacci (n) {
    if (n === 1) {
        return n
    }    // 1より大きい -> fibonacci(n-1) + fibonacci(n-2)
    return Fibonacci(n-1) + Fibonacci(n-2)
}

let i = 0
while (i < 11) {
    console.log(Fibonacci(i));
    i += 1;
}