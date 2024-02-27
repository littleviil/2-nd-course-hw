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
function square(a) {
    result = a ** 2;
    console.log(result);
    return result;
}
alert(square(2));