// Задание 1
const btnEL = document.querySelector(".btn");
const titleEl = document.querySelector(".title");

btnEL.addEventListener("click", () => {
  if (titleEl.style.visibility === "visible") {
    titleEl.style.visibility = "hidden";
  } else {
    titleEl.style.visibility = "visible";
  }
});

// Задание 2
// const buttonEl = document.querySelector(".button");
// const textEl = document.querySelector('.text');
// console.log(textEl);

// buttonEl.addEventListener("click", () => {
//     textEl.style.color = "blue";
// });

// Задание 3
// const headingEl = document.querySelector('.heading');
// const headingButtonEl = document.querySelector(".heading-button");

// headingButtonEl.addEventListener("click", () => {
//   headingEl.textContent = "Привет, мир!";
// });

// Задание 4
// const descriptionEl = document.querySelectorAll(".description");

// descriptionEl.forEach((element) => {
//   element.textContent = "Измененный текст";
// });

// Задание 5
// const descriptionElClass = document.querySelectorAll('.description');

// descriptionElClass.forEach((element) => {
//     element.textContent = "Новый текст";
// });

// Задание 6
// const buttonAddElement = document.querySelector(".add-button");

// buttonAddElement.addEventListener('click', () => {
//     const headingEl = document.createElement('p');
//     headingEl.textContent = 'Новый абзац';
//     headingEl.classList.add('heading');
//     document.body.appendChild(headingEl);
// });


// Задание 7
// const buttonRemoveElement = document.querySelector(".remove-button");
// const paragraphRemoveElement = document.querySelector(".description");

// buttonRemoveElement.addEventListener("click", () => {
//   paragraphRemoveElement.remove();
// });