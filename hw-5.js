function gameTwo() {
  const getRandomNumber = () => Math.floor(Math.random() * 10 + 1);
  const getRandomIndexOperator = () => Math.floor(Math.random() * 4);

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const operators = ["+", "-", "/", "*"];
  const operator = operators[getRandomIndexOperator()];

  let result = null;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      alert("Что-то пошло не так...");
      break;
  }

 

  const userMessage = prompt(
    `Попробуй решить простые арифметические задачи ${num1} ${operator} ${num2}`
  );
  const userAnswer = Number(userMessage);

  if (result === userAnswer) {
    alert("Правильно");
  } else {
    alert("Не правильно");
  }
}


// Задания на работу с кодом

// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//   console.log(numbs[i]);
//   if (numbs[i] === 10) {
//     break;
//   }
// }

// Задание 2
// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log(i);
//     break;
//   }
// }
// // или
// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs.indexOf(4));

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// let numbs = [1, 3, 5, 10, 20];
// let joinedNumbs = numbs.join(" ");
// console.log(joinedNumbs);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида:
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// const arr = [];

// for (let i = 0; i < 3; i++) {
//   const arr2 = [];
//   for (let i = 0; i < 3; i++) {
//     arr2.push(1);
//   }
//   arr.push(arr2);
// }
// console.log(arr);

// Задание 5!
// Дан массив: [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.

// const numbers = [1, 1, 1];
// numbers.push(2, 2, 2);
// console.log(numbers);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

// const arr = [9, 8, 7, "a", 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);

// или с функцией filter
// const arr = [9, 8, 7, "a", 6, 5];
// const result = arr.filter((item) => {
//   return item !== "a";
// });
// console.log(result);
// или
// const result = arr.filter(item =>  item !== "a");
// console.log(result);

// Задание 7
// Дан массив:[9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».
// const arr = [9, 8, 7, 6, 5];
// const userNumber = Number(prompt("Угадайте число от 1 до 10"));
// if (arr.includes(userNumber)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
// Для этого задания вам пригодится метод reverse().
// Он располагает элементы массива в порядке, обратном исходному.

// let text = "abcdef";
// let splitText = text.split('')
// console.log(splitText);
// splitText.reverse();
// console.log(splitText);
// let joinedText = splitText.join('');
// console.log(joinedText);
// или
// let combinedText = text.split("").reverse().join("");
// console.log(combinedText);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(...arr[i]);
// }

// console.log(newArr);

//или
// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log([1, 2, 3].concat([4, 5, 6]));
// или
// console.log(numbers.concat([1, 2, 3], [4, 5, 6]));

// или
// const numbers = [1, 2, 3];
// const num = [4, 5, 6];
// const result = [].concat(numbers, num)

// console.log(result)

// или
// const num = [1, 2, 3];
// const numbers = [4, 5, 6];
// const result = [...num, ...numbers];

// console.log(result);

//или
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr.flat());

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1.
// Обратите внимание, что у последнего элемента нет следующего.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1]) {
//     console.log(arr[i] + arr[i + 1]);
//   } else {
//     console.log("Цикл завершен");
//   }
// }

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

// function square(arr) {
//   return arr.map((item) => item ** 2);
// }

// console.log(square([1, 2, 3]));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

// function getLength(arr) {
//   return arr.map((item) => item.length);
// }

// console.log(getLength(["hello", "world"]));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

// function negativeNumbers(array) {
//   return array.filter((item) => item < 0);
// }
// console.log(negativeNumbers([1, 2, 3, -4, 5, 6, -7, -8, 9, 10]));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

// function randomNumb() {
//   return Math.floor(Math.random() * 10);
// }

// const arr = []

// for (let i = 0; i < 10; i++) {
//   arr.push(randomNumb());
// }

// console.log(arr);

// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   }
// }

// console.log(evenArr);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

// function randomNumb() {
//   return Math.floor(Math.random() * 10);
// }

// const arr = [];

// for (let i = 0; i < 6; i++) {
//   arr.push(randomNumb());
// }

// console.log(arr);
// console.log(arr.reduce((a, b) => a + b) / arr.length);
