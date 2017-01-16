'use strict';

//отрисовка всего списка

define(['./review'], function(Review) {
  this.filters = document.querySelector('.reviews-filter');
  this.filters.classList.add('invisible');
  var renderReviews = function(data) {
    var container = document.querySelector('.reviews-list');
    data.forEach(function(review) {
      var reviewEl = new Review(review);
      container.appendChild(reviewEl.element);
    });
  };
  return renderReviews;
});

