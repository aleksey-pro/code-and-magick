'use strict';

//загрузка с сервера в нем обращаемся к renderReviews, поэтому reviews - это зависимость

define(['./reviews'], function(renderReviews) {
  var load =  function(url, callback, JSONPCallback) {
    if (!JSONPCallback) {
      JSONPCallback = 'cb' + Date.now();
    }
    window[JSONPCallback] = function(data) {
      callback(data);
      script.parentNode.removeChild(script);
      delete window[JSONPCallback];
    };
    var script = document.createElement('script');
    script.src = url + '?callback=' + JSONPCallback;
    document.body.appendChild(script);

    script.onerror = function() {
      this.parentNode.removeChild(script);
      delete window[JSONPCallback];
    };
  };
  return load(url, renderReviews, 'JSONPCallback');
});
