'use strict';
require(['./form', './game', './load'], function(form, Game, load) { // здесь не проходит валидация slint так как
// form и load - неиспользуемые аргументы
  var game = new Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(Game.Verdict.INTRO);
  var formOpenButton = document.querySelector('.reviews-controls-new');
  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    window.form.open(function() {
      game.setGameStatus(Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };
  window.form.onClose = function() {
    game.setDeactivated(false);
  };
  load('http://localhost:1507/api/reviews', renderReviews, 'JSONPCallback');
});
