const navbar_menu = document.querySelector('.navbar__menu');
const navbar_icons = document.querySelector('.navbar__icons');
const navbar_toogleBtn = document.querySelector('.navbar__toogleBtn'); 

navbar_toogleBtn.onclick = function() {
    navbar_menu.classList.toggle('active') 
    navbar_icons.classList.toggle('active')
}