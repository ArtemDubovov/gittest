

let buttonBurger = document.getElementById('button-burger');
let menu = document.getElementById('menu-mobile');
let logo = document.getElementById('header-logo');

buttonBurger.addEventListener('click', () => {
    logo.classList.toggle('logo-hidden');
    buttonBurger.classList.toggle('burger-selected');
    menu.classList.toggle('menu-selected');
    console.log('work');
})