//1
// let array_1 = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < array_1.length; i++) {
//     console.log(array_1[i]);
//     if (array_1[i] === 10) {
//         break;
//     }
// }

//2
// let array_2 = [1, 5, 4, 10, 0, 3];
// console.log(array_2.indexOf(4));

//3
// let array_3 = [1, 3, 5, 10, 20];
// console.log(array_3.join(' '));

//4
// let array_4 = [];
// for (let i = 0; i < 3; i++) {
//     array_4[i] = [];
//     console.log(`Блок ${i + 1}: `);
//     for (let j = 0; j < 3; j++) {
//         array_4[i].push(1);
//     }
//     console.log(`${array_4[i]}`);
// }

//5
// let array_5 = [1, 1, 1];
// array_5.push(2, 2, 2);
// console.log(array_5);

//6
// let array_6 = [9, 8, 7, 'a', 6, 5];
// const value = array_6.filter(array_val => array_val != 'a');
// value.sort();
// console.log(value);

//7
// let array_7 = [9, 8, 7, 6, 5];
// let num = Number(prompt("Введите возможное число массива"));

// //Первая задумка
// let done = 0;
// for (let i = 0; i < array_7.length; i++) {
//     if (array_7[i] == num) {
//         alert("Угадал");
//         done = 1;
//     }
// }
// if (done === 0) {
//     alert("Не угадал");
// }

// //Подсказка из дз
// if (array_7.includes(num) == true) {
//     alert("Угадал");
// } else { alert("Не угадал"); }

//8
// let str = 'abcdef';
// let strRev = str.split('').reverse().join('');
// console.log(strRev);

//9
// let array_9 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// array_9.flat(Infinity);
// console.log(`${array_9}`);

//10
// const generateArray = (length, max) => (
//     [...new Array(length)]
//         .map(() => Math.round(Math.random() * max))
// );
// const array_10 = generateArray(10, 10);
// for (let i = 0; i < array_10.length - 1; i++) {
//     console.log(`Сумма чисел ${array_10[i]} и ${array_10[i + 1]} = ${array_10[i] + array_10[i + 1]}`);
// }

//11
function square(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] **= 2;
    }
    return array;
}
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const array_11 = generateArray(10, 10);
console.log(array_11);
console.log(square(array_11));

//12
// function Lenght(array) {
//     const NewArray = array.map(item => item.length);
//     console.log(NewArray);
//     return NewArray;
// }
// let array_12 = [
//     'oooffooffo',
//     'lslsls',
//     'alalalal'
// ];
// Lenght(array_12);

//13
// function minus(array) {
//     const NewArray = array.filter(item => item < 0);
//     console.log(NewArray);
//     return NewArray;
// }
// let array_13 = [-1, 10, 34, -11, 4];
// minus(array_13);

//14
// const generateArray = (length, max) => (
//     [...new Array(length)]
//         .map(() => Math.round(Math.random() * max))
// );

// function even(array) {
//     const NewArray = array.filter(item => item % 2 == 0);
//     console.log(`Сортированный массив: ${NewArray}`)
//     return NewArray;
// }
// const array_14 = generateArray(10, 10);
// console.log(`Исходный массив: ${array_14}`);
// even(array_14);

//15
// const generateArray = (length, max) => (
//     [...new Array(length)]
//         .map(() => Math.round(Math.random() * max))
// );

// function arithmeticMean(array) {
//     let sum = 0, k = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         k++;
//     }
//     let arithmeticM = sum / k;
//     return (arithmeticM);
// }

// const array_15 = generateArray(6, 10);
// console.log(`Массив: ${array_15} \nСреднее арифетическое: ${arithmeticMean(array_15)}`);