'use strict';

(function () {
  window.backend = {
    SAVE_URL: `https://21.javascript.pages.academy/code-and-magick`,
    LOAD_URL: `https://21.javascript.pages.academy/code-and-magick/data`,
    TIMEOUT_IN_MS: 10000,

    save(data, onLoad, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        switch (xhr.status) {
          case 200:
            onLoad();
            break;
          default:
            onError(`Статус ответа: : ${xhr.status} ${xhr.statusText}`);
        }
      });

      xhr.open(`POST`, this.SAVE_URL);
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

      xhr.timeout = this.TIMEOUT_IN_MS;
      xhr.open(`GET`, this.LOAD_URL);
      xhr.send();
    }
  };
})();
