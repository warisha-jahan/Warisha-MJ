const humberger = document.querySelector('.humberger');
const responsive = document.querySelector('.responsive_menu');

humberger.addEventListener('click',()=>{
 humberger.classList.toggle('close-icon');
 responsive.classList.toggle('menu-open')
})