'use strict';

//отрисовка всего списка

define(['./review'], function(getReviewsElement) {
  var container = document.querySelector('.reviews-list');
  return function(data) {
    data.forEach(function(review) {
      container.appendChild(getReviewsElement(review));
    });
  };
});
