function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color')

changeColor.addEventListener('click', Change)

function change() {
  const background = getRandomHexColor()
  spanColor.textContent = background
  document.body.style.backgroundColor = background
}