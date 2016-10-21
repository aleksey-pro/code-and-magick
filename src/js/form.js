'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');
  var formRequired = document.querySelector('.review-form');
  var inputs = formRequired.elements['review-mark'];

  var requiredName = document.getElementById('review-name');
  requiredName.required = true;
  requiredName.oninput = function() {
    document.querySelector('.review-fields-name').classList.add('invisible');
  };

  function validate() {
    for ( var j = 0; j < inputs.length; j++ ) {
      if (inputs.value < 3) {
        var elem = document.getElementById('review-text');
        elem.required = true;
      }
    }
  }

  //  Когда запускаю только цикл в консоли - срабатывает (console.log рисует значения выбранных инпутов)
  // когда завернуто в функцию - не хочет.

  inputs.onchange = function() {
    for ( var n = 0; n < inputs.length; n++ ) {
      if (inputs[n].checked) {
        console.log(inputs[n].value);
        validate();
      }
    }
  };

  validate();

  var requiredText = document.getElementById('review-text');
  requiredText.oninput = function() {
    document.querySelector('.review-fields-text').classList.add('invisible');

    //здесь я не совсем понимаю по заданию - написано что вся форма .review-fields должна скрыться как все поля будут заполнены.
    // Поскольку последней заполняется форма .review-fields-text  - я делаю скрытие .review-fields вместе с полем .review-fields-text.
    //Просто если это не правильно, то к чему же привязать скрытие .review-fields?? Коллбеки ещё не проходятся в модуле.

    document.querySelector('.review-fields').classList.add('invisible');
  };

  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      cb();
    },

    close: function() {
      formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  };


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  return form;
})();
