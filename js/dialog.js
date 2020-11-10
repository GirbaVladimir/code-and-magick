'use strict';

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
let startCoords = null;

const onPopupEscPress = function (evt) {
  if (document.activeElement.name !== `username`) {
    window.util.isEscEvent(evt, closePopup);
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
  if (startCoords === null) {
    startCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
    };
  }
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  if (startCoords !== null) {
    setup.style.left = startCoords.x + `px`;
    setup.style.top = startCoords.y + `px`;
  }
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  window.util.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});
