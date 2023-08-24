const button = document.querySelector("button");
const display = document.querySelector(".display");
const page = document.querySelector("*");

function random(num) {
  return Math.floor(Math.random() * num);
}

function colorChange() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.addEventListener("click", () => {
  display.textContent = colorChange();
  page.style.backgroundColor = display.textContent;
});
