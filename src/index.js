"use strict"

const CARD_CLASS = "burgers__card";
const CARD_BTN_CLASS = "burgers__card-button";
const CARD_OPENED_CLASS = "burgers__card--opened";
const CARD_TEXT_SHOWN_CLASS = "burgers__card-text--show";
const HEADER_CLASS = "header";
const HEADER_LINKS_CLASS = "header__menu-item";
const ORDER_BTN_CLASS = "order-button";
const BANNER_BTN_CLASS = "banner__button";

const INGREDIENTS_BLOCK = document.querySelector(".ingredients");
const STORY_BLOCK = document.querySelector(".story");
const BURGERS_BLOCK = document.querySelector(".burgers");
const LOCATION_BLOCK = document.querySelector(".location");

const card = document.querySelectorAll("." + CARD_CLASS);
const detailsBtns = document.querySelectorAll("." + CARD_BTN_CLASS);
const header = document.querySelector("." + HEADER_CLASS);
const menuItems = document.querySelectorAll("." + HEADER_LINKS_CLASS);
const orderButtons = document.querySelectorAll("." + ORDER_BTN_CLASS);
const bannerBtn = document.querySelector("." + BANNER_BTN_CLASS);

header.addEventListener("click", onHeaderClick);
bannerBtn.addEventListener("click", onBannerButtonClick)

detailsBtnsListener();
orderBtnsListener();

function onHeaderClick(e) {
  const link = e.target.textContent;

  switch (link) {
    case "INGREDIENT":
      return scrollToElement(INGREDIENTS_BLOCK);
    case "STORY":
      return scrollToElement(STORY_BLOCK);
    case "BURGERS":
      return scrollToElement(BURGERS_BLOCK);
    case "LOCATION":
      return scrollToElement(LOCATION_BLOCK);
    default:
        changeHeaderLinksBackgroundColor();
  }
}

function onBannerButtonClick() {
    scrollToElement(INGREDIENTS_BLOCK);
}

function scrollToElement(elem) {
  const scrollElement = elem.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: scrollElement,
    behavior: "smooth",
  });
}

function changeHeaderLinksBackgroundColor() {
  menuItems.forEach((e) => toggleBackgroundColor(e));
}

function detailsBtnsListener() {
  detailsBtns.forEach((e) => {
    e.addEventListener("click", onDetailsBtnClick);
  });
}

function onDetailsBtnClick(e) {
  const buttonContainer = e.target.parentElement;
  const card = buttonContainer.parentElement;
  const text = buttonContainer.previousElementSibling;

  card.classList.toggle(CARD_OPENED_CLASS);
  text.classList.add(CARD_TEXT_SHOWN_CLASS);

  if (!card.classList.contains(CARD_OPENED_CLASS)) {
    text.classList.remove(CARD_TEXT_SHOWN_CLASS);
  }
}

function orderBtnsListener() {
  orderButtons.forEach((e) => e.addEventListener("click", onOrderBtnClick));
}

function onOrderBtnClick() {
  scrollToElement(BURGERS_BLOCK);
  changeCardsBackgroundColor();
}

function changeCardsBackgroundColor () {
    card.forEach((e) => toggleBackgroundColor(e));
}

function toggleBackgroundColor(elem) {
    elem.style.backgroundColor = "#00b3fa85";
    elem.style.transition = "background-color 0.4s ease-in-out";
    setTimeout(() => {
      elem.style.backgroundColor = "white";
    }, 300);

    setTimeout(() => {
        elem.classList.contains(CARD_CLASS) ? elem.style.transition = "height 0.25s ease-in-out" : null;
    }, 600);
  }  