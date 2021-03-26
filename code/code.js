const hamMenu = document.querySelector('.ham-menu');
const mobMenu = document.querySelector('.mobile-menu');

function openCloseMenu() {
    mobMenu.classList.toggle('close-open-menu');
}

hamMenu.addEventListener('click', openCloseMenu);

createGrid();

createAside();

async function createGrid() {
    const drinksGridGroup = document.querySelector('.cocktail-container__group');
    const fetching = await fetch('code/drinks-json-grid.json');
    const parsing = await fetching.json();
    parsing.forEach((elem) => {
        drinksGridGroup.innerHTML += `<div class="cocktail-container">
        <a href="#">
            <div class="cocktail-container__image">      
                <img src="${elem.img}" alt="${elem.alt}">                        
            </div>
            <p>${elem.title}</p>
        </a>
    </div>`
    });
}

async function createAside() {
    const aside = document.querySelector('.aside-content');
    const fetching = await fetch('code/drinks-json-aside.json');
    const data = await fetching.json();
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
        cropAsideParag();
}

const cropAsideParag =  () => {
    const paragraphs = document.querySelectorAll('.aside-p');
    paragraphs.forEach(paragraph => {
        paragraph.innerText = paragraph.innerText.slice(0,50).concat('...');
    })
    
}