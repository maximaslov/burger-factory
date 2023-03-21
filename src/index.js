'use strict'

const CARD_BTN_CLASS = 'burgers__card-button';
const CARD_OPENED_CLASS = 'burgers__card--opened';
const CARD_TEXT_SHOWN_CLASS = 'burgers__card-text--show';

const detailsBtns = document.querySelectorAll('.' + CARD_BTN_CLASS);

detailsBtnsListener()

function detailsBtnsListener () {
    detailsBtns.forEach(e => {
        e.addEventListener('click', onDetailsBtnClick);
    })
}

function onDetailsBtnClick (e) {
    const buttonContainer = e.target.parentElement;
    const card = buttonContainer.parentElement;
    const text = buttonContainer.previousElementSibling;

    card.classList.toggle(CARD_OPENED_CLASS);
    text.classList.add(CARD_TEXT_SHOWN_CLASS);

    if(!card.classList.contains(CARD_OPENED_CLASS)) {
        text.classList.remove(CARD_TEXT_SHOWN_CLASS);
    }
}
