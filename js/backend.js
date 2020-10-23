'use strict';

(function () {
  const SAVE_URL = `https://21.javascript.pages.academy/code-and-magick`;
  const LOAD_URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const TIMEOUT_IN_MS = 10000;
  window.backend = {
    save(data, onSave, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        switch (xhr.status) {
          case 200:
            onSave();
            break;
          default:
            onError(`Статус ответа: : ${xhr.status} ${xhr.statusText}`);
        }
      });

      xhr.open(`POST`, SAVE_URL);
      xhr.send(data);
    },

    load(onLoad, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;
          case 400:
            onError(`Неверный запрос`);
            break;
          case 404:
            onError(`Ничего не найдено`);
            break;
          default:
            onError(`Статус ответа: : ${xhr.status} ${xhr.statusText}`);
        }
      });

      xhr.addEventListener(`error`, function () {
        onError(`Ошибка соединения`);
      });

      xhr.addEventListener(`timeout`, function () {
        onError(`Ошибка соединения. Превышено время ожидания`);
      });

      xhr.timeout = TIMEOUT_IN_MS;
      xhr.open(`GET`, LOAD_URL);
      xhr.send();
    }
  };
})();
