// //1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// //1_1
// people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     } else if (a.age < b.age) {
//         return -1;
//     } else return 0;
// });
// console.log(people);
// //1_2
// people.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(people);


// //2
// function isPositive(num) {
//     if (num > 0) {
//         return num;
//     }
// }

// function isMale(person) {
//     if (person.gender === 'male') {
//         return person.name + person.gender;
//     }
// }

// function filter(array, ruleFunction) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {
//             newArray.push(array[i]);
//         }
//     } return newArray;
// }

// console.log(`${filter([3, -4, 1, 9], isPositive)}`);

// const people_2 = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people_2, isMale));

// //3
// const timer = () => {
//     const time_1s = setInterval(() => {
//         let currentDay = new Date();
//         console.log(currentDay);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(time_1s)
//         console.log("30 секунд прошло")
//     }, 30000);
// }

// timer();

// //4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// });

// //5
// function delayForSecond_2(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }
//     }, 1000)
// }

// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond_2(() => sayHi('Глеб'));

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(i);
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);