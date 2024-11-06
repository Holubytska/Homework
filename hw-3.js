// Дополнительные задания:
// Задание 1

let anyNumber = Number(prompt("Пожалуйста, введите любое число"));
let result = Number(anyNumber);

if (isNaN(result)) {
    console.log('Не число');
} else { 
    console.log('Число');
}

if (result % 2 === 0) {
      alert('Чётное');
} else {
      alert('Нечетное');
}
    
