'use strict';

//отрисовка всего списка

define(['./review'], function(Review) {
  var renderReviews = function(data) {
    var container = document.querySelector('.reviews-list');
    data.forEach(function(reviewEl) {
      container.appendChild(new Review(reviewEl).element);
    });
  };
  return renderReviews;
});
