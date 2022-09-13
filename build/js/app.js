
const buttons = document.querySelectorAll('.options__item');
const selected = document.querySelector('.selected__option');
const front = document.querySelector('#front');
const back = document.querySelector('#back');
const form = document.querySelector('#form');

document.addEventListener('DOMContentLoaded',putData)
form.addEventListener('submit',change);

function putData(){

    buttons.forEach(items =>{

        items.addEventListener('click', ()=>{
            selected.textContent = items.textContent;
        });
    });
 }

function change(e){
    e.preventDefault();
    front.classList.add('front--active');
    back.classList.add('back--active');

    setTimeout(() => {
        front.classList.remove('front--active');
        back.classList.remove('back--active'); 
    }, 6100);
}










