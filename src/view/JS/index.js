const header = document.querySelector('.header')
const menu_btn = document.querySelector('.header__menu');
const nav_links = document.querySelector('.nav__links');
const explore_btn_back = document.querySelector('.explore__back')
const explore_btn_forwards = document.querySelector('.explore__forward');
const explore__container = document.querySelector('.explore__container');

menu_btn.addEventListener('click', ()=>{
    nav_links.style.display = 'flex'; 
    menu_btn.style.display = 'none';
});

document.addEventListener('click', e => {
    if(!header.contains(e.target)){
        nav_links.style.display = ''; 
        menu_btn.style.display = '';
    }
});

explore_btn_back.addEventListener('click', () =>{
    explore__container.scrollLeft -= 150; 
})

explore_btn_forwards.addEventListener('click', () => {
    explore__container.scrollLeft += 150; 
})