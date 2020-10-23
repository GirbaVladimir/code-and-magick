'use strict';

(function () {
  //  пока оставлю этот код чтобы был, подключать модуль не буду
  const WIZARD_NAMES = [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`
  ];
  const WIZARD_SURNAMES = [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`
  ];
  const WIZARD_COATCOLOR = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];
  const WIZARD_EYESCOLOR = [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`
  ];
  const FAKE_WIZARD_SIZE = 10;

  const getRandomWizardName = function (reverse = false) {
    return reverse ?
      window.getRandomArrElement(WIZARD_SURNAMES) + ` ` + window.getRandomArrElement(WIZARD_NAMES) :
      window.getRandomArrElement(WIZARD_NAMES) + ` ` + window.getRandomArrElement(WIZARD_SURNAMES);
  };

  // eslint-disable-next-line no-unused-vars
  const createFakeWizards = function () {
    let wizards = [];

    for (let i = 0; i < FAKE_WIZARD_SIZE; i++) {
      wizards.push({
        name: getRandomWizardName(Math.floor(Math.random() * 1.99)),
        colorCoat: window.getRandomArrElement(WIZARD_COATCOLOR),
        colorEyes: window.getRandomArrElement(WIZARD_EYESCOLOR)
      });
    }

    return wizards;
  };
})();
