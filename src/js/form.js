'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');
  var formRequired = document.querySelector('.review-form');
  var inputsGroup = document.querySelector('.review-form-group');

  var requiredName = document.getElementById('review-name');
  requiredName.required = true;
  requiredName.oninput = function() {
    document.querySelector('.review-fields-name').classList.add('invisible');
  };

  function validate() {
    var elem = document.getElementById('review-text');
    elem.required = Number(formRequired['review-mark'].value) < 3;
  }

  inputsGroup.onchange = function() {
    validate();
  };

  validate();

  var requiredText = document.getElementById('review-text');
  requiredText.oninput = function() {
    document.querySelector('.review-fields-text').classList.add('invisible');
  };

  formRequired.addEventListener('submit', function(event) {
    if (!requiredName.validity.valid && !requiredText.validity.valid) {
      event.preventDefault();
      document.querySelector('.review-submit').disabled = true;
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
