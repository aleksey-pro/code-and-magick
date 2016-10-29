'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container'), // див в котором форма
    formCloseButton = document.querySelector('.review-form-close'), // кнопка закрытия
    formRequired = document.querySelector('.review-form'), // форма
    submitButton = document.querySelector('.review-submit'), // кнопка
    requiredText = document.getElementById('review-text'),  // требуемое поле Отзыв
    requiredName = document.getElementById('review-name'), // требуемое поле Имя
    hidingBlock = document.querySelector('.review-fields'),
    inputsGroup = document.querySelector('.review-form-group'), // группа звездочек
    hidingName = document.querySelector('.review-fields-name'), // скрываемое имя
    hidingTstml = document.querySelector('.review-fields-text');//скрываемый отзыв

  submitButton.setAttribute('disabled', 'disabled'); // кнопка отключена

  function validate() {
    var isFeedbackRequired = Number(formRequired['review-mark'].value) < 3;

    // Проверяем кнопку отправки и блок с лэйблами
    if (requiredName.value === '' || (isFeedbackRequired && requiredText.value === '')) {
      submitButton.setAttribute('disabled', 'disabled'); // кнопка отключена
      hidingBlock.classList.remove('invisible'); // блок c лэйблами показан
    } else {
      submitButton.removeAttribute('disabled'); // кнопка включена
      hidingBlock.classList.add('invisible'); // блок с лэйблами скрыт
    }

    // Проверяем поле имя
    if (requiredName.value === '') {
      hidingName.classList.remove('invisible'); // показываем лейбл "имя"
    } else {
      hidingName.classList.add('invisible'); // скрываем лейбл "имя"
    }

    // Проверяем поле отзыв
    if (isFeedbackRequired && requiredText.value === '') {
      hidingTstml.classList.remove('invisible'); // показываем лейбл "отзыв"
    } else {
      hidingTstml.classList.add('invisible');  // скрываем лейбл "отзыв"
    }
  }

  inputsGroup.onchange = validate;
  requiredText.oninput = validate;
  requiredName.oninput = validate;

  validate();


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
