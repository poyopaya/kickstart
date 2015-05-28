;(
  () => {
    var KS        = require('./ks'),
        Modal     = require('./modal'),
        Navbar    = require('./navbar'),
        Debounce  = require('./debouncer'),
        Icons     = require('./icons'),
        Status    = require('./status'),
        Tabs      = require('./tabs'),
        Throttler = require('./throttler'),
        Buttons   = require('./buttons'),
        Buffer    = require('./buffer'),
        Growl     = require('./growl'),
        Dropdown  = require('./dropdown')

    k$.ready = () => {
      k$.icons();
      k$.button();
      k$.dropdown();

      Array.prototype.map.call(k$.$$('[data-ks-navbar]'),
        navbar => {
          k$.nav(navbar);
        }
      );

      Array.prototype.map.call(k$.$$('[data-ks-tabs]'), 
        tabSet => {
          k$.tabs(tabSet);
        }
      );
    }

    document.addEventListener('DOMContentLoaded', k$.ready);
  }
)();
