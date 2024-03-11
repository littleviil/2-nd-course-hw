//1
// const str_1 = 'js';
// console.log(str_1.toUpperCase());

//2
function search(array, str) {
    return array.filter(string => string.toLowerCase(str).startsWith(str));
}
console.log(search(['Яблоко', 'Ябеда', 'Якорь'], 'яб'));
console.log(search(['Сено', 'восток', 'Верба'], 'к'));