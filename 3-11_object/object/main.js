'use strict'

// object
let jsbook = {
    // 書き方 kye: "value"
    // kye の部分の""は基本的に要らない
    title: 'JavaScript入門',
    price: 2500,
    stock: 3,
    obj: {
        text: "test",
        func: () => {
            console.log("this is callback function.")
        }
    }
};

console.log(jsbook)


//  object へのアクセス
let bookTitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook.obj.text)
console.log(jsbook.obj.func)


// object の値を変更
jsbook.price = 3000

console.log('オブジェクトの値を変える場合は？', jsbook.price)


console.log(jsbook['stock'])