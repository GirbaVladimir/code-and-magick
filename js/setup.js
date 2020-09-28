'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATCOLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYESCOLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getRandomWizardName = function (reverse = false) {
  return reverse ? WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)] + ` ` + WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] : WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ` ` + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};

const getRandomCoatColor = function () {
  return WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)];
};

const getRandomEyesColor = function () {
  return WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)];
};

const wizards = [
  {
    name: getRandomWizardName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizardName(true),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizardName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizardName(true),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  }
];

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
