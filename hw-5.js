//1
// function comparison(a, b) {
//     let min;
//     if (a > b) {
//         min = b;
//     } else if (a < b) {
//         min = a;
//     } else min = a;
//     return min;
// }
// console.log(comparison(5, 1));
// console.log(comparison(100, 101));
// console.log(comparison(3, 3));

//2
// function parity(a) {
//     a % 2 == 0 ? alert("Число четное") : alert("Число нечетное");
// }
// parity(prompt("Введите число: "));

//3
// function square(a) {
//     result = a ** 2;
//     console.log(result);
//     return result;
// }
// alert(square(2));

//4
// function age() {
//     let Age = Number(prompt("Сколько вам лет?"));
//     if (Age < 0) {
//         alert("Вы ввели неправильное значение");
//     } else if (Age >= 0 && Age <= 12) {
//         alert("Привет, друг!");
//     } else alert("Добро пожаловать!");
// }

// age();

//5
// function numbers(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return alert('Одно или оба значения не являются числом');
//     } else return a * b;
// }

//6
// function inputNumber(a) {
//     // let a = Number(prompt("Введите число: "));
//     if (isNaN(a)) {
//         return console.log('Переданный параметр не является числом');
//     } else return console.log(`${a} в кубе равняется ${a ** 3}`);
// }
// for (let i = 0; i <= 10; i++) {
//     inputNumber(i);
// }

//7
let pi = 3.14;
function getArea() {
    let S = pi * (this.radius ** 2);
    return S;
}
function getPerimeter() {
    let P = 2 * pi * this.radius;
    return P;
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 4,
    getArea, getArea,
    getPerimeter: getPerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());

