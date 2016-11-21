'use strict';

//отрисовка всего списка

define(['./load', './review'], function(load, getReviewsElement) {
  var Review = function(data) {
    data = this.data;
    this.element = getReviewsElement(data);
  };
  Review.prototype.setActiveLink = function() {
    this.quizContainer = document.querySelector('.review-quiz');
    this.quizElems = document.querySelectorAll('.review-quiz-answer');
    var self = this;
    self.quizContainer.onclick = function(event) {
      if (event.target.tagName !== 'SPAN') return;
      for (var i = 0; i < self.quizElems.length; i++) {
        if (self.quizElems[i].classList.contains('active')) {
          self.quizElems[i].classList.remove('active');
        }
        event.target.classList.add('active');
      }
    };
  };
  Review.prototype.removeActiveLink = function() {
    self.quizContainer.onclick = null;
  };
  return Review;
});
