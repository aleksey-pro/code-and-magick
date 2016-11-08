'use strict';

require(['form', 'game', 'review', 'reviews', 'load'], function(form, game, review, reviews, load) {
  game = new window.Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(window.Game.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    form.open(function() { // полагаю, что form теперь не в глобальной области видимости - поэтому удалил window.
      game.setGameStatus(window.Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };
  form.onClose = function() {
    game.setDeactivated(false);
  };
});
