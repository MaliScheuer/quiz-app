/*

const button1 = document.querySelector('#button1')
const answer1 = document.querySelector('#answer1')


button1.addEventListener('click', () => {
    answer1.classList.toggle('show');
})

*/



/* Highlight Home Icon*/
const homeIcon = document.querySelector('.nav__home__icon')

homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('filled_home_icon');
})
/* Highlight Home Icon*/



/* Show answers */
const answerButtons = document.querySelectorAll('.questionbox__button')

answerButtons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const answer = buttons.parentNode.querySelector('.questionbox__answer');
        answer.classList.toggle('show');

        buttons.innerText = answer.classList.contains('show') ? 'Antwort verbergen' : 'Antwort anzeigen';
    })

})
/*Show answers */


/* Highlight answer */
const button1 = document.querySelector('#button1')
const answerTag1 = document.querySelector('.questionbox__tags__1')

button1.addEventListener('click', () => {
    answerTag1.classList.toggle('show_tag');
})
/* Highlight answer */



/* Highlight Bookmarks */
const iconBookmark = document.querySelectorAll('.questionbox__bookmarkicon')

iconBookmark.forEach((bookmarks) => {
    bookmarks.addEventListener('click', () => {
        const bookmarkFilled = bookmarks.parentNode.querySelector('.questionbox__bookmarkicon');
        bookmarkFilled.classList.toggle('filled_icon');


    })

})
/* Highlight Bookmarks */



/* Highlight first Bookmark

const iconBookmark = document.querySelector('.questionbox__bookmarkicon')

iconBookmark.addEventListener('click', () => {
    iconBookmark.classList.toggle('filled_icon');
}
)

*/


