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

      k$.$$('[data-ks-navbar]').map(
        navbar => {
          k$.nav(navbar);
        }
      );

      k$.$$('[data-ks-tabs]').map(
        tabSet => {
          k$.tabs(tabSet);
        }
      );
    }

    document.addEventListener('DOMContentLoaded', k$.ready);
  }
)()
