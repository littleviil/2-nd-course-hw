//1
// for (let i = 0; i < 2; i++) {
//     console.log("Привет");
// }


//2
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


//3
// let i = 7;
// while (i <= 22) {
//     console.log(i);
//     i++;
// }


//4
// let obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400',
// };
// for (let key in obj) {
//     alert(`${key} — зарплата  ${obj[key]} долларов`);
// }


//5
let n = 1000;
let k = 0;
while (n >= 50) {
    n /= 2;
    k++;
}
alert(`В результатеделения получилось число: ${n} \n Число итераций: ${k}`);