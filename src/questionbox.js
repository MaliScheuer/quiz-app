

export function toggleAnswer(answerButtons) {
    answerButtons.forEach((buttons) => {
        buttons.addEventListener('click', () => {
            const answer = buttons.parentNode.querySelector('.questionbox__answer');
            answer.classList.toggle('show');

            buttons.innerText = answer.classList.contains('show') ? 'Antwort verbergen' : 'Antwort anzeigen';
        })

    })
}


export function toggleBookmark(iconBookmark) {
    iconBookmark.forEach((bookmarks) => {
        bookmarks.addEventListener('click', () => {
            const bookmarkFilled = bookmarks.parentNode.querySelector('.questionbox__bookmarkicon');
            bookmarkFilled.classList.toggle('filled_icon');


        })

    })
}