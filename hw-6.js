function reversText() {
  let requestText = String(prompt("Введите текст"));
  alert(requestText.split("").reverse().join(""));
}

function simpleQuiz() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let num = 0;
  for (let i = 0; i < quiz.length; i++) {
    let quizQuestion = Number(
      prompt(
        `Выберите правильный ответ: \n${quiz[i].question} \n${quiz[i].options}`
      )
    );
    if (quizQuestion === quiz[i]["correctAnswer"]) {
      num++;
      alert("Вы ответили верно");
    } else {
      alert("Вы ответили неверно");
    }
  }
  alert(`Вы ответили верно на ${num} вопросов.`);
}

// Задания на работу с кодом

// Задание 1
// Преобразовать строку 'js' в верхний регистр.

// let str = "js";
// console.log(str.toUpperCase());


// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
// Используйте функции toLowerCase() и startsWith() для сравнения начала строк.

// const products = ["Кресло Ален", "Диван Малютка", "Стол обеденный", "Диван Книжка", "Стул Седло"];
// const search = "диван";

//  products.forEach((product) => {
//    if (product.toLowerCase().startsWith(search.toLowerCase())) {
//       console.log(products);
//    }
// });


// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

// function randomNumb() {
//     return Math.floor(Math.random() * 10) + 1;

// }

// console.log(randomNumb());


// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.


// function random(number) {
//   const arr = [];
//   const length = Math.floor(number / 2);
//   for (let i = 0; i < length; i++) {
//     return Math.floor(Math.random() * (number + 1));
//   }
  
// }

// console.log(random(10));


// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

// const getRandomInteger = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min +1)) + min;
// };

// const randomInteger = getRandomInteger(5, 10);
// console.log(randomInteger);

// const randomInteger2 = getRandomInteger(0, 100);
// console.log(randomInteger2);


// Задание 8
// Вывести в консоль текущую дату.

// let currentDate = new Date();
// console.log(currentDate);


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

// const days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// const months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];

// let myDate = new Date();

// let fullDate = "Сегодня: " + myDate.getDate() +
//   " " + months[myDate.getMonth()] +
//   " " + myDate.getFullYear() +
//   ", " + days[myDate.getDay()] +
//   " " + myDate.getHours() +
//   ":" + myDate.getMinutes() +
//   ":" + myDate.getSeconds();

// console.log(fullDate);

// или
// let currentDate = new Date();
// let options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   timezone: "UTC",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// console.log(currentDate.toLocaleDateString("ru-RU", options));