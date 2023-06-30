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
// return で実行は止まる

// 1~10000回繰り返す

let i = 1;
while(i <= 10000) {
    console.log(FizzBuzz(i));
    i += 1;
}