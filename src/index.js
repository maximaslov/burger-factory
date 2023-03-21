'use strict'

const CARD_BTN_CLASS = 'burgers__card-button';
const CARD_OPENED_CLASS = 'burgers__card--opened';
const CARD_TEXT_SHOWN_CLASS = 'burgers__card-text--show';
const HEADER_MENU = 'header__menu-items';

const INGREDIENTS_BLOCK = document.querySelector('.ingredients');
const STORY_BLOCK = document.querySelector('.story');
const BURGERS_BLOCK = document.querySelector('.burgers');
const LOCATION_BLOCK = document.querySelector('.location');

const detailsBtns = document.querySelectorAll('.' + CARD_BTN_CLASS);
const menuLinks = document.querySelector('.' + HEADER);
const menuItems = document.querySelectorAll('.' + MENU_ITEM_CLASS);

menuLinks.addEventListener('click', onMenuLinksClick)
detailsBtnsListener()

function onMenuLinksClick(e) {
    const link = e.target.textContent;

    switch (link) {
        case 'INGREDIENT': return scrollToElement(INGREDIENTS_BLOCK);
        case 'STORY': return scrollToElement(STORY_BLOCK);
        case 'BURGERS': return scrollToElement(BURGERS_BLOCK);
        case 'LOCATION': return scrollToElement(LOCATION_BLOCK);
    }
        
}

function scrollToElement(elem) {
    const scrollElement = elem.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: scrollElement,
        behavior: "smooth",
    })
}

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

// function onCallbackBtnClick(e) {
//     e.preventDefault();
//     const targetElementTop =
//       callbackForm.getBoundingClientRect().top + window.pageYOffset;
  
//     window.scrollTo({
//       top: targetElementTop,
//       behavior: "smooth",
//     });
//   }
