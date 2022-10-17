const textInput = document.querySelector('#validation-input')

textInput.addEventListener("blur", (event) => {
    event.currentTarget.value.length == textInput.getAttribute("data-length")
     ? textInput.className = 'valid' : textInput.className = 'invalid';
  });

