const header = document.querySelector('.header')
const menu_btn = document.querySelector('.header__menu');
const nav_links = document.querySelector('.nav__links');

menu_btn.addEventListener('click', ()=>{
    nav_links.style.display = 'flex'; 
    menu_btn.style.display = 'none';
});

document.addEventListener('click', e => {
    if(!header.contains(e.target)){
        nav_links.style.display = 'none'; 
        menu_btn.style.display = '';
    }
});