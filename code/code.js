const hamMenu = document.querySelector('.ham-menu');
const mobMenu = document.querySelector('.mobile-menu');

function openCloseMenu() {
    mobMenu.classList.toggle('close-open-menu');
}

hamMenu.addEventListener('click', openCloseMenu);

createGrid();

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