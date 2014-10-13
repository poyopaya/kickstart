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
  var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
  if (iOS) {
    document.body.classList.add('dismiss-modal');
  }
  (function(el) {
    document.body.addEventListener('click', function() {
      return k$.$(el).style.display = 'none';
    });
    return k$.$(el).addEventListener('click', function(e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2dyb3dsLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdmJhci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3RhYnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90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LFNBQUE7QUFDQSxhQUFBLGdEQUFBOzhCQUFBO0FBQUEsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQWhCLENBQXVCLE1BQXZCLENBQUEsQ0FBQTtBQUFBLFNBREE7QUFBQSxRQUlBLEVBQUUsQ0FBQyxDQUFILENBQU0sU0FBQSxHQUFTLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBaEMsQ0FBdUMsQ0FBQyxTQUFTLENBQUMsR0FBbEQsQ0FBc0QsTUFBdEQsQ0FKQSxDQUFBO2VBS0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CLEVBUjZCO01BQUEsQ0FBL0IsRUFEQztJQUFBLENBQUEsQ0FBSCxDQUFJLElBQUosRUFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBSkEsQ0FGRjtBQUFBO2tCQVpLO0FBQUEsQ0FBUCxDQUFBOztBQUFBLEVBNkJFLENBQUMsSUFBSCxHQUFVLElBN0JWLENBQUE7O0FBQUEsTUErQk0sQ0FBQyxPQUFQLEdBQWlCLElBL0JqQixDQUFBOzs7OztBQ0FBLElBQUEsUUFBQTs7QUFBQSxRQUFBLEdBQVcsU0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEtBQVQsR0FBQSxDQUFYLENBQUE7O0FBQUEsRUFJRSxDQUFDLFFBQUgsR0FBYyxRQUpkLENBQUE7O0FBQUEsTUFNTSxDQUFDLE9BQVAsR0FBaUIsUUFOakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJLUyAgICAgICAgPSByZXF1aXJlICcuL2tzJ1xuTW9kYWwgICAgID0gcmVxdWlyZSAnLi9tb2RhbCdcbkRyb3Bkb3duICA9IHJlcXVpcmUgJy4vZHJvcGRvd24nXG5OYXZiYXIgICAgPSByZXF1aXJlICcuL25hdmJhcidcbkRlYm91bmNlICA9IHJlcXVpcmUgJy4vZGVib3VuY2VyJ1xuU3RhdHVzICAgID0gcmVxdWlyZSAnLi9zdGF0dXMnXG5UYWJzICAgICAgPSByZXF1aXJlICcuL3RhYnMnXG5UaHJvdHRsZXIgPSByZXF1aXJlICcuL3Rocm90dGxlcidcbkJ1dHRvbnMgICA9IHJlcXVpcmUgJy4vYnV0dG9ucydcbkJ1ZmZlciAgICA9IHJlcXVpcmUgJy4vYnVmZmVyJ1xuR3Jvd2wgICAgID0gcmVxdWlyZSAnLi9ncm93bCdcblxuayQuYnV0dG9uKClcbmskLmRyb3Bkb3duKClcbiIsImJ1ZmZlciA9IChmbiwgZGVsYXkpIC0+XG5cbiAgIyBDcmVhdGUgYSBuZXcgYnVmZmVyQXJyYXkgaWYgb25lIGRvZXMgbm90IGV4aXN0IGFscmVhZHkuXG4gIGskLmJ1ZmZlckFycmF5ID0gayQuYnVmZmVyQXJyYXkgfHwgbmV3IEFycmF5KClcbiAgaWYgbm90IGskLmJ1ZmZlckFycmF5Lmxlbmd0aFxuICAgIGskLmJ1ZmZlckFycmF5ID0gbmV3IEFycmF5KClcblxuICAgIGRlbGF5ID0gZGVsYXkgfHwgNTAwXG5cbiAgICAjIENyZWF0ZSBhbiBpbnRlcnZhbCB0byBmaXJlIHRoZSBmbnMgaW4gYnVmZmVyQXJyYXlcbiAgICBpID0gMVxuXG4gICAgayQuYnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCAtPlxuICAgICAgayQuYnVmZmVyQXJyYXlbaV0oKSBpZiBrJC5idWZmZXJBcnJheVtpXVxuICAgICAgaSsrXG4gICAgICBjb25zb2xlLmxvZyBpXG4gICAgICBpZiBpID49IGskLmJ1ZmZlckFycmF5Lmxlbmd0aFxuICAgICAgICBjbGVhckludGVydmFsIGskLmJ1ZmZlckludGVydmFsXG4gICAgICAgIGskLmJ1ZmZlckFycmF5ID0gdW5kZWZpbmVkXG4gICAgICAgIGkgPSAxXG4gICAgLCBkZWxheVxuXG4gICMgQWRkIHRoaXMgZnVuY3Rpb24gdG8gdGhlIGFycmF5LlxuICBrJC5idWZmZXJBcnJheS5wdXNoIGZuXG5cbiAgIyBGaXJlIHJpZ2h0IGF3YXkgaWYgaXQncyB0aGUgZmlyc3QgaW4gbGluZS5cbiAgayQuYnVmZmVyQXJyYXlbMF0oKSBpZiBrJC5idWZmZXJBcnJheS5sZW5ndGggPT0gMVxuXG4gIGNvbnNvbGUuaW5mbyBcIkZ1bmN0aW9uIHF1ZXVlZCAoI3trJC5idWZmZXJBcnJheS5sZW5ndGh9IGluIHF1ZXVlKVwiXG5cbmskLmJ1ZmZlciA9IGJ1ZmZlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxuIiwiYnV0dG9uID0gLT5cblxuICAoJGJ1dHRvbi5jbGFzc0xpc3QuYWRkICdtZW51LWl0ZW0nIGlmICRidXR0b24ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGgpIGZvciAkYnV0dG9uIGluIGskLiQkKFwiYnV0dG9uXCIpXG4gICRidXR0b25Ecm9wZG93bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQgJ21lbnUtaXRlbScgZm9yICRidXR0b25Ecm9wZG93biBpbiBrJC4kJCAnLmJ1dHRvbi1kcm9wZG93bidcblxuayQuYnV0dG9uID0gYnV0dG9uXG5cbm1vZHVsZS5leHBvcnRzID0gYnV0dG9uXG4iLCJkZWJvdW5jZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gICRkZWxheSA9IGRlbGF5IHx8IDEwMDBcblxuICBrJC5kZWJvdW5jZVF1ZXVlID0gaWQgaWYgayQuZGVib3VuY2VRdWV1ZSA9PSBudWxsXG4gIGNsZWFyVGltZW91dCBrJC5kZWJvdW5jZVRpbWVyIGlmIGlkID09IGskLmRlYm91bmNlUXVldWVcbiAgayQuZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQgLT5cbiAgICBmbigpXG4gICAgayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbiAgLCAkZGVsYXlcblxuayQuZGVib3VuY2UgPSBkZWJvdW5jZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlXG4iLCJkcm9wZG93biA9ICgpIC0+XG5cbiAgIyBUaGUgZm9sbG93aW5nIHNob3VsZCBhcHBseSB0byBzZXZlcmFsIGVsZW1lbnRzLlxuXG4gICRtZW51SXRlbXMgPSBrJC4kJCAnLm1lbnUtaXRlbSdcblxuICBmb3IgJF9tZW51SXRlbSBpbiAkbWVudUl0ZW1zXG5cbiAgICAkbWVudUl0ZW0gPSAkX21lbnVJdGVtLmNsb25lTm9kZSB0cnVlXG4gICAgJF9tZW51SXRlbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbWVudUl0ZW0sICRfbWVudUl0ZW1cblxuICAgIGRvICgkbWVudUl0ZW0pIC0+XG4gICAgICAjIFRPRE86IElzIHRoZXJlIGEgd2F5IHdlIGNvdWxkIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeVxuICAgICAgIyBzaW5nbGUgb25lP1xuICAgICAgJG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG5cbiAgICAgICAgIyBKdXN0IGNsb3NlIGl0IGlmIGl0J3MgYWxyZWFkeSBvcGVuXG4gICAgICAgIGlmICRtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMgJ29wZW4nXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJylcbiAgICAgICAgJG9wZW5hYmxlID0gJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IgJ3VsJ1xuXG4gICAgICAgICMgT3BlbiB0aGlzIG9uZVxuICAgICAgICBpZiAkb3BlbmFibGVcbiAgICAgICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnb3BlbidcblxuICAgICAgICAjIFByZXZlbnQgYnViYmxpbmdcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICMgRGlzbWlzcyBhbGxcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgJHVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICR1bCBpbiBrJC4kJCgnLm1lbnUtaXRlbSA+IHVsJylcbiAgICAkbGkuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRsaSBpbiBrJC4kJCgnLm1lbnUtaXRlbS5vcGVuJylcblxuayQuZHJvcGRvd24gPSBkcm9wZG93blxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3Bkb3duXG4iLCJncm93bCA9IChwYXJhbXMpIC0+XG5cbiAgayQuYnVmZmVyIC0+XG4gICAgZGVmYXVsdHMgPVxuICAgICAgdGl0bGU6IHVuZGVmaW5lZFxuICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICBkZWxheTogMjAwMFxuICAgICAgdHlwZTogJ2FsZXJ0LXdhcm4nXG4gICAgICBpZDogRGF0ZS5ub3coKVxuXG4gICAgcGFyYW1zID0gayQuZXh0ZW5kIGRlZmF1bHRzLCBwYXJhbXNcblxuICAgICMgQ3JlYXRlIGdyb3dsIGNvbnRhaW5lclxuICAgIGlmIG5vdCBrJC4kJCgnLmdyb3dsX2NvbnRhaW5lcicpLmxlbmd0aFxuICAgICAgZ3Jvd2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG4gICAgICBncm93bENvbnRhaW5lci5jbGFzc05hbWUgPSAnZ3Jvd2xfY29udGFpbmVyJ1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCBncm93bENvbnRhaW5lclxuXG4gICAgIyBDcmVhdGUgZ3Jvd2xcbiAgICBncm93bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdidcblxuICAgICMgQWRkIGFwcHJvcHJpYXRlIGNsYXNzZXNcbiAgICBjbGFzc05hbWUgPSBcImFsZXJ0IGdyb3dsIHNob3cgI3twYXJhbXMudHlwZX0gZ3Jvd2wtI3twYXJhbXMuaWR9XCJcbiAgICBncm93bC5jbGFzc05hbWUgPSBjbGFzc05hbWVcblxuICAgICMgQWRkIGNvbnRlbnRcbiAgICBjb250ZW50ID0gXCJcIlxuICAgIGNvbnRlbnQgKz0gXCI8aDE+I3twYXJhbXMudGl0bGV9PC9oMT5cIiBpZiBwYXJhbXMudGl0bGVcbiAgICBjb250ZW50ICs9IFwiPHA+I3twYXJhbXMudGV4dH08L3A+XCIgaWYgcGFyYW1zLnRleHRcbiAgICBncm93bC5pbm5lckhUTUwgPSBjb250ZW50XG5cbiAgICAjIEFwcGVuZCBjaGlsZCB0byBjb250YWluZXJcbiAgICBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykuYXBwZW5kQ2hpbGQgZ3Jvd2xcblxuICAgIGRlbGF5ID0gcGFyYW1zLmRlbGF5XG4gICAgaWQgPSBwYXJhbXMuaWRcblxuICAgIGlmIGRlbGF5ID4gMFxuICAgICAgZG8gKGRlbGF5LCBpZCkgLT5cbiAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgICRncm93bCA9IGskLiQoXCIuZ3Jvd2wtI3tpZH1cIilcbiAgICAgICAgICAkZ3Jvd2wuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgICAgJG5ld0dyb3dsID0gJGdyb3dsLmNsb25lTm9kZSB0cnVlXG4gICAgICAgICAgJGdyb3dsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkICRuZXdHcm93bCwgJGdyb3dsXG4gICAgICAgICAgJG5ld0dyb3dsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gICAgICAgICAgZG8gKGRlbGF5LCBpZCkgLT5cbiAgICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgICAgIyBSZW1vdmUgZ2hvc3QgZ3Jvd2xzXG4gICAgICAgICAgICAgIGskLiQoJy5ncm93bF9jb250YWluZXInKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkIGskLiQoJy5ncm93bF9jb250YWluZXInKSBpZiBub3QgayQuJCQoJy5ncm93bC5zaG93JykubGVuZ3RoXG4gICAgICAgICAgICAsIDUwMFxuICAgICAgICAsIGRlbGF5XG5cbmskLmdyb3dsID0gZ3Jvd2xcblxubW9kdWxlLmV4cG9ydHMgPSBncm93bFxuIiwiZ2xvYmFsLmskID0gbmV3IE9iamVjdCgpXG5cbmskLiQkID0gKGVsKSAtPiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIGVsXG5rJC4kID0gKGVsKSAtPiBrJC4kJChlbClbMF1cbmskLmRlYm91bmNlVGltZXIgPSBmYWxzZVxuayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbmskLmV4dGVuZCA9IChkZXN0aW5hdGlvbiwgc291cmNlKSAtPlxuICBmb3IgcHJvcGVydHkgb2Ygc291cmNlXG4gICAgaWYgc291cmNlW3Byb3BlcnR5XSBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBpcyBPYmplY3RcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSBvciB7fVxuICAgICAgYXJndW1lbnRzLmNhbGxlZSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV1cbiAgICBlbHNlXG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldXG4gIGRlc3RpbmF0aW9uXG5cbm1vZHVsZS5leHBvcnRzID0gayRcbiIsIm1vZGFsID0gKGVsKSAtPlxuXG4gIGB2YXIgaU9TID0gLyhpUGFkfGlQaG9uZXxpUG9kKS9nLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKWBcbiAgXG4gICMgQ3Vyc29yIHBvaW50ZXIgaGFjayBpZiBpT1NcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkICdkaXNtaXNzLW1vZGFsJyBpZiBpT1NcblxuICBkbyAoZWwpIC0+XG5cbiAgICAjIEFsbG93IG1vZGFsIHRvIGRpc21pc3Mgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgIGskLiQoZWwpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGskLiQoZWwpLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG4gICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGskLiQgZWxcblxuayQubW9kYWwgPSBtb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsXG4iLCJuYXYgPSAoZWwpIC0+XG5cbiAgdHJ5XG4gICAgIyBXaXJlIHVwIG1lbnUgaXRlbXNcbiAgICAkbWVudUl0ZW1zID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgPiBsaScpXG5cbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW1cblxuICAgICRtZW51SXRlbXMgPSBfJG1lbnVJdGVtc1xuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnbWVudS1pdGVtJ1xuXG4gICAgIyBXaXJlIHVwIHRoZSBtZW51XG4gICAgayQuZHJvcGRvd24oKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICAkYnV0dG9uID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignLm5hdmJhci10aXRsZSBidXR0b24nKVxuICBpZiAkYnV0dG9uXG4gICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAkbmF2ID0gayQuJChlbCkucXVlcnlTZWxlY3RvcignbmF2JylcbiAgICAgIGlmICRuYXYuY2xhc3NMaXN0LmNvbnRhaW5zICdleHBhbmQnXG4gICAgICAgICRuYXYuY2xhc3NMaXN0LnJlbW92ZSAnZXhwYW5kJ1xuICAgICAgZWxzZVxuICAgICAgICAkbmF2LmNsYXNzTGlzdC5hZGQgJ2V4cGFuZCdcblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3N0YXR1cy15ZWxsb3cnXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXNfYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXNfYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1c19iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19iYXItc3RhdHVzJyBpZD0nc3RhdHVzX2Jhci1zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzX2JhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXNfYmFyLXN0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGVcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0YWJzID0gKGVsKSAtPlxuICAkdGFiU2V0ID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICAkdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYi1pdGVtJykgZm9yICR0YWIgaW4gJHRhYlNldFxuXG4gICRwYW5lU2V0ID0gbmV3IEFycmF5KClcbiAgZm9yICRfdGFiIGluICR0YWJTZXRcbiAgICAkaWQgPSAkX3RhYi5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAkcGFuZSA9IGskLiQoXCJhcnRpY2xlI3skaWR9XCIpXG4gICAgJHBhbmUuY2xhc3NMaXN0LmFkZCAnb3BlbicgaWYgJF90YWIuY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICRwYW5lU2V0LnB1c2goJHBhbmUpXG4gICAgJHBhbmUuZGF0YXNldC5wYW5lbCA9ICd0cnVlJ1xuXG4gIGZvciAkdGFiIGluICR0YWJTZXRcbiAgICAjIENyZWF0ZSBhbiBhcnJheSBvZiBwYW5lbHMgYnkgcmVhZGluZyB0aGUgbGlua3MgZnJvbSBlYWNoIHRhYi5cbiAgICAkdGFiTGluayA9ICR0YWIucXVlcnlTZWxlY3RvcignYScpXG4gICAgJHRhYkxpbmsuZGF0YXNldC5saW5rID0gJHRhYkxpbmsuZ2V0QXR0cmlidXRlICdocmVmJ1xuICAgICR0YWJMaW5rLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOydcblxuICAgIGRvICgkdGFiLCAkdGFiTGluaywgJHBhbmVTZXQpIC0+XG4gICAgICAkdGFiLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cblxuICAgICAgICAjIFJlc2V0IHRhYnMgYW5kIHBhbmVzIG9ubHkgaW4gdGhpcyB0YWJzZXRcbiAgICAgICAgJHBhbmUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRwYW5lIGluICRwYW5lU2V0XG4gICAgICAgIF8kdGFiLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciBfJHRhYiBpbiAkdGFiU2V0XG5cbiAgICAgICAgIyBBZGQgYW4gb3BlbiBjbGFzcyB1bmlxdWVseSB0byB0aGlzIHRhYiBhbmQgcGFuZS5cbiAgICAgICAgayQuJChcImFydGljbGUjeyR0YWJMaW5rLmRhdGFzZXQubGlua31cIikuY2xhc3NMaXN0LmFkZCAnb3BlbidcbiAgICAgICAgJHRhYi5jbGFzc0xpc3QuYWRkICdvcGVuJ1xuXG5rJC50YWJzID0gdGFic1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYnNcbiIsInRocm90dGxlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
