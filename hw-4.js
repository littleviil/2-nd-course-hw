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
// let n = 1000;
// let k = 0;
// while (n >= 50) {
//     n /= 2;
//     k++;
// }
// alert(`В результатеделения получилось число: ${n} \n Число итераций: ${k}`);


//6
//Расчет на 2024 год
// let day = 31;
// let month = 1;
// for (let i = 5; i <= day; i += 7) {
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         day = 31;
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         day = 30;
//     } else day = 29;
//     if ((i + 7) > day && month < 12) {
//         console.log(`Сегодня ${i} число(пятница) ${month} месяц, необходмо подготовить отчет`);
//         i = i + 7 - day;
//         month++;
//     }
//     console.log(`Сегодня ${i} число(пятница) ${month} месяц, необходмо подготовить отчет`);
//     if (month === 12 && i + 7 > day) {
//         break;
//     }
// }

//Реализация по условиям дз
for (let i = 5; i <= 31; i += 7) {
    alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}