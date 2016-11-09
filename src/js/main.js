'use strict';
require(['./form', './game', './load', './reviews'], function(form, Game, load, renderReviews) {
  var game = new Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(Game.Verdict.INTRO);
  var formOpenButton = document.querySelector('.reviews-controls-new');
  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    form.open(function() {
      game.setGameStatus(Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };
  form.onClose = function() {
    game.setDeactivated(false);
  };
  var url = 'http://localhost:1507/api/reviews';
  load(url, renderReviews, 'JSONPCallback');
});
