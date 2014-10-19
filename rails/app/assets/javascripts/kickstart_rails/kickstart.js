(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Buffer, Buttons, Debounce, Dropdown, Growl, KS, Modal, Navbar, Status, Tabs, Throttler;

KS = require('./ks');

Modal = require('./modal');

Dropdown = require('./dropdown');

Navbar = require('./navbar');

Debounce = require('./debouncer');

Status = require('./status');

Tabs = require('./tabs');

Throttler = require('./throttler');

Buttons = require('./buttons');

Buffer = require('./buffer');

Growl = require('./growl');

k$.ready = function() {
  k$.button();
  return k$.dropdown();
};

document.addEventListener('DOMContentLoaded', function() {
  return k$.ready;
});



},{"./buffer":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buffer.coffee","./buttons":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buttons.coffee","./debouncer":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/dropdown.coffee","./growl":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/growl.coffee","./ks":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/modal.coffee","./navbar":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/navbar.coffee","./status":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/status.coffee","./tabs":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/tabs.coffee","./throttler":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buffer.coffee":[function(require,module,exports){
var buffer;

buffer = function(fn, delay) {
  var i;
  k$.bufferArray = k$.bufferArray || new Array();
  if (!k$.bufferArray.length) {
    k$.bufferArray = new Array();
    delay = delay || 500;
    i = 1;
    k$.bufferInterval = setInterval(function() {
      if (k$.bufferArray[i]) {
        k$.bufferArray[i]();
      }
      i++;
      console.log(i);
      if (i >= k$.bufferArray.length) {
        clearInterval(k$.bufferInterval);
        k$.bufferArray = void 0;
        return i = 1;
      }
    }, delay);
  }
  k$.bufferArray.push(fn);
  if (k$.bufferArray.length === 1) {
    k$.bufferArray[0]();
  }
  return console.info("Function queued (" + k$.bufferArray.length + " in queue)");
};

k$.buffer = buffer;

module.exports = buffer;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buttons.coffee":[function(require,module,exports){
var button;

button = function() {
  var $button, $buttonDropdown, _i, _j, _len, _len1, _ref, _ref1, _results;
  _ref = k$.$$("button");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    $button = _ref[_i];
    if ($button.querySelectorAll('ul').length) {
      $button.classList.add('menu-item');
    }
  }
  _ref1 = k$.$$('.button-dropdown');
  _results = [];
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    $buttonDropdown = _ref1[_j];
    _results.push($buttonDropdown.parentNode.classList.add('menu-item'));
  }
  return _results;
};

k$.button = button;

module.exports = button;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/debouncer.coffee":[function(require,module,exports){
var debounce;

debounce = function(fn, id, delay) {
  var $delay;
  $delay = delay || 1000;
  if (k$.debounceQueue === null) {
    k$.debounceQueue = id;
  }
  if (id === k$.debounceQueue) {
    clearTimeout(k$.debounceTimer);
  }
  return k$.debounceTimer = setTimeout(function() {
    fn();
    return k$.debounceQueue = null;
  }, $delay);
};

k$.debounce = debounce;

module.exports = debounce;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/dropdown.coffee":[function(require,module,exports){
var dropdown;

dropdown = function() {
  var $_menuItem, $menuItem, $menuItems, _fn, _i, _len;
  $menuItems = k$.$$('.menu-item');
  _fn = function($menuItem) {
    return $menuItem.addEventListener('click', function(e) {
      var $openable, _$menuItem, _j, _len1, _ref;
      if ($menuItem.classList.contains('open')) {
        $menuItem.classList.remove('open');
        return;
      }
      _ref = document.querySelectorAll('.menu-item');
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        _$menuItem = _ref[_j];
        _$menuItem.classList.remove('open');
      }
      $openable = $menuItem.querySelector('ul');
      if ($openable) {
        $menuItem.classList.add('open');
      }
      return e.stopPropagation();
    });
  };
  for (_i = 0, _len = $menuItems.length; _i < _len; _i++) {
    $_menuItem = $menuItems[_i];
    $menuItem = $_menuItem.cloneNode(true);
    $_menuItem.parentNode.replaceChild($menuItem, $_menuItem);
    _fn($menuItem);
  }
  return document.body.addEventListener('click', function() {
    var $li, $ul, _j, _k, _len1, _len2, _ref, _ref1, _results;
    _ref = k$.$$('.menu-item > ul');
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      $ul = _ref[_j];
      $ul.parentNode.classList.remove('open');
    }
    _ref1 = k$.$$('.menu-item.open');
    _results = [];
    for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
      $li = _ref1[_k];
      _results.push($li.classList.remove('open'));
    }
    return _results;
  });
};

