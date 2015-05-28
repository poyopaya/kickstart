;(
  () => {
    var KS          = require('../../core/js-alc/app'),
        myScript    = require('./myscript');

    document.addEventListener('DOMContentLoaded', () => {
      myScript();
    });
  }
)();
