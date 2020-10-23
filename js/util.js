'use strict';

(function () {
  window.util = {
    isEscEvent(evt, action) {
      if (evt.key === `Escape`) {
        action();
      }
    },
    isEnterEvent(evt, action) {
      if (evt.key === `Enter`) {
        action();
      }
    }
  };

  window.getRandomInteger = function (min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  window.getRandomArrElement = function (arr) {
    return arr[window.getRandomInteger(0, arr.length - 1)];
  };

  window.createErrorDiv = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };
})();
