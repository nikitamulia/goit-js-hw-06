const counterValue = document.querySelector('#value');


const btnDecrement = document.querySelector('[data-action="decrement"]')
const firstCallback = () => {
    counterValue.textContent --;
  };
btnDecrement.addEventListener('click', firstCallback)


const btnIncrement = document.querySelector('[data-action="increment"]')
const secondCallback = () => {
    counterValue.textContent ++;
  };
  btnIncrement.addEventListener('click', secondCallback)