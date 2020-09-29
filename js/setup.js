'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COATCOLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYESCOLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_SIZE = 4;

  const showUserDialog = function () {
    const userDialog = document.querySelector(`.setup`);
    userDialog.classList.remove(`hidden`);
    return userDialog;
  };

  const getRandomArrElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getRandomWizardName = function (reverse = false) {
    return reverse ? getRandomArrElement(WIZARD_SURNAMES) + ` ` + getRandomArrElement(WIZARD_NAMES) :
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
    const userDialog = showUserDialog();
    const similarListElement = userDialog.querySelector(`.setup-similar-list`);
    const wizards = createWizards();

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  showSimilarWizards();
})();
