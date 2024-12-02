//Игра "Камень Ножницы Бумага"

function computerPlay() {
  const options = ["камень", "ножницы", "бумага"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function stoneScissorsPaper() {
  const userAnswer = String(prompt("Сделайте ваш выбор: \nкамень \nножницы \nбумага")).toLowerCase();
  const computerAnswer = computerPlay();
  alert(`Ответ компьютера: ${computerAnswer}`);
  const winner = {
    камень: "ножницы",
    бумага: "камень",
    ножницы: "бумага",
  };

  if (userAnswer === computerAnswer) {
    alert("Ничья!");
  } else if (winner[userAnswer] === computerAnswer) {
    alert("Вы победили!");
  } else {
    alert("Компьютер победил!");
  }
}




// Задания на работу с кодом

// Задание 1
// const people = [
//   { name: "Глеб", age: 29 },
//   { name: "Анна", age: 17 },
//   { name: "Олег", age: 7 },
//   { name: "Оксана", age: 47 },
// ];

// console.log(people.sort((a, b) => {a.age - b.age;}));

// //или

// function sort(arr, func) {
//   let result = [...arr];
//   for (let j = 0; j < result.length; j++) {
//     for (let i = 0; i < result.length - 1; i++) {
//       if (func(result[i], result[i + 1])) {
//         let temp = result[i];
//         result[i] = result[i + 1];
//         result[i + 1] = temp;
//       }
//     }
//   }
//   return result;
// }

// console.log(
//   sort(people, function (a, b) {
//     return a.age > b.age;
//   })
// );

// Задание 2

// function isPositive(item) {
//    if (item >= 0) {
//       return item;
//    }
// }
// function isMale(item) {
//    if (item.gender === 'male') {
//       return item;
//    }
// }
// function filter(arr, ruleFunction) {
//    const result = [];
//    for (let i = 0; i < arr.length; i++){
//       if (ruleFunction(arr[i])) {
//          result.push(ruleFunction(arr[i]));
//       }
//    }
//    return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));

// Задание 3

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
//   ":" + myDate.getMinutes();

// let timerId = setInterval(() => alert(fullDate), 3000);
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("30 секунд прошло");
// }, 30000);

// Задание 4

// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//   console.log("Привет, Глеб!");
// });

// Задание 5

// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log("Прошла одна секунда");
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi("Глеб"));