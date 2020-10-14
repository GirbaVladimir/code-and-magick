'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COATCOLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYESCOLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_SIZE = 4;
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const setup = document.querySelector(`.setup`);
  const coat = document.querySelector(`.wizard-coat`);
  const eyes = document.querySelector(`.wizard-eyes`);
  const fireball = document.querySelector(`.setup-fireball-wrap`);

  window.changeColorOnClick(WIZARD_COATCOLOR, `coat-color`, coat);
  window.changeColorOnClick(WIZARD_EYESCOLOR, `eyes-color`, eyes);
  window.changeColorOnClick(FIREBALL_COLOR, `fireball-color`, fireball, true);

  const randomInteger = function (min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  window.getRandomArrElement = function (arr) {
    return arr[randomInteger(0, arr.length - 1)];
  };

  const getRandomWizardName = function (reverse = false) {
    return reverse ?
      window.getRandomArrElement(WIZARD_SURNAMES) + ` ` + window.getRandomArrElement(WIZARD_NAMES) :
      window.getRandomArrElement(WIZARD_NAMES) + ` ` + window.getRandomArrElement(WIZARD_SURNAMES);
  };

  const createWizards = function () {
    let wizards = [];

    for (let i = 0; i < WIZARD_SIZE; i++) {
      wizards.push({
        name: getRandomWizardName(Math.floor(Math.random() * 1.99)),
        coatColor: window.getRandomArrElement(WIZARD_COATCOLOR),
        eyesColor: window.getRandomArrElement(WIZARD_EYESCOLOR)
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
