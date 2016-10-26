'use strict';

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container'), // див в котором форма
    formCloseButton = document.querySelector('.review-form-close'), // кнопка закрытия
    formRequired = document.querySelector('.review-form'), // форма
    inputsGroup = document.querySelector('.review-form-group'), // группа заполняемых полей
    SubmitButton = document.querySelector('.review-submit'), // кнопка
    requiredText = document.getElementById('review-text'),  // требуемое поле Отзыв
    requiredName = document.getElementById('review-name'), // требуемое поле Имя
    hidingName = document.querySelector('.review-fields-name'), // скрываемое имя
    hidingTstml = document.querySelector('.review-fields-text');//скрываемый отзыв

  //  Тут есть недотчет. Если человек ставит высокую оценку, пишет отзыв,
  // а потом ставит низкую оценку - форма снова требует отзыв. Но это мне кажется логично,
  // так как раз человек снизил оценку, значит у него мнение поменялось, поэтому и отзыв пиши другой.

  // Изменилось количество звездочек

  SubmitButton.setAttribute('disabled', 'disabled'); // кнопка задисейблена

  inputsGroup.onchange = function() {
    // Добавить/убрать required к полю отзыв
    requiredText.required = Number(formRequired['review-mark'].value) < 3;
// Обновить блок .review-fields. Показать/скрыть лэйбл "отзыв" (скрыл в случае если поле "Отзыв" не требуется)
    if (!requiredText.required ) {
      hidingTstml.classList.add('invisible');
    } else {
      hidingTstml.classList.remove('invisible');
    }
  };//onchange

  function validate(label, requiredField) {
// Проверить значения поля имя и отзыв, если оба валидны то снять дизейбл с кнопки отправки
// (добавил проверку имени, в отзыве могут быть любые знаки по сути)
    if (requiredText.value !== '' || requiredName.value !== '' && (/^[А-Яа-я0-9]+$/.test(requiredName.value))) {
      SubmitButton.removeAttribute('disabled');
    } else {
// Иначе добавить дизейбл к кнопке отправки
      SubmitButton.setAttribute('disabled', 'disabled');
    }
// Обновить блок .review-fields. Показать/скрыть лэйбл "отзыв"
    if (requiredField.value !== '') {
      label.classList.add('invisible');
    } else {
      label.classList.remove('invisible');
    }
  }
// Изменилось значение поля "имя"
  requiredName.oninput = function() {
    validate(hidingName, requiredName);
  };

// // Изменилось значение поля "отзыв"

  requiredText.oninput = function() {
    validate(hidingTstml, requiredText);
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
