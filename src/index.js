import { toggleAnswer } from './questionbox'
import { toggleBookmark } from './questionbox'

const answerButtons = document.querySelectorAll('.questionbox__button')
toggleAnswer(answerButtons)

const iconBookmark = document.querySelectorAll('.questionbox__bookmarkicon')
toggleBookmark(iconBookmark)




/* Highlight answer1 */
const button1 = document.querySelector('#button1')
const answerTag1 = document.querySelector('.questionbox__tags__1')

button1.addEventListener('click', () => {
    answerTag1.classList.toggle('show_tag');
})
/* Highlight answer1 */


//const answerButton = document.querySelectorAll('.questionbox__button')

answerButtons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const rightAnswer = buttons.querySelector('.right');
        rightAnswer.classList.toggle('show_tag');


    })

})





/* Highlight Home Icon

const homeIcon = document.querySelector('.nav__home__icon')

homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('filled_home_icon');
})
*/



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


