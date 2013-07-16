;(function() {
  var v = '1.10.2';

  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done      = false,
    script        = document.createElement('script');
    script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';

    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
      }
    };
    console.log("You've been jQueryfied!");
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    console.log("You already have jQuery v %s... no need for this.", v);
  }
})();