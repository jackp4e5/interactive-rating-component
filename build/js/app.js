
const buttons = document.querySelectorAll('.options__item');
const selected = document.querySelector('.selected__option');
const front = document.querySelector('#front');
const back = document.querySelector('#back');
const form = document.querySelector('#form');

const onSubmit = e=>{
    e.preventDefault();
    front.classList.add('front--active');
    back.classList.add('back--active');

    setTimeout(() => {
        front.classList.remove('front--active');
        back.classList.remove('back--active'); 
    }, 6100);
}

form.addEventListener('submit',onSubmit);

 buttons.forEach(item =>{
     item.addEventListener('click', ()=>{
         selected.textContent = item.textContent;
     });
 });











