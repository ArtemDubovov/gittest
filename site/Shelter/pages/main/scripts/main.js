let buttons = document.getElementsByClassName('carousel-card-button');
for(let el of buttons){
    el.addEventListener('click', () => console.log(1));
}

let buttonBurger = document.getElementById('button-burger');
let menu = document.getElementById('menu-mobile');
let logo = document.getElementById('header-logo');
console.log(logo);

buttonBurger.addEventListener('click', () => {
    logo.classList.toggle('logo-hidden');
    buttonBurger.classList.toggle('burger-selected');
    menu.classList.toggle('menu-selected');
    console.log('work');
})