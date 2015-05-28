;(
  () => {
    // Use this pattern to include your JS in a modular way.
    var KS          = require('../../core/js-alc/app'),
        myScript    = require('./myscript'),
        myScript2   = require('./myscript2');

    document.addEventListener('DOMContentLoaded', () => {
      myScript();
    });
  }
)();
