'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');
  var formRequired = document.querySelector('.review-form');
  var inputsGroup = document.querySelector('.review-form-group');

  function validate() {
    var elem = document.getElementById('review-text');
    elem.required = Number(formRequired['review-mark'].value) < 3;
  }
  inputsGroup.onchange = function() {
    validate();
  };
  validate();

  var requiredName = document.getElementById('review-name');
  requiredName.required = true;
  requiredName.oninput = function() {
    document.querySelector('.review-fields-name').classList.add('invisible');
  };
  var requiredText = document.getElementById('review-text');
  requiredText.oninput = function() {
    document.querySelector('.review-fields-text').classList.add('invisible');
  };

  function validateSubmit(event) {
    if (requiredName.validity.valueMissing && requiredText.validity.valueMissing) {
      event.preventDefault();
      document.querySelector('.review-submit').disabled = true;
    } else {
      document.querySelector('.review-fields').classList.add('invisible');
    }
  }
  requiredText.addEventListener('keyup', validateSubmit);
  requiredName.addEventListener('keyup', validateSubmit);

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
