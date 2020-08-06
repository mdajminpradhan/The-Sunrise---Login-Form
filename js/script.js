let borderBottom = document.querySelector('.border-bottom');
let loginForm = document.querySelector('.login-form');
let registrationForm = document.querySelector('.registration-form');

let login = document.querySelector('.login').addEventListener('click', () => {
    borderBottom.style.left = '36px';
    loginForm.style.left = '25px';
    registrationForm.style.left = '550px';
});

let registration = document.querySelector('.registration').addEventListener('click', () => {
    borderBottom.style.left = '205px';
    loginForm.style.left = '-425px';
    registrationForm.style.left = '25px';
});