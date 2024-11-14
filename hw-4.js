function gameOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    let userNumber = 0;
    do {
        userNumber = Number(prompt('Угадай число от 1 до 100'))
        if (isNaN(userNumber)) {
            alert("Введено не число")
        } else if (userNumber === randomNumber) {
            alert('Молодец! Угадал!');
        } else if (randomNumber < userNumber) {
            alert('Не угадал, загаданное число меньше!');
        } else if (randomNumber > userNumber) {
            alert('Не угадал, загаданное число больше!');
        } else {
            alert('Попробуй еще!');
        }
    } while (userNumber !== randomNumber);
}


// Задание 1

// function min(a, b) {
// 	if (a < b) {
// 		return a;
//     } else if (a === b) {
// 	    return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(5, 5));
// console.log(min(8, 4));
// console.log(min(5, 9));

// Задание 2

// function isEven(number) {
//     if (number % 2 === 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
	
// }

// console.log(isEven(28));
// console.log(isEven(37));

// Задание 3
// 3.1
// let number = (a) => a ** 2;
// console.log(number(8));
// // 3.2
// let squareOfTheNumber = (a) => {
//     let result = a ** 2;
//     return result;
// }

// console.log(squareOfTheNumber(4));

// Задание 4

// function askAge() {
//     let age = Number(prompt('Сколько Вам лет?'));
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert('Добро пожаловать!');
//     } else {
//         alert('Вы ввели что-то не то');
//     }
// }
// askAge();

// Задание 5

// function twoNumbers() {
//     let a = Number(prompt('Введите первое число'));
//     let b = Number(prompt('Введите второе число'));
//     if (isNaN(a, b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// alert(twoNumbers());

// Задание 6

// function isNumber() {
//     let n = Number(prompt('Введите число'));
//     let cube = n ** 3;
//     if (isNaN(n)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${n} в кубе равно ${cube}`;
//     }
// }

// alert(isNumber());

// Задание 7

// function getAreaCircle() {
//     return Math. PI * this.radius ** 2;
// }
// function getPerimeterCircle() {
//     return 2 * Math. PI * this.radius;
// }

// const circle1 = {
//     radius: 7,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle,
// };

// const circle2 = {
//     radius: 3,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle,
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());