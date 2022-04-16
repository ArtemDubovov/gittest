let items = document.querySelectorAll('.card');

let leftBtn = document.getElementById('arrow-left');
let rightBtn = document.getElementById('arrow-right');

console.log(items);



let count = 0;                                                // счетчик по которому будут перекидываться классы

rightBtn.addEventListener('click', () => {
    console.log(count);
    if(count >= items.length - 3){
        return;
    }
    for(let i = 0; i < items.length; i++){
        if(i == count){
            items[i].classList.remove('carousel-card');
            items[i].classList.add('card-hidden-right');
        } else if(i > count + 1 && i <= count + 3){
            items[i].classList.remove('card-hidden-left');
            items[i].classList.remove('card-hidden-right');
            items[i].classList.add('carousel-card');
        }

    }
    if(count < items.length - 3){
        count++;
    }
})
leftBtn.addEventListener('click', () => {
    console.log(count);
    if(count > 0){
        count--;
    }
    if(count < 0){
        return;
    }
    console.log(count);
    for(let i = items.length - 1; i >= 0; i--){
        if(i == count){
            console.log('1');
            items[i].classList.remove('card-hidden-left');
            items[i].classList.remove('card-hidden-right');
            items[i].classList.add('carousel-card');

        } else if(count + 3 >= i && count < i - 2){
            console.log('delete', i);
            items[i].classList.remove('carousel-card');
            items[i].classList.add('card-hidden-left');
        }
    }

})