k$.dropdown = dropdown;

module.exports = dropdown;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/growl.coffee":[function(require,module,exports){
var growl;

growl = function(params) {
  return k$.buffer(function() {
    var className, content, defaults, delay, growlContainer, id;
    defaults = {
      title: void 0,
      text: void 0,
      delay: 2000,
      type: 'alert-warn',
      id: Date.now()
    };
    params = k$.extend(defaults, params);
    if (!k$.$$('.growl_container').length) {
      growlContainer = document.createElement('div');
      growlContainer.className = 'growl_container';
      document.body.appendChild(growlContainer);
    }
    growl = document.createElement('div');
    className = "alert growl show " + params.type + " growl-" + params.id;
    growl.className = className;
    content = "";
    if (params.title) {
      content += "<h1>" + params.title + "</h1>";
    }
    if (params.text) {
      content += "<p>" + params.text + "</p>";
    }
    growl.innerHTML = content;
    k$.$('.growl_container').appendChild(growl);
    delay = params.delay;
    id = params.id;
    if (delay > 0) {
      return (function(delay, id) {
        return setTimeout(function() {
          var $growl, $newGrowl;
          $growl = k$.$(".growl-" + id);
          $growl.classList.remove('show');
          $newGrowl = $growl.cloneNode(true);
          $growl.parentNode.replaceChild($newGrowl, $growl);
          $newGrowl.classList.add('hide');
          return (function(delay, id) {
            return setTimeout(function() {
              if (!k$.$$('.growl.show').length) {
                return k$.$('.growl_container').parentNode.removeChild(k$.$('.growl_container'));
              }
            }, 500);
          })(delay, id);
        }, delay);
      })(delay, id);
    }
  });
};

k$.growl = growl;

