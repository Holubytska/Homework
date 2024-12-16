document.getElementById("random-color").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.querySelector(".game").style.backgroundColor = randomColor;
});