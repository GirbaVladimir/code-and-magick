'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COATCOLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYESCOLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_SIZE = 4;
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const userNameInput = document.querySelector(`.setup-user-name`);

  userNameInput.addEventListener(`input`, function () {
    const valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }
  });

  const setupOpen = document.querySelector(`.setup-open`);
  const setup = document.querySelector(`.setup`);
  const setupClose = document.querySelector(`.setup-close`);

  const onPopupEscPress = function (evt) {
    if (evt.key === `Escape` && document.activeElement.name !== `username`) {
      evt.preventDefault();
      closePopup();
    }
  };

  const openPopup = function () {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      closePopup();
    }
  });

  const coat = document.querySelector(`.wizard-coat`);
  const eyes = document.querySelector(`.wizard-eyes`);
  const fireball = document.querySelector(`.setup-fireball-wrap`);

  const changeColorOnClick = function (arr, inputName, selector, isFireball = false) {
    selector.addEventListener(`click`, function () {
      const randomColor = getRandomArrElement(arr).toString();
      if (!isFireball) {
        selector.style.fill = randomColor;
      } else {
        selector.style.background = randomColor;
      }
      document.querySelector(`input[name=${inputName}]`).value = randomColor;
    });
  };

  changeColorOnClick(WIZARD_COATCOLOR, `coat-color`, coat);
  changeColorOnClick(WIZARD_EYESCOLOR, `eyes-color`, eyes);
  changeColorOnClick(FIREBALL_COLOR, `fireball-color`, fireball, true);

  const randomInteger = function (min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomArrElement = function (arr) {
    return arr[randomInteger(0, arr.length - 1)];
  };

  const getRandomWizardName = function (reverse = false) {
    return reverse ?
      getRandomArrElement(WIZARD_SURNAMES) + ` ` + getRandomArrElement(WIZARD_NAMES) :
      getRandomArrElement(WIZARD_NAMES) + ` ` + getRandomArrElement(WIZARD_SURNAMES);
  };

  const createWizards = function () {
    let wizards = [];

    for (let i = 0; i < WIZARD_SIZE; i++) {
      wizards.push({
        name: getRandomWizardName(Math.floor(Math.random() * 1.99)),
        coatColor: getRandomArrElement(WIZARD_COATCOLOR),
        eyesColor: getRandomArrElement(WIZARD_EYESCOLOR)
      });
    }

    return wizards;
  };

  const renderWizard = function (wizard) {
    const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);

    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const showSimilarWizards = function () {
    const similarListElement = setup.querySelector(`.setup-similar-list`);
    const wizards = createWizards();

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  showSimilarWizards();
})();
