// Дополнительное задание:

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