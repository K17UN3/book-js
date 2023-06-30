'use strict'

console.log('3-10 test')

// let num = 123
// ↑ ひとつずつ書いていくのはやってられない

let items = ['やること',
    'プログラミング言語を見る',
    'PCを買い替える',
    'スマートフォンを買い替える']

// console.log(todo[1])


// todo を全て出力するプログラム

items.forEach(
    (item) => {
    console.log(item)
}
);

// forEach(()) -> ()の中の処理を全てやってくれる
// (item => {}) -> item = 引数

// 項目を追加する

items.push("スマートフォン")
console.log(items)