'use strict';
require(['./form', './game', './load'], function(form, game, load) { // здесь не проходит валидация slint так как
// form и load - неиспользуемые аргументы
  game = new window.Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(window.Game.Verdict.INTRO);
  var formOpenButton = document.querySelector('.reviews-controls-new');
  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    window.form.open(function() {
      game.setGameStatus(window.Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };
  window.form.onClose = function() {
    game.setDeactivated(false);
  };
});
