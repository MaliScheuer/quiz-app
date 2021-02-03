//const button1 = document.querySelector('#button1')
//const answer1 = document.querySelector('#answer1')

//const button2 = document.querySelector('#button2')
//const answer2 = document.querySelector('#answer2')

//const button3 = document.querySelector('#button3')
//const answer3 = document.querySelector('#answer3')

//const button4 = document.querySelector('#button4')
//const answer4 = document.querySelector('#answer4')



/*button1.addEventListener('click', () => {
    answer1.classList.toggle('show');
}
)

button2.addEventListener('click', () => {
    answer2.classList.toggle('show');
}
)

button3.addEventListener('click', () => {
    answer3.classList.toggle('show');
}
)

button4.addEventListener('click', () => {
    answer4.classList.toggle('show');
}
)
*/


const answerButtons = document.querySelectorAll('.questionbox__button')

answerButtons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const answer = buttons.parentNode.querySelector('.questionbox__answer');
        answer.classList.toggle('show');

        buttons.innerText = answer.classList.contains('show') ? 'Antwort verbergen' : 'Antwort anzeigen';
    })

})


const iconBookmark = document.querySelectorAll('.questionbox__bookmarkicon')

iconBookmark.forEach((bookmarks) => {
    bookmarks.addEventListener('click', () => {
        const bookmarkFilled = bookmarks.parentNode.querySelector('.questionbox__bookmarkicon');
        bookmarkFilled.classList.toggle('filled_icon');


    })

})




/*
const iconBookmark = document.querySelector('.questionbox__bookmarkicon')

iconBookmark.addEventListener('click', () => {
    iconBookmark.classList.toggle('filled_icon');
}
)
*/