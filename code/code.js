const hamMenu = document.querySelector('.ham-menu');
const mobMenu = document.querySelector('.mobile-menu');


function openCloseMenu() {
    mobMenu.classList.toggle('close-open-menu');
}

hamMenu.addEventListener('click', openCloseMenu);