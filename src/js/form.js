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
  };
  // Здесь нужно было еще сделать обработку кнопки submit. Пока не работает. Не понятно по заданию  - валидность на что проверять?
  // Тогда в HTML придется дописывать что-то типа pattern="A-Za-zА-Яа-яЁё" ??? Или имеется  в иду валидность на то, что
  // они прошли проверку на required. Пока не понимаю тогда как это проверяется.
  formRequired.addEventListener('submit', function(event) {
    if (!requiredName.validity.valid && !requiredText.validity.valid) {
      event.preventDefault();
      document.className('review-submit').disabled = true;
    } else {
      document.querySelector('.review-fields').classList.add('invisible');
    }
  }, false);

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
