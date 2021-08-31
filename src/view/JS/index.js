const menu_btn = document.querySelector('.header__menu');
const nav_links = document.querySelector('.nav__links');

menu_btn.addEventListener('click', ()=>{
    nav_links.style.display = 'flex'; 
});
