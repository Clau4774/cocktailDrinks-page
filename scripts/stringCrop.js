const cropText =  (init = 0, end = undefined) => {
    const paragraphs = document.querySelectorAll('.aside-p');
    paragraphs.forEach(paragraph => {
        paragraph.innerText = paragraph.innerText.slice(init, end).concat('...');
    }) 
}

export {cropText};