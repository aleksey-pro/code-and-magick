'use strict';

//отрисовка одного элемента списка

define(function() {

  var Review = function(data) {
    data = this.data;
    this.element = document.querySelector('#review-template');
    this.templateContainer = 'content' in this.element ? this.element.content : this.element;

  // не являются элементами блока this.element
    this.filters = document.querySelector('.reviews-filter');
    this.filters.classList.add('invisible');
  };

  Review.prototype.setActiveLink = function() {
    this.quizContainer = this.element.querySelector('.review-quiz');
    this.quizElems = this.element.querySelectorAll('.review-quiz-answer');
    var self = this;
    self.quizContainer.onclick = function(event) {
      if (event.target.tagName !== 'SPAN') return;
      for (var i = 0; i < self.quizElems.length; i++) {
        if (self.quizElems[i].classList.contains('review-quiz-answer-active')) {
          self.quizElems[i].classList.remove('review-quiz-answer-active');
        }
        event.target.classList.add('review-quiz-answer-active');
      }
    };
  };
  Review.prototype.removeActiveLink = function() {
    var self = this;
    self.quizContainer.onclick = null;
  };

  Review.prototype.createReviewElement = function(review) {
    this.review = review;
    this.reviewElement = this.templateContainer.querySelector('.review').cloneNode(true);
    this.reviewElement.querySelector('.review-rating').textContent = review.rating;
    this.reviewElement.querySelector('.review-text').textContent = review.description;

    var self = this;
    this.reviewImage = new Image();
    this.reviewImage.onload = function() {
      self.imgTag = self.reviewElement.querySelector('.review-author');
      self.imgTag.src = review.author.picture;
      self.imgTag.alt = review.author.name;
      self.imgTag.title = review.author.name;
      self.imgTag.height = 124;
      self.imgTag.width = 124;
    };
    this.reviewImage.onerror = function() {
      self.reviewElement.classList.add('review-load-failure');
    };
    this.reviewImage.src = review.author.picture;
    this.filters.classList.remove('invisible');
    return this.reviewElement;
  };
  return Review;
});
