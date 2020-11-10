'use strict';

const WIZARD_SIZE = 4;
const setup = document.querySelector(`.setup`);

const renderWizard = function (wizard) {
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);

  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

  return wizardElement;
};

const similarListElement = setup.querySelector(`.setup-similar-list`);

const showSimilarWizards = function (arr) {
  similarListElement.innerHTML = ``;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < WIZARD_SIZE; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  similarListElement.appendChild(fragment);

  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
};

window.showSimilarWizards = showSimilarWizards; // воть так?
