console.log('test')

// 引数はnum
// 両方で割り切れる FizzBuzz!
// 3で割り切れる Fizz!
// 5で割り切れる Buzz!
// それ以外はそのまま返す

function FizzBuzz (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz!';
    }else if (num % 3 === 0) {
        return 'Fizz!';
    } else if (num % 5 === 0) {
        return 'Buzz!';
    } else {
        return num;
    }
}

console.log(FizzBuzz(3));