module.exports = growl;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/ks.coffee":[function(require,module,exports){
(function (global){
global.k$ = new Object();

k$.$$ = function(el) {
  return document.querySelectorAll(el);
};

k$.$ = function(el) {
  return k$.$$(el)[0];
};

k$.debounceTimer = false;

k$.debounceQueue = null;

k$.extend = function(destination, source) {
  var property;
  for (property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

module.exports = k$;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/modal.coffee":[function(require,module,exports){
var modal;

modal = function(el) {
  var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
  if (iOS) {
    document.body.classList.add('dismiss-modal');
  }
  (function(el) {
    var $closer, $hideModal;
    $hideModal = function() {
      return k$.$(el).style.display = 'none';
    };
    document.body.addEventListener('click', function() {
      return $hideModal();
    });
    k$.$(el).addEventListener('click', function(e) {
      return e.stopPropagation();
    });
    $closer = k$.$(el).querySelector('a[data-modal-close]');
    if ($closer) {
      return $closer.addEventListener('click', function() {
        return $hideModal();
      });
    }
  })(el);
  return k$.$(el);
};

k$.modal = modal;

module.exports = modal;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/navbar.coffee":[function(require,module,exports){
var nav;

nav = function(el) {
  var $button, $menuItem, $menuItems, e, _$menuItems, _i, _j, _len, _len1;
  try {
    $menuItems = k$.$(el).querySelectorAll('ul > li');
    _$menuItems = new Array();
    for (_i = 0, _len = $menuItems.length; _i < _len; _i++) {
      $menuItem = $menuItems[_i];
      if ($menuItem.querySelectorAll('ul').length && !$menuItem.querySelectorAll('[role="button"]').length) {
        _$menuItems.push($menuItem);
      }
    }
    $menuItems = _$menuItems;
    for (_j = 0, _len1 = $menuItems.length; _j < _len1; _j++) {
      $menuItem = $menuItems[_j];
      $menuItem.classList.add('menu-item');
    }
    k$.dropdown();
  } catch (_error) {
    e = _error;
    console.error("Could not instantiate as a nav.", e.message);
  }
  $button = k$.$(el).querySelector('.navbar-title button');
  if ($button) {
    return $button.addEventListener('click', function() {
      var $nav;
      $nav = k$.$(el).querySelector('nav');
      if ($nav.classList.contains('expand')) {
        return $nav.classList.remove('expand');
      } else {
        return $nav.classList.add('expand');
      }
    });
  }
};

k$.nav = nav;

module.exports = nav;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/status.coffee":[function(require,module,exports){
var status;

status = function(opts) {
  var $status, $statusBar, defaults, hideStatusBar;
  defaults = {
    type: 'status-yellow',
    delay: 2000
  };
  status = k$.extend(defaults, opts);
  if (!k$.$$('#status_bar').length) {
    $statusBar = document.createElement('div');
    $statusBar.id = 'status_bar';
    $statusBar.className = 'status_bar';
    $statusBar.innerHTML = "<div class='status_bar-status' id='status_bar-status'></div>";
    document.body.appendChild($statusBar);
  }
  $statusBar = k$.$('#status_bar');
  hideStatusBar = function() {
    return $statusBar.parentNode.removeChild($statusBar);
  };
  if (status.delay > 0) {
    k$.debounce(hideStatusBar, 'hideStatusBar', status.delay);
  }
  $status = k$.$("#status_bar-status");
  $status.innerHTML = status.text;
  return $status.dataset.type = status.type;
};

k$.status = status;

module.exports = status;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/tabs.coffee":[function(require,module,exports){
var tabs;

tabs = function(el) {
  var $_tab, $id, $pane, $paneSet, $tab, $tabLink, $tabSet, _i, _j, _k, _len, _len1, _len2, _results;
  $tabSet = k$.$(el).querySelectorAll('li');
  for (_i = 0, _len = $tabSet.length; _i < _len; _i++) {
    $tab = $tabSet[_i];
    $tab.classList.add('tab-item');
  }
  $paneSet = new Array();
  for (_j = 0, _len1 = $tabSet.length; _j < _len1; _j++) {
    $_tab = $tabSet[_j];
    $id = $_tab.querySelector('a').getAttribute('href');
    $pane = k$.$("article" + $id);
    if ($_tab.classList.contains('open')) {
      $pane.classList.add('open');
    }
    $paneSet.push($pane);
    $pane.dataset.panel = 'true';
  }
  _results = [];
  for (_k = 0, _len2 = $tabSet.length; _k < _len2; _k++) {
    $tab = $tabSet[_k];
    $tabLink = $tab.querySelector('a');
    $tabLink.dataset.link = $tabLink.getAttribute('href');
    $tabLink.href = 'javascript:void(0);';
    _results.push((function($tab, $tabLink, $paneSet) {
      return $tab.addEventListener('click', function() {
        var _$tab, _l, _len3, _len4, _m;
        for (_l = 0, _len3 = $paneSet.length; _l < _len3; _l++) {
          $pane = $paneSet[_l];
          $pane.classList.remove('open');
        }
        for (_m = 0, _len4 = $tabSet.length; _m < _len4; _m++) {
          _$tab = $tabSet[_m];
          _$tab.classList.remove('open');
        }
        k$.$("article" + $tabLink.dataset.link).classList.add('open');
        return $tab.classList.add('open');
      });
    })($tab, $tabLink, $paneSet));
  }
  return _results;
};

k$.tabs = tabs;

module.exports = tabs;



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/throttler.coffee":[function(require,module,exports){
var throttle;

throttle = function(fn, id, delay) {};

k$.throttle = throttle;

module.exports = throttle;



},{}]},{},["./lib/coffee/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2dyb3dsLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdmJhci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3RhYnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90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VyxTQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxHQUFBLENBQVgsQ0FBQTs7QUFBQSxFQUlFLENBQUMsUUFBSCxHQUFjLFFBSmQsQ0FBQTs7QUFBQSxNQU1NLENBQUMsT0FBUCxHQUFpQixRQU5qQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIktTICAgICAgICA9IHJlcXVpcmUgJy4va3MnXG5Nb2RhbCAgICAgPSByZXF1aXJlICcuL21vZGFsJ1xuRHJvcGRvd24gID0gcmVxdWlyZSAnLi9kcm9wZG93bidcbk5hdmJhciAgICA9IHJlcXVpcmUgJy4vbmF2YmFyJ1xuRGVib3VuY2UgID0gcmVxdWlyZSAnLi9kZWJvdW5jZXInXG5TdGF0dXMgICAgPSByZXF1aXJlICcuL3N0YXR1cydcblRhYnMgICAgICA9IHJlcXVpcmUgJy4vdGFicydcblRocm90dGxlciA9IHJlcXVpcmUgJy4vdGhyb3R0bGVyJ1xuQnV0dG9ucyAgID0gcmVxdWlyZSAnLi9idXR0b25zJ1xuQnVmZmVyICAgID0gcmVxdWlyZSAnLi9idWZmZXInXG5Hcm93bCAgICAgPSByZXF1aXJlICcuL2dyb3dsJ1xuXG5rJC5yZWFkeSA9IC0+XG4gIGskLmJ1dHRvbigpXG4gIGskLmRyb3Bkb3duKClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAnRE9NQ29udGVudExvYWRlZCcsIC0+IGskLnJlYWR5XG4iLCJidWZmZXIgPSAoZm4sIGRlbGF5KSAtPlxuXG4gICMgQ3JlYXRlIGEgbmV3IGJ1ZmZlckFycmF5IGlmIG9uZSBkb2VzIG5vdCBleGlzdCBhbHJlYWR5LlxuICBrJC5idWZmZXJBcnJheSA9IGskLmJ1ZmZlckFycmF5IHx8IG5ldyBBcnJheSgpXG4gIGlmIG5vdCBrJC5idWZmZXJBcnJheS5sZW5ndGhcbiAgICBrJC5idWZmZXJBcnJheSA9IG5ldyBBcnJheSgpXG5cbiAgICBkZWxheSA9IGRlbGF5IHx8IDUwMFxuXG4gICAgIyBDcmVhdGUgYW4gaW50ZXJ2YWwgdG8gZmlyZSB0aGUgZm5zIGluIGJ1ZmZlckFycmF5XG4gICAgaSA9IDFcblxuICAgIGskLmJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwgLT5cbiAgICAgIGskLmJ1ZmZlckFycmF5W2ldKCkgaWYgayQuYnVmZmVyQXJyYXlbaV1cbiAgICAgIGkrK1xuICAgICAgY29uc29sZS5sb2cgaVxuICAgICAgaWYgaSA+PSBrJC5idWZmZXJBcnJheS5sZW5ndGhcbiAgICAgICAgY2xlYXJJbnRlcnZhbCBrJC5idWZmZXJJbnRlcnZhbFxuICAgICAgICBrJC5idWZmZXJBcnJheSA9IHVuZGVmaW5lZFxuICAgICAgICBpID0gMVxuICAgICwgZGVsYXlcblxuICAjIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIHRoZSBhcnJheS5cbiAgayQuYnVmZmVyQXJyYXkucHVzaCBmblxuXG4gICMgRmlyZSByaWdodCBhd2F5IGlmIGl0J3MgdGhlIGZpcnN0IGluIGxpbmUuXG4gIGskLmJ1ZmZlckFycmF5WzBdKCkgaWYgayQuYnVmZmVyQXJyYXkubGVuZ3RoID09IDFcblxuICBjb25zb2xlLmluZm8gXCJGdW5jdGlvbiBxdWV1ZWQgKCN7ayQuYnVmZmVyQXJyYXkubGVuZ3RofSBpbiBxdWV1ZSlcIlxuXG5rJC5idWZmZXIgPSBidWZmZXJcblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbiIsImJ1dHRvbiA9IC0+XG5cbiAgKCRidXR0b24uY2xhc3NMaXN0LmFkZCAnbWVudS1pdGVtJyBpZiAkYnV0dG9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJykubGVuZ3RoKSBmb3IgJGJ1dHRvbiBpbiBrJC4kJChcImJ1dHRvblwiKVxuICAkYnV0dG9uRHJvcGRvd24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkICdtZW51LWl0ZW0nIGZvciAkYnV0dG9uRHJvcGRvd24gaW4gayQuJCQgJy5idXR0b24tZHJvcGRvd24nXG5cbmskLmJ1dHRvbiA9IGJ1dHRvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvblxuIiwiZGVib3VuY2UgPSAoZm4sIGlkLCBkZWxheSkgLT5cblxuICAkZGVsYXkgPSBkZWxheSB8fCAxMDAwXG5cbiAgayQuZGVib3VuY2VRdWV1ZSA9IGlkIGlmIGskLmRlYm91bmNlUXVldWUgPT0gbnVsbFxuICBjbGVhclRpbWVvdXQgayQuZGVib3VuY2VUaW1lciBpZiBpZCA9PSBrJC5kZWJvdW5jZVF1ZXVlXG4gIGskLmRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0IC0+XG4gICAgZm4oKVxuICAgIGskLmRlYm91bmNlUXVldWUgPSBudWxsXG4gICwgJGRlbGF5XG5cbmskLmRlYm91bmNlID0gZGVib3VuY2VcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZVxuIiwiZHJvcGRvd24gPSAoKSAtPlxuXG4gICMgVGhlIGZvbGxvd2luZyBzaG91bGQgYXBwbHkgdG8gc2V2ZXJhbCBlbGVtZW50cy5cblxuICAkbWVudUl0ZW1zID0gayQuJCQgJy5tZW51LWl0ZW0nXG5cbiAgZm9yICRfbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgJG1lbnVJdGVtID0gJF9tZW51SXRlbS5jbG9uZU5vZGUgdHJ1ZVxuICAgICRfbWVudUl0ZW0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQgJG1lbnVJdGVtLCAkX21lbnVJdGVtXG5cbiAgICBkbyAoJG1lbnVJdGVtKSAtPlxuICAgICAgIyBUT0RPOiBJcyB0aGVyZSBhIHdheSB3ZSBjb3VsZCBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciBmb3IgZXZlcnlcbiAgICAgICMgc2luZ2xlIG9uZT9cbiAgICAgICRtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuXG4gICAgICAgICMgSnVzdCBjbG9zZSBpdCBpZiBpdCdzIGFscmVhZHkgb3BlblxuICAgICAgICBpZiAkbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJ1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICMgUmVzZXQgYWxsXG4gICAgICAgIF8kbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yIF8kbWVudUl0ZW0gaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpXG4gICAgICAgICRvcGVuYWJsZSA9ICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yICd1bCdcblxuICAgICAgICAjIE9wZW4gdGhpcyBvbmVcbiAgICAgICAgaWYgJG9wZW5hYmxlXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ29wZW4nXG5cbiAgICAgICAgIyBQcmV2ZW50IGJ1YmJsaW5nXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAjIERpc21pc3MgYWxsXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICR1bC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciAkdWwgaW4gayQuJCQoJy5tZW51LWl0ZW0gPiB1bCcpXG4gICAgJGxpLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciAkbGkgaW4gayQuJCQoJy5tZW51LWl0ZW0ub3BlbicpXG5cbmskLmRyb3Bkb3duID0gZHJvcGRvd25cblxubW9kdWxlLmV4cG9ydHMgPSBkcm9wZG93blxuIiwiZ3Jvd2wgPSAocGFyYW1zKSAtPlxuXG4gIGskLmJ1ZmZlciAtPlxuICAgIGRlZmF1bHRzID1cbiAgICAgIHRpdGxlOiB1bmRlZmluZWRcbiAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgZGVsYXk6IDIwMDBcbiAgICAgIHR5cGU6ICdhbGVydC13YXJuJ1xuICAgICAgaWQ6IERhdGUubm93KClcblxuICAgIHBhcmFtcyA9IGskLmV4dGVuZCBkZWZhdWx0cywgcGFyYW1zXG5cbiAgICAjIENyZWF0ZSBncm93bCBjb250YWluZXJcbiAgICBpZiBub3QgayQuJCQoJy5ncm93bF9jb250YWluZXInKS5sZW5ndGhcbiAgICAgIGdyb3dsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnZGl2J1xuICAgICAgZ3Jvd2xDb250YWluZXIuY2xhc3NOYW1lID0gJ2dyb3dsX2NvbnRhaW5lcidcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQgZ3Jvd2xDb250YWluZXJcblxuICAgICMgQ3JlYXRlIGdyb3dsXG4gICAgZ3Jvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG5cbiAgICAjIEFkZCBhcHByb3ByaWF0ZSBjbGFzc2VzXG4gICAgY2xhc3NOYW1lID0gXCJhbGVydCBncm93bCBzaG93ICN7cGFyYW1zLnR5cGV9IGdyb3dsLSN7cGFyYW1zLmlkfVwiXG4gICAgZ3Jvd2wuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG5cbiAgICAjIEFkZCBjb250ZW50XG4gICAgY29udGVudCA9IFwiXCJcbiAgICBjb250ZW50ICs9IFwiPGgxPiN7cGFyYW1zLnRpdGxlfTwvaDE+XCIgaWYgcGFyYW1zLnRpdGxlXG4gICAgY29udGVudCArPSBcIjxwPiN7cGFyYW1zLnRleHR9PC9wPlwiIGlmIHBhcmFtcy50ZXh0XG4gICAgZ3Jvd2wuaW5uZXJIVE1MID0gY29udGVudFxuXG4gICAgIyBBcHBlbmQgY2hpbGQgdG8gY29udGFpbmVyXG4gICAgayQuJCgnLmdyb3dsX2NvbnRhaW5lcicpLmFwcGVuZENoaWxkIGdyb3dsXG5cbiAgICBkZWxheSA9IHBhcmFtcy5kZWxheVxuICAgIGlkID0gcGFyYW1zLmlkXG5cbiAgICBpZiBkZWxheSA+IDBcbiAgICAgIGRvIChkZWxheSwgaWQpIC0+XG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAkZ3Jvd2wgPSBrJC4kKFwiLmdyb3dsLSN7aWR9XCIpXG4gICAgICAgICAgJGdyb3dsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICAgICRuZXdHcm93bCA9ICRncm93bC5jbG9uZU5vZGUgdHJ1ZVxuICAgICAgICAgICRncm93bC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbmV3R3Jvd2wsICRncm93bFxuICAgICAgICAgICRuZXdHcm93bC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxuICAgICAgICAgIGRvIChkZWxheSwgaWQpIC0+XG4gICAgICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgICAgICMgUmVtb3ZlIGdob3N0IGdyb3dsc1xuICAgICAgICAgICAgICBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykgaWYgbm90IGskLiQkKCcuZ3Jvd2wuc2hvdycpLmxlbmd0aFxuICAgICAgICAgICAgLCA1MDBcbiAgICAgICAgLCBkZWxheVxuXG5rJC5ncm93bCA9IGdyb3dsXG5cbm1vZHVsZS5leHBvcnRzID0gZ3Jvd2xcbiIsImdsb2JhbC5rJCA9IG5ldyBPYmplY3QoKVxuXG5rJC4kJCA9IChlbCkgLT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBlbFxuayQuJCA9IChlbCkgLT4gayQuJCQoZWwpWzBdXG5rJC5kZWJvdW5jZVRpbWVyID0gZmFsc2VcbmskLmRlYm91bmNlUXVldWUgPSBudWxsXG5rJC5leHRlbmQgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgLT5cbiAgZm9yIHByb3BlcnR5IG9mIHNvdXJjZVxuICAgIGlmIHNvdXJjZVtwcm9wZXJ0eV0gYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgaXMgT2JqZWN0XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gb3Ige31cbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUgZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldXG4gICAgZWxzZVxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XVxuICBkZXN0aW5hdGlvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGskXG4iLCJtb2RhbCA9IChlbCkgLT5cblxuICBgdmFyIGlPUyA9IC8oaVBhZHxpUGhvbmV8aVBvZCkvZy50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClgXG4gIFxuICAjIEN1cnNvciBwb2ludGVyIGhhY2sgaWYgaU9TXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCAnZGlzbWlzcy1tb2RhbCcgaWYgaU9TXG5cbiAgZG8gKGVsKSAtPlxuXG4gICAgJGhpZGVNb2RhbCA9IC0+XG4gICAgICBrJC4kKGVsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAjIEFsbG93IG1vZGFsIHRvIGRpc21pc3Mgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICRoaWRlTW9kYWwoKVxuXG4gICAgayQuJChlbCkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cbiAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAkY2xvc2VyID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignYVtkYXRhLW1vZGFsLWNsb3NlXScpXG4gICAgaWYgJGNsb3NlclxuICAgICAgJGNsb3Nlci5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAgICRoaWRlTW9kYWwoKVxuXG4gIGskLiQgZWxcblxuayQubW9kYWwgPSBtb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsXG4iLCJuYXYgPSAoZWwpIC0+XG5cbiAgdHJ5XG4gICAgIyBXaXJlIHVwIG1lbnUgaXRlbXNcbiAgICAkbWVudUl0ZW1zID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgPiBsaScpXG5cbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW1cblxuICAgICRtZW51SXRlbXMgPSBfJG1lbnVJdGVtc1xuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnbWVudS1pdGVtJ1xuXG4gICAgIyBXaXJlIHVwIHRoZSBtZW51XG4gICAgayQuZHJvcGRvd24oKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICAkYnV0dG9uID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignLm5hdmJhci10aXRsZSBidXR0b24nKVxuICBpZiAkYnV0dG9uXG4gICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAkbmF2ID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignbmF2JylcbiAgICAgIGlmICRuYXYuY2xhc3NMaXN0LmNvbnRhaW5zICdleHBhbmQnXG4gICAgICAgICRuYXYuY2xhc3NMaXN0LnJlbW92ZSAnZXhwYW5kJ1xuICAgICAgZWxzZVxuICAgICAgICAkbmF2LmNsYXNzTGlzdC5hZGQgJ2V4cGFuZCdcblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3N0YXR1cy15ZWxsb3cnXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXNfYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXNfYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1c19iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19iYXItc3RhdHVzJyBpZD0nc3RhdHVzX2Jhci1zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzX2JhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXNfYmFyLXN0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGVcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0YWJzID0gKGVsKSAtPlxuICAkdGFiU2V0ID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICAkdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYi1pdGVtJykgZm9yICR0YWIgaW4gJHRhYlNldFxuXG4gICRwYW5lU2V0ID0gbmV3IEFycmF5KClcbiAgZm9yICRfdGFiIGluICR0YWJTZXRcbiAgICAkaWQgPSAkX3RhYi5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAkcGFuZSA9IGskLiQoXCJhcnRpY2xlI3skaWR9XCIpXG4gICAgJHBhbmUuY2xhc3NMaXN0LmFkZCAnb3BlbicgaWYgJF90YWIuY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICRwYW5lU2V0LnB1c2goJHBhbmUpXG4gICAgJHBhbmUuZGF0YXNldC5wYW5lbCA9ICd0cnVlJ1xuXG4gIGZvciAkdGFiIGluICR0YWJTZXRcbiAgICAjIENyZWF0ZSBhbiBhcnJheSBvZiBwYW5lbHMgYnkgcmVhZGluZyB0aGUgbGlua3MgZnJvbSBlYWNoIHRhYi5cbiAgICAkdGFiTGluayA9ICR0YWIucXVlcnlTZWxlY3RvcignYScpXG4gICAgJHRhYkxpbmsuZGF0YXNldC5saW5rID0gJHRhYkxpbmsuZ2V0QXR0cmlidXRlICdocmVmJ1xuICAgICR0YWJMaW5rLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOydcblxuICAgIGRvICgkdGFiLCAkdGFiTGluaywgJHBhbmVTZXQpIC0+XG4gICAgICAkdGFiLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cblxuICAgICAgICAjIFJlc2V0IHRhYnMgYW5kIHBhbmVzIG9ubHkgaW4gdGhpcyB0YWJzZXRcbiAgICAgICAgJHBhbmUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRwYW5lIGluICRwYW5lU2V0XG4gICAgICAgIF8kdGFiLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciBfJHRhYiBpbiAkdGFiU2V0XG5cbiAgICAgICAgIyBBZGQgYW4gb3BlbiBjbGFzcyB1bmlxdWVseSB0byB0aGlzIHRhYiBhbmQgcGFuZS5cbiAgICAgICAgayQuJChcImFydGljbGUjeyR0YWJMaW5rLmRhdGFzZXQubGlua31cIikuY2xhc3NMaXN0LmFkZCAnb3BlbidcbiAgICAgICAgJHRhYi5jbGFzc0xpc3QuYWRkICdvcGVuJ1xuXG5rJC50YWJzID0gdGFic1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYnNcbiIsInRocm90dGxlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
