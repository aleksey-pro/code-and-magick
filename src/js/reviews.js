'use strict';

var filters = document.querySelector('.reviews-filter');
filters.classList.add('invisible');

var template = document.querySelector('#review-template');
var container = document.querySelector('.reviews-list');
var templateContainer = 'content' in template ? template.content : template;

var load = function(url, callback, JSONPCallback) {
  if (!JSONPCallback) {
    JSONPCallback = 'cb' + Date.now();
  }
  window.JSONPCallback = function(data) {
    callback(data);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + JSONPCallback;
  document.body.appendChild(script);
};

var getReviewsElement = function(review) {
  var reviewElement = templateContainer.querySelector('.review').cloneNode(true);
  reviewElement.querySelector('.review-rating').textContent = review.rating;
  reviewElement.querySelector('.review-text').textContent = review.description;

  var reviewImage = new Image();

  reviewImage.onload = function() {
    var imgTag = reviewElement.querySelector('.review-author');
    imgTag.src = review.author.picture;
    imgTag.alt = review.author.name;
    imgTag.title = review.author.name;
    imgTag.height = 124;
    imgTag.width = 124;
  };
  reviewImage.onerror = function() {
    reviewElement.classList.add('review-load-failure');
  };
  reviewImage.src = review.author.picture;// щачем нужен повторно,если в 34 строке путь прописан?

  return reviewElement; // почему в данном случае необходим return?
};

var renderReviews = function(reviews) {
  reviews.forEach(function(review) {
    container.appendChild(getReviewsElement(review));
  });
};

load('http://localhost:1507/api/reviews', renderReviews, 'JSONPCallback');

filters.classList.remove('invisible');
