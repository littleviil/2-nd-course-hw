//1
// const str_1 = 'js';
// console.log(str_1.toUpperCase());

//2
// function search(array, str) {
//     return array.filter(string => string.toLowerCase(str).startsWith(str));
// }
// console.log(search(['Яблоко', 'Ябеда', 'Якорь'], 'яб'));
// console.log(search(['Сено', 'восток', 'Верба'], 'к'));

//3
// let num_3 = 32.58884;
// console.log(Math.floor(num_3), Math.ceil(num_3), Math.round(num_3));

//4
// let arr_4 = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...arr_4), Math.max(...arr_4));

//5
// function random() {
//     let num_5 = (Math.random() * 10) + 1;
//     console.log(Math.floor(num_5));
// }
// random();

//6
// function randomArr(num) {
//     let arr_6 = [];
//     for (let i = 0; i < Math.floor(num / 2); i++) {
//         arr_6[i] = Math.round(Math.random() * num);
//     }
//     return arr_6;
// }
// console.log(randomArr(10));
// console.log(randomArr(11));

//7
function range(num_1, num_2) {
    let max = 0, min = 0, randomNum = 0;
    if (num_1 > num_2) {
        max = num_1;
        min = num_2;
        return randomNum = Math.round((Math.random() * (max - min + 1)) + min);
    } else if (num_1 < num_2) {
        max = num_2;
        min = num_1;
        return randomNum = Math.round((Math.random() * (max - min + 1)) + min);
    } else {
        return 'Числа одинаковые, ошибка';
    }
}
console.log(range(4, 7));
console.log(range(9, 9));
console.log(range(-100, 100));