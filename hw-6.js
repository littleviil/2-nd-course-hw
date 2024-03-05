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
let array_5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    array_5.push(2);
}
console.log(array_5);