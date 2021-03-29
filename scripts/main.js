import {cropText} from "./stringCrop.js";
const crop = cropText;

const hamMenu = document.querySelector('.ham-menu');
const mobMenu = document.querySelector('.mobile-menu');

function openCloseMenu() {
    mobMenu.classList.toggle('close-open-menu');
}

hamMenu.addEventListener('click', openCloseMenu);

createGrid();


async function createGrid() {
    const grid = document.querySelector('.cocktail-container__group');
    const aside = document.querySelector('.aside-content');
    const fetching = await fetch('scripts/drinks-json.json');
    const data = await fetching.json();
    data.forEach((elem) => {
        grid.innerHTML += `<div class="cocktail-container">
        <a href="#">
            <div class="cocktail-container__image">      
                <img src="${elem.img}" alt="${elem.alt}">                        
            </div>
            <p>${elem.title}</p>
        </a>
    </div>`
    });

    data.forEach(elem => aside.innerHTML += `
        <a href="#" class="aside-content-item">
            <div class="aside-content__image">
                <img src="${elem.img}" alt="${elem.alt}">
            </div>
            <div>
                <p class="aside-title">${elem.title}</p>
                <p class="aside-p">${elem.content}</p>
            </div>
        </a>`);
        crop(0,50);
}

