// Задание 1

//let a = 10;
// alert(a);
// a = 20;
// alert(a);

// Задание 2
let date = 2007;
alert(date);

// Задание 3
let name = "Брендан Эйх";
alert(name);

// Задание 4
// let a = 10;
// let b = 2;

// let sum = a + b;
// alert(sum);

// let difference = a - b;
// alert(difference);

// let product = a * b;
// alert(product);

// let quotient = a / b;
// alert(quotient);

// Задание 5

let result = 2 ** 5;
alert(result);

// Задание 6
let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num ++;
num = num --;
alert(num);

// Задание 8

let age = Number(prompt('Сколько вам лет'));
alert(age);

// Задание 9

// const user = {
//    name: 'Вася',
//     age: 22,
//    isAdmin: true
// }

// Задание 10

// let name = prompt('Введите ваше имя');
// alert(`Привет, ${name}!`);

// Дополнительное задание

let hiddenNumber = Number(prompt('Загадайте любое число'));

let doubleNumber = hiddenNumber * 2;
alert(doubleNumber);

let biggerNumber = doubleNumber + 10;
alert(biggerNumber);

let dividedNumber = biggerNumber / 2;
alert(dividedNumber);

let originalNumber = dividedNumber - hiddenNumber;
alert(originalNumber);

alert(`Вы загадали ${originalNumber}`);
