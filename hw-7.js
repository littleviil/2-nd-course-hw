//1
const str_1 = 'js';
console.log(str_1.toUpperCase());

//2
function search(array, str) {
    return array.filter(string => string.toLowerCase(str).startsWith(str));
}
console.log(search(['Яблоко', 'Ябеда', 'Якорь'], 'яб'));
console.log(search(['Сено', 'восток', 'Верба'], 'к'));

//3
let num_3 = 32.58884;
console.log(Math.floor(num_3), Math.ceil(num_3), Math.round(num_3));

//4
let arr_4 = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr_4), Math.max(...arr_4));

//5
function random() {
    let num_5 = (Math.random() * 10) + 1;
    console.log(Math.floor(num_5));
}
random();

//6
function randomArr(num) {
    let arr_6 = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        arr_6[i] = Math.round(Math.random() * num);
    }
    return arr_6;
}
console.log(randomArr(10));
console.log(randomArr(11));

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

//8
let currentDate = new Date();
console.log(currentDate);

let myDate = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let fullDate = "Сегодня: " + days[myDate.getDay()] + " - " + myDate.getDate() +
    "." + (myDate.getMonth() + 1) +
    "." + myDate.getFullYear();
console.log(fullDate);

//9
// let set_day = 73;
// let newDate = "Через " + set_day + " будет: " + currentDate.setDate(days + set_day);
// console.log(newDate);
// Не понимаю, как сделать, решение пока не нашла

//10
function dayMonthYear(Date) {
    let dayMonthYearDate =
        Date.getDate() +
        "." + (Date.getMonth() + 1) +
        "." + Date.getFullYear();
    return dayMonthYearDate;
}
function hoursMinSec(Date) {
    let hoursMinSecDate =
        Date.getHours() +
        ":" + Date.getMinutes() +
        ":" + Date.getSeconds();
    return hoursMinSecDate;
}
console.log(`Дата: ${dayMonthYear(currentDate)} \nВремя: ${hoursMinSec(currentDate)}`);

//Кнопки на сайте
function season() {
    let month = Number(prompt("Введите номер месяца: "));
    if ((month > 0 && month <= 2) || month === 12) {
        console.log("Зима");
    }
    else if ((month > 2 && month <= 5)) {
        console.log("Весна");
    }
    else if ((month > 5 && month <= 8)) {
        console.log("Лето");
    }
    else if ((month > 8 && month <= 11)) {
        console.log("Осень");
    } else console.log("Такого месяца не существует");
}

function rememberWord() {
    const wordArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert(`Запомни слова: ${wordArr.sort(() => Math.random() - 0.5)}\nВведите все слова, которые запомните в следующем окне, удачи!`);
    let userStr = prompt('Введите слова через пробел, порядок неважен');
    let userWordArr = userStr.split(" ");
    console.log(userWordArr);
    let k = 0;
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < userWordArr.length; j++) {
            if (userWordArr[j].toLowerCase() === wordArr[i].toLowerCase()) {
                k++;
            } else continue;
        }
    }
    if (k == wordArr.length) {
        alert('Вы отгадали все слова, поздравляем!');
    } else { alert(`Вы отгадали столько слов: ${k}\nВсего слов было: ${wordArr.length}\nПопробуйте снова!`) }
}
//Яблоко Груша Дыня Виноград Персик Апельсин Мандарин