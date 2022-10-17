const form = document.querySelector('.login-form');
form.addEventListener("submit", handleSubmit);

function handleSubmit (event){
    event.preventDefault()
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if(email.value === '' || password.value === ''){
        return alert('Всі поля повинні бути заповнені.')
    }
    const formData = {
        email,
        password,
    };

    console.log(formData)
    event.currentTarget.reset()
   
}
