'use strict';

let CLOUD_WIDTH = 420;
let CLOUD_HEIGHT = 270;
let CLOUD_X = 100;
let CLOUD_Y = 10;
let GAP = 10;
let FONT_GAP = 80;
let TEXT_HEIGHT = 10;
let HIST_HEIGHT = 150;
let BAR_WIDTH = 40;
let BAR_GAP = 50;
let barHeight = HIST_HEIGHT - TEXT_HEIGHT;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

let getUser = function (arr) {
  let user;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `Вы`) {
      user = i;
    }
  }

  return user;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP * 3
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP * 5
  );

  let maxTime = getMaxElement(times);
  let user = getUser(players);

  for (let i = 1; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[user]).toString(),
        CLOUD_X + BAR_GAP - GAP,
        CLOUD_Y + FONT_GAP + (barHeight - ((barHeight * times[user]) / maxTime))
    );

    ctx.fillStyle = `#ff0000`;
    ctx.fillRect(
        CLOUD_X + BAR_GAP - GAP,
        CLOUD_Y + FONT_GAP + GAP + (barHeight - ((barHeight * times[user]) / maxTime)),
        BAR_WIDTH,
        (barHeight * times[user]) / maxTime
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[user],
        CLOUD_X + BAR_GAP - GAP,
        CLOUD_Y + barHeight + FONT_GAP + GAP * 3
    );
  }

  times.splice(user, 1);
  players.splice(user, 1);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]).toString(),
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * (i + 1) - GAP,
        CLOUD_Y + FONT_GAP + (barHeight - ((barHeight * times[i]) / maxTime))
    );

    ctx.fillStyle = `hsl(240, 100%,` + Math.random() * 100 + `%)`;
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * (i + 1) - GAP,
        CLOUD_Y + FONT_GAP + GAP + (barHeight - ((barHeight * times[i]) / maxTime)),
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * (i + 1) - GAP,
        CLOUD_Y + barHeight + FONT_GAP + GAP * 3
    );
  }
};
