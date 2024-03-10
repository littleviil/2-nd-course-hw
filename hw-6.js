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
// let array_4 = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]
// let k = 1;
// for (let i = 0; i < array_4.length; i++) {
//     console.log(`Блок ${k}: `);
//     for (let j = 0; j < 3; j++) {
//         console.log(`${array_4[j]}`);
//     }
//     console.log(`\n`);
//     k++;
// }

//5
// let array_5 = [1, 1, 1];
// for (let i = 0; i < 3; i++) {
//     array_5.push(2);
// }
// console.log(array_5);

//6
// let array_6 = [9, 8, 7, 'a', 6, 5];
// const value = array_6.filter(array_val => array_val != 'a');
// console.log(value);
// let step = 0;
// for (let i = 0; i < value.length; i++) {
//     for (let j = 0; j < value.length - i; j++) {
//         if (value[j] > value[j + 1]) {
//             [value[j], value[j + 1]] = [value[j + 1], value[j]]; // Меняем значения переменных
//         }
//     }
// }
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
// if (array_7.includes(num) === true) {
//     alert("Угадал");
// } else { alert("Не угадал"); }

//8
// let str = 'abcdef';
// let strRev = str.split('').reverse().join('');
// alert(`${typeof (str)}, ${strRev}`);
//Не знаю, как сделать без создания новой строки

//9
// let array_9 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// let i = 0;
// for (let j = 3; j < 6; j++) {
//     array_9[i][j] = array_9[i + 1][j - 3];
//     //console.log(array_9[i][j]);
// }
// array_9.pop();
// for (let j = 0; j < array_9.length; j++) {
//     console.log(array_9[j]);
// }

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
// function square(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`Квадрат числа ${array[i]}: ${array[i] ** 2}`);
//     }
// }
// const generateArray = (length, max) => (
//     [...new Array(length)]
//         .map(() => Math.round(Math.random() * max))
// );
// const array_11 = generateArray(10, 10);
// square(array_11);

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
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);

function arithmeticMean(array) {
    let sum = 0, k = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        k++;
    }
    let arithmeticM = sum / k;
    return (arithmeticM);
}

const array_15 = generateArray(6, 10);
console.log(`Массив: ${array_15} \nСреднее арифетическое: ${arithmeticMean(array_15)}`);