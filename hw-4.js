// Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет!');
}


// // Задание 2

let i = 1;
do {
    console.log(i);
    i++;
} while (i < 6);
 
// // или

for (let i = 1; i <=5 ; i++) {
   console.log(i);
}

// // Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// // Задание 4


const obj = {
    Nik : '200',
    Vasya : '300',
    Pety : '400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]} dollars`);
 }

//  Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}

console.log(`Количество циклов ${num}`);

// Задание 6

let dayFriday = 2;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница ${i}. Необходимо подготовить отчет.`);
}

// Дополнительные задания

// Задание 1

let k = 100;
let iterations = 0;

while (k >= 0) {
    k -= 7;
    console.log(k);
    iterations++;
}

console.log(`Количество циклов ${iterations}`);


// Задание 2

let months = ["January-1", "February-2", "March-3", "April-4", "May-5", "June-6", "July-7", "August-8", "September-9", "October-10", "November-11", "December-12"];

for (let i = 0; i < 1; i++) {
    console.log(months[0]);
}

for (let i = 1; i < 2; i++) {
    console.log(months[1]);
}
for (let i = 2; i < 3; i++) {
    console.log(months[2]);
}

for (let i = 3; i < 4; i++) {
    console.log(months[3]);
}

for (let i = 4; i < 5; i++) {
    console.log(months[4]);
}

for (let i = 5; i < 6; i++) {
    console.log(months[5]);
}
for (let i = 6; i < 7; i++) {
    console.log(months[6]);
}
for (let i = 7; i < 8; i++) {
    console.log(months[7]);
}
for (let i = 8; i < 9; i++) {
    console.log(months[8]);
}
for (let i = 9; i < 10; i++) {
    console.log(months[9]);
}
for (let i = 10; i < 11; i++) {
    console.log(months[10]);
}
for (let i = 11; i < 12; i++) {
    console.log(months[11]);
}



// Задание 3

const book = {
    BookTitle: 'Murder on the Orient Express.',
    Author: 'Agatha Christie',
    YearOfPublication: '1934',
    Genre : 'Detective'
 }

for (const key in book) {
    console.log(`${key} - ${book[key]}`);
}

// Задание 4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i < 2; i++) {
// 	console.log(arr[i]);
// }

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	console.log(elem);
}