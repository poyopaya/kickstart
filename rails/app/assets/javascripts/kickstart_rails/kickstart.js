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

k$.button();

k$.dropdown();



},{"./buffer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee","./buttons":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buttons.coffee","./debouncer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/dropdown.coffee","./growl":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/growl.coffee","./ks":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee","./navbar":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/navbar.coffee","./status":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee","./tabs":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/tabs.coffee","./throttler":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buttons.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/dropdown.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/growl.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee":[function(require,module,exports){
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
},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee":[function(require,module,exports){
var modal;

modal = function(el) {
  (function(el) {
    $hideModal(function() {
      return k$.$(el).style.display = 'none';
    });
    document.body.addEventListener('click', function() {
      return $hideModal();
    });
    document.body.addEventListener('ontouchend', function() {
      return $hideModal();
    });
    k$.$(el).addEventListener('click', function(e) {
      return e.stopPropagation();
    });
    return k$.$(el).addEventListener('ontouchend', function(e) {
      return e.stopPropagation();
    });
  })(el);
  return k$.$(el);
};

k$.modal = modal;

module.exports = modal;



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/navbar.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/tabs.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee":[function(require,module,exports){
var throttle;

throttle = function(fn, id, delay) {};

k$.throttle = throttle;

module.exports = throttle;



},{}]},{},["./lib/coffee/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2dyb3dsLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdmJhci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3RhYnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90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aEIsQ0FBQTtBQUFBLGtCQUlHLENBQUEsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixRQUFqQixHQUFBO2FBQ0QsSUFBSSxDQUFDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFNBQUEsR0FBQTtBQUc3QixZQUFBLDJCQUFBO0FBQUEsYUFBQSxpREFBQTsrQkFBQTtBQUFBLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFoQixDQUF1QixNQUF2QixDQUFBLENBQUE7QUFBQSxTQUFBO0FBQ0EsYUFBQSxnREFBQTs4QkFBQTtBQUFBLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFoQixDQUF1QixNQUF2QixDQUFBLENBQUE7QUFBQSxTQURBO0FBQUEsUUFJQSxFQUFFLENBQUMsQ0FBSCxDQUFNLFNBQUEsR0FBUyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQWhDLENBQXVDLENBQUMsU0FBUyxDQUFDLEdBQWxELENBQXNELE1BQXRELENBSkEsQ0FBQTtlQUtBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixNQUFuQixFQVI2QjtNQUFBLENBQS9CLEVBREM7SUFBQSxDQUFBLENBQUgsQ0FBSSxJQUFKLEVBQVUsUUFBVixFQUFvQixRQUFwQixFQUpBLENBRkY7QUFBQTtrQkFaSztBQUFBLENBQVAsQ0FBQTs7QUFBQSxFQTZCRSxDQUFDLElBQUgsR0FBVSxJQTdCVixDQUFBOztBQUFBLE1BK0JNLENBQUMsT0FBUCxHQUFpQixJQS9CakIsQ0FBQTs7Ozs7QUNBQSxJQUFBLFFBQUE7O0FBQUEsUUFBQSxHQUFXLFNBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxLQUFULEdBQUEsQ0FBWCxDQUFBOztBQUFBLEVBSUUsQ0FBQyxRQUFILEdBQWMsUUFKZCxDQUFBOztBQUFBLE1BTU0sQ0FBQyxPQUFQLEdBQWlCLFFBTmpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiS1MgICAgICAgID0gcmVxdWlyZSAnLi9rcydcbk1vZGFsICAgICA9IHJlcXVpcmUgJy4vbW9kYWwnXG5Ecm9wZG93biAgPSByZXF1aXJlICcuL2Ryb3Bkb3duJ1xuTmF2YmFyICAgID0gcmVxdWlyZSAnLi9uYXZiYXInXG5EZWJvdW5jZSAgPSByZXF1aXJlICcuL2RlYm91bmNlcidcblN0YXR1cyAgICA9IHJlcXVpcmUgJy4vc3RhdHVzJ1xuVGFicyAgICAgID0gcmVxdWlyZSAnLi90YWJzJ1xuVGhyb3R0bGVyID0gcmVxdWlyZSAnLi90aHJvdHRsZXInXG5CdXR0b25zICAgPSByZXF1aXJlICcuL2J1dHRvbnMnXG5CdWZmZXIgICAgPSByZXF1aXJlICcuL2J1ZmZlcidcbkdyb3dsICAgICA9IHJlcXVpcmUgJy4vZ3Jvd2wnXG5cbmskLmJ1dHRvbigpXG5rJC5kcm9wZG93bigpXG4iLCJidWZmZXIgPSAoZm4sIGRlbGF5KSAtPlxuXG4gICMgQ3JlYXRlIGEgbmV3IGJ1ZmZlckFycmF5IGlmIG9uZSBkb2VzIG5vdCBleGlzdCBhbHJlYWR5LlxuICBrJC5idWZmZXJBcnJheSA9IGskLmJ1ZmZlckFycmF5IHx8IG5ldyBBcnJheSgpXG4gIGlmIG5vdCBrJC5idWZmZXJBcnJheS5sZW5ndGhcbiAgICBrJC5idWZmZXJBcnJheSA9IG5ldyBBcnJheSgpXG5cbiAgICBkZWxheSA9IGRlbGF5IHx8IDUwMFxuXG4gICAgIyBDcmVhdGUgYW4gaW50ZXJ2YWwgdG8gZmlyZSB0aGUgZm5zIGluIGJ1ZmZlckFycmF5XG4gICAgaSA9IDFcblxuICAgIGskLmJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwgLT5cbiAgICAgIGskLmJ1ZmZlckFycmF5W2ldKCkgaWYgayQuYnVmZmVyQXJyYXlbaV1cbiAgICAgIGkrK1xuICAgICAgY29uc29sZS5sb2cgaVxuICAgICAgaWYgaSA+PSBrJC5idWZmZXJBcnJheS5sZW5ndGhcbiAgICAgICAgY2xlYXJJbnRlcnZhbCBrJC5idWZmZXJJbnRlcnZhbFxuICAgICAgICBrJC5idWZmZXJBcnJheSA9IHVuZGVmaW5lZFxuICAgICAgICBpID0gMVxuICAgICwgZGVsYXlcblxuICAjIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIHRoZSBhcnJheS5cbiAgayQuYnVmZmVyQXJyYXkucHVzaCBmblxuXG4gICMgRmlyZSByaWdodCBhd2F5IGlmIGl0J3MgdGhlIGZpcnN0IGluIGxpbmUuXG4gIGskLmJ1ZmZlckFycmF5WzBdKCkgaWYgayQuYnVmZmVyQXJyYXkubGVuZ3RoID09IDFcblxuICBjb25zb2xlLmluZm8gXCJGdW5jdGlvbiBxdWV1ZWQgKCN7ayQuYnVmZmVyQXJyYXkubGVuZ3RofSBpbiBxdWV1ZSlcIlxuXG5rJC5idWZmZXIgPSBidWZmZXJcblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbiIsImJ1dHRvbiA9IC0+XG5cbiAgKCRidXR0b24uY2xhc3NMaXN0LmFkZCAnbWVudS1pdGVtJyBpZiAkYnV0dG9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJykubGVuZ3RoKSBmb3IgJGJ1dHRvbiBpbiBrJC4kJChcImJ1dHRvblwiKVxuICAkYnV0dG9uRHJvcGRvd24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkICdtZW51LWl0ZW0nIGZvciAkYnV0dG9uRHJvcGRvd24gaW4gayQuJCQgJy5idXR0b24tZHJvcGRvd24nXG5cbmskLmJ1dHRvbiA9IGJ1dHRvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvblxuIiwiZGVib3VuY2UgPSAoZm4sIGlkLCBkZWxheSkgLT5cblxuICAkZGVsYXkgPSBkZWxheSB8fCAxMDAwXG5cbiAgayQuZGVib3VuY2VRdWV1ZSA9IGlkIGlmIGskLmRlYm91bmNlUXVldWUgPT0gbnVsbFxuICBjbGVhclRpbWVvdXQgayQuZGVib3VuY2VUaW1lciBpZiBpZCA9PSBrJC5kZWJvdW5jZVF1ZXVlXG4gIGskLmRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0IC0+XG4gICAgZm4oKVxuICAgIGskLmRlYm91bmNlUXVldWUgPSBudWxsXG4gICwgJGRlbGF5XG5cbmskLmRlYm91bmNlID0gZGVib3VuY2VcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZVxuIiwiZHJvcGRvd24gPSAoKSAtPlxuXG4gICMgVGhlIGZvbGxvd2luZyBzaG91bGQgYXBwbHkgdG8gc2V2ZXJhbCBlbGVtZW50cy5cblxuICAkbWVudUl0ZW1zID0gayQuJCQgJy5tZW51LWl0ZW0nXG5cbiAgZm9yICRfbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgJG1lbnVJdGVtID0gJF9tZW51SXRlbS5jbG9uZU5vZGUgdHJ1ZVxuICAgICRfbWVudUl0ZW0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQgJG1lbnVJdGVtLCAkX21lbnVJdGVtXG5cbiAgICBkbyAoJG1lbnVJdGVtKSAtPlxuICAgICAgIyBUT0RPOiBJcyB0aGVyZSBhIHdheSB3ZSBjb3VsZCBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciBmb3IgZXZlcnlcbiAgICAgICMgc2luZ2xlIG9uZT9cbiAgICAgICRtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuXG4gICAgICAgICMgSnVzdCBjbG9zZSBpdCBpZiBpdCdzIGFscmVhZHkgb3BlblxuICAgICAgICBpZiAkbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJ1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICMgUmVzZXQgYWxsXG4gICAgICAgIF8kbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yIF8kbWVudUl0ZW0gaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpXG4gICAgICAgICRvcGVuYWJsZSA9ICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yICd1bCdcblxuICAgICAgICAjIE9wZW4gdGhpcyBvbmVcbiAgICAgICAgaWYgJG9wZW5hYmxlXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ29wZW4nXG5cbiAgICAgICAgIyBQcmV2ZW50IGJ1YmJsaW5nXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAjIERpc21pc3MgYWxsXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICR1bC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciAkdWwgaW4gayQuJCQoJy5tZW51LWl0ZW0gPiB1bCcpXG4gICAgJGxpLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciAkbGkgaW4gayQuJCQoJy5tZW51LWl0ZW0ub3BlbicpXG5cbmskLmRyb3Bkb3duID0gZHJvcGRvd25cblxubW9kdWxlLmV4cG9ydHMgPSBkcm9wZG93blxuIiwiZ3Jvd2wgPSAocGFyYW1zKSAtPlxuXG4gIGskLmJ1ZmZlciAtPlxuICAgIGRlZmF1bHRzID1cbiAgICAgIHRpdGxlOiB1bmRlZmluZWRcbiAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgICAgZGVsYXk6IDIwMDBcbiAgICAgIHR5cGU6ICdhbGVydC13YXJuJ1xuICAgICAgaWQ6IERhdGUubm93KClcblxuICAgIHBhcmFtcyA9IGskLmV4dGVuZCBkZWZhdWx0cywgcGFyYW1zXG5cbiAgICAjIENyZWF0ZSBncm93bCBjb250YWluZXJcbiAgICBpZiBub3QgayQuJCQoJy5ncm93bF9jb250YWluZXInKS5sZW5ndGhcbiAgICAgIGdyb3dsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnZGl2J1xuICAgICAgZ3Jvd2xDb250YWluZXIuY2xhc3NOYW1lID0gJ2dyb3dsX2NvbnRhaW5lcidcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQgZ3Jvd2xDb250YWluZXJcblxuICAgICMgQ3JlYXRlIGdyb3dsXG4gICAgZ3Jvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG5cbiAgICAjIEFkZCBhcHByb3ByaWF0ZSBjbGFzc2VzXG4gICAgY2xhc3NOYW1lID0gXCJhbGVydCBncm93bCBzaG93ICN7cGFyYW1zLnR5cGV9IGdyb3dsLSN7cGFyYW1zLmlkfVwiXG4gICAgZ3Jvd2wuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG5cbiAgICAjIEFkZCBjb250ZW50XG4gICAgY29udGVudCA9IFwiXCJcbiAgICBjb250ZW50ICs9IFwiPGgxPiN7cGFyYW1zLnRpdGxlfTwvaDE+XCIgaWYgcGFyYW1zLnRpdGxlXG4gICAgY29udGVudCArPSBcIjxwPiN7cGFyYW1zLnRleHR9PC9wPlwiIGlmIHBhcmFtcy50ZXh0XG4gICAgZ3Jvd2wuaW5uZXJIVE1MID0gY29udGVudFxuXG4gICAgIyBBcHBlbmQgY2hpbGQgdG8gY29udGFpbmVyXG4gICAgayQuJCgnLmdyb3dsX2NvbnRhaW5lcicpLmFwcGVuZENoaWxkIGdyb3dsXG5cbiAgICBkZWxheSA9IHBhcmFtcy5kZWxheVxuICAgIGlkID0gcGFyYW1zLmlkXG5cbiAgICBpZiBkZWxheSA+IDBcbiAgICAgIGRvIChkZWxheSwgaWQpIC0+XG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAkZ3Jvd2wgPSBrJC4kKFwiLmdyb3dsLSN7aWR9XCIpXG4gICAgICAgICAgJGdyb3dsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICAgICRuZXdHcm93bCA9ICRncm93bC5jbG9uZU5vZGUgdHJ1ZVxuICAgICAgICAgICRncm93bC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbmV3R3Jvd2wsICRncm93bFxuICAgICAgICAgICRuZXdHcm93bC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxuICAgICAgICAgIGRvIChkZWxheSwgaWQpIC0+XG4gICAgICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgICAgICMgUmVtb3ZlIGdob3N0IGdyb3dsc1xuICAgICAgICAgICAgICBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykgaWYgbm90IGskLiQkKCcuZ3Jvd2wuc2hvdycpLmxlbmd0aFxuICAgICAgICAgICAgLCA1MDBcbiAgICAgICAgLCBkZWxheVxuXG5rJC5ncm93bCA9IGdyb3dsXG5cbm1vZHVsZS5leHBvcnRzID0gZ3Jvd2xcbiIsImdsb2JhbC5rJCA9IG5ldyBPYmplY3QoKVxuXG5rJC4kJCA9IChlbCkgLT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBlbFxuayQuJCA9IChlbCkgLT4gayQuJCQoZWwpWzBdXG5rJC5kZWJvdW5jZVRpbWVyID0gZmFsc2VcbmskLmRlYm91bmNlUXVldWUgPSBudWxsXG5rJC5leHRlbmQgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgLT5cbiAgZm9yIHByb3BlcnR5IG9mIHNvdXJjZVxuICAgIGlmIHNvdXJjZVtwcm9wZXJ0eV0gYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgaXMgT2JqZWN0XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gb3Ige31cbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUgZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldXG4gICAgZWxzZVxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XVxuICBkZXN0aW5hdGlvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGskXG4iLCJtb2RhbCA9IChlbCkgLT5cblxuICBkbyAoZWwpIC0+XG5cbiAgICAjIEFsbG93IG1vZGFsIHRvIGRpc21pc3Mgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICAkaGlkZU1vZGFsIC0+XG4gICAgICBrJC4kKGVsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICRoaWRlTW9kYWwoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdvbnRvdWNoZW5kJywgLT5cbiAgICAgICRoaWRlTW9kYWwoKVxuXG4gICAgayQuJChlbCkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cbiAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBrJC4kKGVsKS5hZGRFdmVudExpc3RlbmVyICdvbnRvdWNoZW5kJywgKGUpIC0+XG4gICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGskLiQgZWxcblxuayQubW9kYWwgPSBtb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsXG4iLCJuYXYgPSAoZWwpIC0+XG5cbiAgdHJ5XG4gICAgIyBXaXJlIHVwIG1lbnUgaXRlbXNcbiAgICAkbWVudUl0ZW1zID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgPiBsaScpXG5cbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW1cblxuICAgICRtZW51SXRlbXMgPSBfJG1lbnVJdGVtc1xuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnbWVudS1pdGVtJ1xuXG4gICAgIyBXaXJlIHVwIHRoZSBtZW51XG4gICAgayQuZHJvcGRvd24oKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICAkYnV0dG9uID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignLm5hdmJhci10aXRsZSBidXR0b24nKVxuICBpZiAkYnV0dG9uXG4gICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAkbmF2ID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignbmF2JylcbiAgICAgIGlmICRuYXYuY2xhc3NMaXN0LmNvbnRhaW5zICdleHBhbmQnXG4gICAgICAgICRuYXYuY2xhc3NMaXN0LnJlbW92ZSAnZXhwYW5kJ1xuICAgICAgZWxzZVxuICAgICAgICAkbmF2LmNsYXNzTGlzdC5hZGQgJ2V4cGFuZCdcblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3N0YXR1cy15ZWxsb3cnXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXNfYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXNfYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1c19iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19iYXItc3RhdHVzJyBpZD0nc3RhdHVzX2Jhci1zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzX2JhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXNfYmFyLXN0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGVcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0YWJzID0gKGVsKSAtPlxuICAkdGFiU2V0ID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICAkdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYi1pdGVtJykgZm9yICR0YWIgaW4gJHRhYlNldFxuXG4gICRwYW5lU2V0ID0gbmV3IEFycmF5KClcbiAgZm9yICRfdGFiIGluICR0YWJTZXRcbiAgICAkaWQgPSAkX3RhYi5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAkcGFuZSA9IGskLiQoXCJhcnRpY2xlI3skaWR9XCIpXG4gICAgJHBhbmUuY2xhc3NMaXN0LmFkZCAnb3BlbicgaWYgJF90YWIuY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICRwYW5lU2V0LnB1c2goJHBhbmUpXG4gICAgJHBhbmUuZGF0YXNldC5wYW5lbCA9ICd0cnVlJ1xuXG4gIGZvciAkdGFiIGluICR0YWJTZXRcbiAgICAjIENyZWF0ZSBhbiBhcnJheSBvZiBwYW5lbHMgYnkgcmVhZGluZyB0aGUgbGlua3MgZnJvbSBlYWNoIHRhYi5cbiAgICAkdGFiTGluayA9ICR0YWIucXVlcnlTZWxlY3RvcignYScpXG4gICAgJHRhYkxpbmsuZGF0YXNldC5saW5rID0gJHRhYkxpbmsuZ2V0QXR0cmlidXRlICdocmVmJ1xuICAgICR0YWJMaW5rLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOydcblxuICAgIGRvICgkdGFiLCAkdGFiTGluaywgJHBhbmVTZXQpIC0+XG4gICAgICAkdGFiLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cblxuICAgICAgICAjIFJlc2V0IHRhYnMgYW5kIHBhbmVzIG9ubHkgaW4gdGhpcyB0YWJzZXRcbiAgICAgICAgJHBhbmUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRwYW5lIGluICRwYW5lU2V0XG4gICAgICAgIF8kdGFiLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciBfJHRhYiBpbiAkdGFiU2V0XG5cbiAgICAgICAgIyBBZGQgYW4gb3BlbiBjbGFzcyB1bmlxdWVseSB0byB0aGlzIHRhYiBhbmQgcGFuZS5cbiAgICAgICAgayQuJChcImFydGljbGUjeyR0YWJMaW5rLmRhdGFzZXQubGlua31cIikuY2xhc3NMaXN0LmFkZCAnb3BlbidcbiAgICAgICAgJHRhYi5jbGFzc0xpc3QuYWRkICdvcGVuJ1xuXG5rJC50YWJzID0gdGFic1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYnNcbiIsInRocm90dGxlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
