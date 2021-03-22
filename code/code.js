const hamMenu = document.querySelector('.ham-menu');
const mobMenu = document.querySelector('.mobile-menu');


function openCloseMenu() {
    mobMenu.classList.toggle('close-open-menu');
}

hamMenu.addEventListener('click', openCloseMenu);

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => {
        if (res.ok) {
        res.json();
        console.log('res')
        } else {
            console.log('Not Succesful');
        };
    })
    .then(data => console.log(data))