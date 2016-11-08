'use strict';

//отрисовка всего списка в нем обращаемся к getReviewsElement, поэтому review - это зависимость

define('makelist', ['review'], function(review) {
  var renderReviews = function(data) {
    data.forEach(function(review) {
      container.appendChild(getReviewsElement(review));
    });
  };
});
