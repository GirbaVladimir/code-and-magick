'use strict';

(function () {
  window.changeColorOnClick = function (arr, inputName, selector, isFireball = false) {
    selector.addEventListener(`click`, function () {
      const randomColor = window.getRandomArrElement(arr).toString();
      if (!isFireball) {
        selector.style.fill = randomColor;
      } else {
        selector.style.background = randomColor;
      }
      document.querySelector(`input[name=${inputName}]`).value = randomColor;
    });
  };
})();
