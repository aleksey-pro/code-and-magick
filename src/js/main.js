'use strict';
require(['./form', './game', './load', './reviews', './gallery'], function(form, Game, load, renderReviews, Gallery) {
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
  // Экспортируйте из модуля функцию-конструктор галереи и подключите его как зависимость в блоке main.js.
  //В блоке main.js получите массив с адресами всех фотографий, лежащих в блоке photogallery.
  var pictureSection = document.querySelector('.photogallery');
  var pictures = document.querySelector('.photogallery').querySelectorAll('a > img');
  var links = document.querySelector('.photogallery').querySelectorAll('a');
  var sources = [];
  for (var i = 0, l = pictures.length; i < l; i++) {
    sources.push(pictures[i].src);
  }
  // // Создайте переменную gallery запишите в нее объект, созданный функцией-конструктором Gallery, параметром конструктора передайте полученный
  // // ранее массив фотографий.
  var gallery = new Gallery();
   // //Затем в модуле main.js добавьте ссылкам обработчики клика, которые вызывают
  // // метод show с соответствующим параметром ранее созданному объекту gallery.
  pictureSection.onclick = function(event, sources) {
    if (event.target.tagName === 'img') {
      for (var j = 0; j < sources.length; j++) {
        gallery.show(sources[j]);
      }
    }
  };
});
