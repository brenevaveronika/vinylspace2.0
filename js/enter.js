let emailInput = document.querySelector(`#email`);
let phoneInput = document.querySelector(`#phone`);
let passwordInput = document.querySelector(`#password`);
let button = document.querySelector(`.enter-button`);

button.addEventListener(`click`, function(){
    console.log(phoneInput);
    console.log(emailInput);
    console.log(passwordInput);
});