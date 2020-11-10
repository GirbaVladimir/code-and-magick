'use strict';

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

const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

window.wizard = {
  onEyesChange() {},
  onCoatChange() {}
};

const coat = document.querySelector(`.wizard-coat`);
const eyes = document.querySelector(`.wizard-eyes`);
const fireball = document.querySelector(`.setup-fireball-wrap`);

const changeColorOnClick = function (arr, inputName, selector) {
  selector.addEventListener(`click`, function () {
    const randomColor = window.getRandomArrElement(arr).toString();
    if (inputName === `coat-color`) {
      selector.style.fill = randomColor;
      window.wizard.onCoatChange(randomColor);
    } else if (inputName === `eyes-color`) {
      selector.style.fill = randomColor;
      window.wizard.onEyesChange(randomColor);
    } else {
      selector.style.background = randomColor;
    }
    document.querySelector(`input[name=${inputName}]`).value = randomColor;
  });
};

changeColorOnClick(WIZARD_COATCOLOR, `coat-color`, coat);
changeColorOnClick(WIZARD_EYESCOLOR, `eyes-color`, eyes);
changeColorOnClick(FIREBALL_COLOR, `fireball-color`, fireball);
