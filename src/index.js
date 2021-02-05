import { toggleAnswer } from './questionbox'
import { toggleBookmark } from './questionbox'
import { toggleRightTag } from './questionbox'



const answerButtons = document.querySelectorAll('.questionbox__button')
toggleAnswer(answerButtons)
toggleRightTag(answerButtons)

const iconBookmark = document.querySelectorAll('.questionbox__bookmarkicon')
toggleBookmark(iconBookmark)





const homeIcon = document.querySelector('.nav__home')

homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('nav__home__filled');
})



const bookmarkIcon = document.querySelector('.nav__bookmark')

bookmarkIcon.addEventListener('click', () => {
    bookmarkIcon.classList.add('nav__bookmark__filled');
})



const createIcon = document.querySelector('.nav__createnew')

createIcon.addEventListener('click', () => {
    createIcon.classList.add('nav__create__filled')
})

const profileIcon = document.querySelector('.nav__profile')

profileIcon.addEventListener('click', () => {
    profileIcon.classList.add('nav__profile__filled')
})



/* Highlight answer1
const button1 = document.querySelector('#button1')
const answerTag1 = document.querySelector('.questionbox__tags__1')

button1.addEventListener('click', () => {
    answerTag1.classList.toggle('show_tag');
})
/*

/*answerButtons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const answer = buttons.parentNode.querySelector('.questionbox__answer');
        answer.classList.toggle('show');

        buttons.innerText = answer.classList.contains('show') ? 'Antwort verbergen' : 'Antwort anzeigen';
    })

})
}*/






/* Show Answer1

const button1 = document.querySelector('#button1')
const answer1 = document.querySelector('#answer1')


button1.addEventListener('click', () => {
    answer1.classList.toggle('show');
})

*/



/* Highlight Bookmark1

const iconBookmark = document.querySelector('.questionbox__bookmarkicon')

iconBookmark.addEventListener('click', () => {
    iconBookmark.classList.toggle('filled_icon');
}
)
*/


