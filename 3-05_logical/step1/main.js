console.log(main.js)

const hour = new Date().getHours();

if(hour >= 19 && hour < 21) {
    window.alert = ('お弁当３０％ＯＦＦ!');
} else if (hour === 9 || hour === 15) {
    window.alert = ('お弁当一つ買ったらもう一つおまけ');
} else {
    window.alert = ('お弁当はいかがですか？');
}