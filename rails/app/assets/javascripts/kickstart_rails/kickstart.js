(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Buffer, Buttons, Debounce, Dropdown, Growl, KS, Modal, Nav, Status, Throttler;

KS = require('./ks');

Modal = require('./modal');

Nav = require('./nav');

Debounce = require('./debouncer');

Status = require('./status');

Throttler = require('./throttler');

Buttons = require('./buttons');

Dropdown = require('./dropdown');

Buffer = require('./buffer');

Growl = require('./growl');

k$.button();

k$.dropdown();



},{"./buffer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee","./buttons":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buttons.coffee","./debouncer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/dropdown.coffee","./growl":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/growl.coffee","./ks":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee","./nav":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/nav.coffee","./status":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee","./throttler":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee":[function(require,module,exports){
var buffer;

buffer = function(fn, delay) {
  var i;
  k$.bufferArray = k$.bufferArray || new Array();
  if (!k$.bufferArray.length) {
    k$.bufferArray = new Array();
    delay = delay || 2000;
    i = 1;
    k$.bufferInterval = setInterval(function() {
      k$.bufferArray[i]();
      i++;
      console.log(i);
      if (i >= k$.bufferArray.length) {
        clearInterval(k$.bufferInterval);
        k$.bufferArray = [];
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
      $button.classList.add('with-submenu');
    }
  }
  _ref1 = k$.$$('.button-dropdown');
  _results = [];
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    $buttonDropdown = _ref1[_j];
    _results.push($buttonDropdown.parentNode.classList.add('with-submenu'));
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
  $menuItems = k$.$$('.with-submenu');
  _fn = function($menuItem) {
    return $menuItem.addEventListener('click', function(e) {
      var $ul, _$menuItem, _j, _len1, _ref;
      if ($menuItem.classList.contains('open')) {
        $menuItem.classList.remove('open');
        return;
      }
      _ref = document.querySelectorAll('.with-submenu');
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        _$menuItem = _ref[_j];
        _$menuItem.classList.remove('open');
      }
      $ul = $menuItem.querySelector('ul');
      if ($ul) {
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
    _ref = k$.$$('.with-submenu > ul');
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      $ul = _ref[_j];
      $ul.parentNode.classList.remove('open');
    }
    _ref1 = k$.$$('.with-submenu.open');
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
  var content, growlContainer;
  if (!k$.$$('.growl_container').length) {
    growlContainer = document.createElement('div');
    growlContainer.className = 'growl_container';
    document.body.appendChild(growlContainer);
  }
  growl = document.createElement('div');
  growl.className = "alert growl " + params.type;
  content = "";
  if (params.title) {
    content += "<h1>" + params.title + "</h1>";
  }
  if (params.text) {
    content += "<p>" + params.text + "</p>";
  }
  growl.innerHTML = content;
  return k$.$('.growl_container').appendChild(growl);
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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/nav.coffee":[function(require,module,exports){
var nav;

nav = function(el) {
  var $menuItem, $menuItems, e, _$menuItems, _i, _j, _len, _len1;
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
      $menuItem.classList.add('with-submenu');
    }
    k$.dropdown();
  } catch (_error) {
    e = _error;
    console.error("Could not instantiate as a nav.", e.message);
  }
  return k$.$(el);
};

k$.nav = nav;

module.exports = nav;



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee":[function(require,module,exports){
var status;

status = function(opts) {
  var $status, $statusBar, defaults, hideStatusBar;
  defaults = {
    type: 'warn',
    delay: 2000
  };
  status = k$.extend(defaults, opts);
  if (!k$.$$('#status-bar').length) {
    $statusBar = document.createElement('div');
    $statusBar.id = 'status-bar';
    $statusBar.className = 'status-bar';
    $statusBar.innerHTML = "<div class='status-bar_status' id='status-bar_status'></div>";
    document.body.appendChild($statusBar);
  }
  $statusBar = k$.$('#status-bar');
  hideStatusBar = function() {
    return $statusBar.parentNode.removeChild($statusBar);
  };
  if (status.delay > 0) {
    k$.debounce(hideStatusBar, 'hideStatusBar', status.delay);
  }
  $status = k$.$("#status-bar_status");
  $status.innerHTML = status.text;
  return $status.dataset.type = status.type || 'warn';
};

k$.status = status;

module.exports = status;



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee":[function(require,module,exports){
var throttle;

throttle = function(fn, id, delay) {};

k$.throttle = throttle;

module.exports = throttle;



},{}]},{},["./lib/coffee/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2dyb3dsLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3Rocm90dGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLDZFQUFBOztBQUFB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QyxXQUFkLENBQTBCLFVBQTFCLENBSkEsQ0FERjtHQU5BO0FBQUEsRUFhQSxVQUFBLEdBQWEsRUFBRSxDQUFDLENBQUgsQ0FBSyxhQUFMLENBYmIsQ0FBQTtBQUFBLEVBZUEsYUFBQSxHQUFnQixTQUFBLEdBQUE7V0FDZCxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQXRCLENBQWtDLFVBQWxDLEVBRGM7RUFBQSxDQWZoQixDQUFBO0FBa0JBLEVBQUEsSUFBRyxNQUFNLENBQUMsS0FBUCxHQUFlLENBQWxCO0FBQ0UsSUFBQSxFQUFFLENBQUMsUUFBSCxDQUFZLGFBQVosRUFBMkIsZUFBM0IsRUFBNEMsTUFBTSxDQUFDLEtBQW5ELENBQUEsQ0FERjtHQWxCQTtBQUFBLEVBcUJBLE9BQUEsR0FBVSxFQUFFLENBQUMsQ0FBSCxDQUFLLG9CQUFMLENBckJWLENBQUE7QUFBQSxFQXNCQSxPQUFPLENBQUMsU0FBUixHQUFvQixNQUFNLENBQUMsSUF0QjNCLENBQUE7U0F1QkEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFoQixHQUF1QixNQUFNLENBQUMsSUFBUCxJQUFlLE9BekIvQjtBQUFBLENBQVQsQ0FBQTs7QUFBQSxFQTJCRSxDQUFDLE1BQUgsR0FBWSxNQTNCWixDQUFBOztBQUFBLE1BNkJNLENBQUMsT0FBUCxHQUFpQixNQTdCakIsQ0FBQTs7Ozs7QUNBQSxJQUFBLFFBQUE7O0FBQUEsUUFBQSxHQUFXLFNBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxLQUFULEdBQUEsQ0FBWCxDQUFBOztBQUFBLEVBSUUsQ0FBQyxRQUFILEdBQWMsUUFKZCxDQUFBOztBQUFBLE1BTU0sQ0FBQyxPQUFQLEdBQWlCLFFBTmpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiS1MgICAgICAgID0gcmVxdWlyZSAnLi9rcydcbk1vZGFsICAgICA9IHJlcXVpcmUgJy4vbW9kYWwnXG5OYXYgICAgICAgPSByZXF1aXJlICcuL25hdidcbkRlYm91bmNlICA9IHJlcXVpcmUgJy4vZGVib3VuY2VyJ1xuU3RhdHVzICAgID0gcmVxdWlyZSAnLi9zdGF0dXMnXG5UaHJvdHRsZXIgPSByZXF1aXJlICcuL3Rocm90dGxlcidcbkJ1dHRvbnMgICA9IHJlcXVpcmUgJy4vYnV0dG9ucydcbkRyb3Bkb3duICA9IHJlcXVpcmUgJy4vZHJvcGRvd24nXG5CdWZmZXIgICAgPSByZXF1aXJlICcuL2J1ZmZlcidcbkdyb3dsICAgICA9IHJlcXVpcmUgJy4vZ3Jvd2wnXG5cbmskLmJ1dHRvbigpXG5rJC5kcm9wZG93bigpXG4iLCJidWZmZXIgPSAoZm4sIGRlbGF5KSAtPlxuXG4gICMgQ3JlYXRlIGEgbmV3IGJ1ZmZlckFycmF5IGlmIG9uZSBkb2VzIG5vdCBleGlzdCBhbHJlYWR5LlxuICBrJC5idWZmZXJBcnJheSA9IGskLmJ1ZmZlckFycmF5IHx8IG5ldyBBcnJheSgpXG4gIGlmIG5vdCBrJC5idWZmZXJBcnJheS5sZW5ndGhcbiAgICBrJC5idWZmZXJBcnJheSA9IG5ldyBBcnJheSgpXG5cbiAgICBkZWxheSA9IGRlbGF5IHx8IDIwMDBcblxuICAgICMgQ3JlYXRlIGFuIGludGVydmFsIHRvIGZpcmUgdGhlIGZucyBpbiBidWZmZXJBcnJheVxuICAgIGkgPSAxXG5cbiAgICBrJC5idWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsIC0+XG4gICAgICBrJC5idWZmZXJBcnJheVtpXSgpXG4gICAgICBpKytcbiAgICAgIGNvbnNvbGUubG9nIGlcbiAgICAgIGlmIGkgPj0gayQuYnVmZmVyQXJyYXkubGVuZ3RoXG4gICAgICAgIGNsZWFySW50ZXJ2YWwgayQuYnVmZmVySW50ZXJ2YWxcbiAgICAgICAgayQuYnVmZmVyQXJyYXkgPSBbXVxuICAgICAgICBpID0gMVxuICAgICwgZGVsYXlcblxuICAjIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIHRoZSBhcnJheS5cbiAgayQuYnVmZmVyQXJyYXkucHVzaCBmblxuXG4gICMgRmlyZSByaWdodCBhd2F5IGlmIGl0J3MgdGhlIGZpcnN0IGluIGxpbmUuXG4gIGskLmJ1ZmZlckFycmF5WzBdKCkgaWYgayQuYnVmZmVyQXJyYXkubGVuZ3RoID09IDFcblxuICBjb25zb2xlLmluZm8gXCJGdW5jdGlvbiBxdWV1ZWQgKCN7ayQuYnVmZmVyQXJyYXkubGVuZ3RofSBpbiBxdWV1ZSlcIlxuXG5rJC5idWZmZXIgPSBidWZmZXJcblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbiIsImJ1dHRvbiA9IC0+XG5cbiAgKCRidXR0b24uY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51JyBpZiAkYnV0dG9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJykubGVuZ3RoKSBmb3IgJGJ1dHRvbiBpbiBrJC4kJChcImJ1dHRvblwiKVxuICAkYnV0dG9uRHJvcGRvd24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkICd3aXRoLXN1Ym1lbnUnIGZvciAkYnV0dG9uRHJvcGRvd24gaW4gayQuJCQgJy5idXR0b24tZHJvcGRvd24nXG5cbmskLmJ1dHRvbiA9IGJ1dHRvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvblxuIiwiZGVib3VuY2UgPSAoZm4sIGlkLCBkZWxheSkgLT5cblxuICAkZGVsYXkgPSBkZWxheSB8fCAxMDAwXG5cbiAgayQuZGVib3VuY2VRdWV1ZSA9IGlkIGlmIGskLmRlYm91bmNlUXVldWUgPT0gbnVsbFxuICBjbGVhclRpbWVvdXQgayQuZGVib3VuY2VUaW1lciBpZiBpZCA9PSBrJC5kZWJvdW5jZVF1ZXVlXG4gIGskLmRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0IC0+XG4gICAgZm4oKVxuICAgIGskLmRlYm91bmNlUXVldWUgPSBudWxsXG4gICwgJGRlbGF5XG5cbmskLmRlYm91bmNlID0gZGVib3VuY2VcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZVxuIiwiZHJvcGRvd24gPSAtPlxuXG4gICMgVGhlIGZvbGxvd2luZyBzaG91bGQgYXBwbHkgdG8gYm90aCBuYXZpZ2F0aW9uIGVsZW1lbnRzIGFuZCBkcm9wZG93biBidXR0b25zXG5cbiAgJG1lbnVJdGVtcyA9IGskLiQkICcud2l0aC1zdWJtZW51J1xuXG4gIGZvciAkX21lbnVJdGVtIGluICRtZW51SXRlbXNcblxuICAgICRtZW51SXRlbSA9ICRfbWVudUl0ZW0uY2xvbmVOb2RlIHRydWVcbiAgICAkX21lbnVJdGVtLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkICRtZW51SXRlbSwgJF9tZW51SXRlbVxuXG4gICAgZG8gKCRtZW51SXRlbSkgLT5cbiAgICAgICMgVE9ETzogSXMgdGhlcmUgYSB3YXkgd2UgY291bGQgbm90IGhhdmUgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGV2ZXJ5XG4gICAgICAjIHNpbmdsZSBvbmU/XG4gICAgICAkbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cblxuICAgICAgICAjIEp1c3QgY2xvc2UgaXQgaWYgaXQncyBhbHJlYWR5IG9wZW5cbiAgICAgICAgaWYgJG1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucyAnb3BlbidcbiAgICAgICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSAnb3BlbidcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICAjIFJlc2V0IGFsbFxuICAgICAgICBfJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciBfJG1lbnVJdGVtIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aXRoLXN1Ym1lbnUnKVxuICAgICAgICAkdWwgPSAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvciAndWwnXG5cbiAgICAgICAgIyBPcGVuIHRoaXMgb25lXG4gICAgICAgIGlmICR1bFxuICAgICAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QuYWRkICdvcGVuJ1xuXG4gICAgICAgICMgUHJldmVudCBidWJibGluZ1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgIyBEaXNtaXNzIGFsbFxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAkdWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgJHVsIGluIGskLiQkKCcud2l0aC1zdWJtZW51ID4gdWwnKVxuICAgICRsaS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgJGxpIGluIGskLiQkKCcud2l0aC1zdWJtZW51Lm9wZW4nKVxuXG5rJC5kcm9wZG93biA9IGRyb3Bkb3duXG5cbm1vZHVsZS5leHBvcnRzID0gZHJvcGRvd25cbiIsImdyb3dsID0gKHBhcmFtcykgLT5cblxuICAjIENyZWF0ZSBncm93bCBjb250YWluZXJcbiAgaWYgbm90IGskLiQkKCcuZ3Jvd2xfY29udGFpbmVyJykubGVuZ3RoXG4gICAgZ3Jvd2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG4gICAgZ3Jvd2xDb250YWluZXIuY2xhc3NOYW1lID0gJ2dyb3dsX2NvbnRhaW5lcidcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIGdyb3dsQ29udGFpbmVyXG5cbiAgZ3Jvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG4gIGdyb3dsLmNsYXNzTmFtZSA9IFwiYWxlcnQgZ3Jvd2wgI3twYXJhbXMudHlwZX1cIlxuICBjb250ZW50ID0gXCJcIlxuICBjb250ZW50ICs9IFwiPGgxPiN7cGFyYW1zLnRpdGxlfTwvaDE+XCIgaWYgcGFyYW1zLnRpdGxlXG4gIGNvbnRlbnQgKz0gXCI8cD4je3BhcmFtcy50ZXh0fTwvcD5cIiBpZiBwYXJhbXMudGV4dFxuICBncm93bC5pbm5lckhUTUwgPSBjb250ZW50XG4gIGskLiQoJy5ncm93bF9jb250YWluZXInKS5hcHBlbmRDaGlsZCBncm93bFxuXG5cbmskLmdyb3dsID0gZ3Jvd2xcblxubW9kdWxlLmV4cG9ydHMgPSBncm93bFxuIiwiZ2xvYmFsLmskID0gbmV3IE9iamVjdCgpXG5cbmskLiQkID0gKGVsKSAtPiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIGVsXG5rJC4kID0gKGVsKSAtPiBrJC4kJChlbClbMF1cbmskLmRlYm91bmNlVGltZXIgPSBmYWxzZVxuayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbmskLmV4dGVuZCA9IChkZXN0aW5hdGlvbiwgc291cmNlKSAtPlxuICBmb3IgcHJvcGVydHkgb2Ygc291cmNlXG4gICAgaWYgc291cmNlW3Byb3BlcnR5XSBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBpcyBPYmplY3RcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSBvciB7fVxuICAgICAgYXJndW1lbnRzLmNhbGxlZSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV1cbiAgICBlbHNlXG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldXG4gIGRlc3RpbmF0aW9uXG5cbm1vZHVsZS5leHBvcnRzID0gayRcbiIsIm1vZGFsID0gKGVsKSAtPlxuXG4gIGRvIChlbCkgLT5cblxuICAgICMgQWxsb3cgbW9kYWwgdG8gZGlzbWlzcyB3aGVuIGNsaWNrZWQgb3V0c2lkZVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgayQuJChlbCkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgayQuJChlbCkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cbiAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgayQuJCBlbFxuXG5rJC5tb2RhbCA9IG1vZGFsXG5cbm1vZHVsZS5leHBvcnRzID0gbW9kYWxcbiIsIm5hdiA9IChlbCkgLT5cblxuICB0cnlcbiAgICAkbWVudUl0ZW1zID0gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgPiBsaScpXG4gICAgIyBQcnVuZSBpdGVtcyB0aGF0IGRvbid0IGNvbnRhaW4gdWxzXG4gICAgXyRtZW51SXRlbXMgPSBuZXcgQXJyYXkoKVxuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuICAgICAgaWYgJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJykubGVuZ3RoIGFuZCAhJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwiYnV0dG9uXCJdJykubGVuZ3RoXG4gICAgICAgIF8kbWVudUl0ZW1zLnB1c2ggJG1lbnVJdGVtIFxuXG4gICAgJG1lbnVJdGVtcyA9IF8kbWVudUl0ZW1zXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG5cbiAgICAgICMgRm9yIHN0eWxpbmdcbiAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QuYWRkICd3aXRoLXN1Ym1lbnUnXG5cbiAgICAjIFdpcmUgdXAgdGhlIG1lbnVcbiAgICBrJC5kcm9wZG93bigpXG5cbiAgY2F0Y2ggZVxuICAgIGNvbnNvbGUuZXJyb3IgXCJDb3VsZCBub3QgaW5zdGFudGlhdGUgYXMgYSBuYXYuXCIsIGUubWVzc2FnZVxuXG4gIGskLiQgZWxcblxuXG5rJC5uYXYgPSBuYXZcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZcbiIsInN0YXR1cyA9IChvcHRzKSAtPlxuXG4gIGRlZmF1bHRzID1cbiAgICB0eXBlOiAnd2FybidcbiAgICBkZWxheTogMjAwMFxuXG4gIHN0YXR1cyA9IGskLmV4dGVuZCBkZWZhdWx0cywgb3B0c1xuXG4gIGlmIG5vdCBrJC4kJCgnI3N0YXR1cy1iYXInKS5sZW5ndGhcbiAgICAkc3RhdHVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkc3RhdHVzQmFyLmlkID0gJ3N0YXR1cy1iYXInXG4gICAgJHN0YXR1c0Jhci5jbGFzc05hbWUgPSAnc3RhdHVzLWJhcidcbiAgICAkc3RhdHVzQmFyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzLWJhcl9zdGF0dXMnIGlkPSdzdGF0dXMtYmFyX3N0YXR1cyc+PC9kaXY+XCJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRzdGF0dXNCYXIpXG5cbiAgJHN0YXR1c0JhciA9IGskLiQoJyNzdGF0dXMtYmFyJylcblxuICBoaWRlU3RhdHVzQmFyID0gLT5cbiAgICAkc3RhdHVzQmFyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQgJHN0YXR1c0JhclxuXG4gIGlmIHN0YXR1cy5kZWxheSA+IDBcbiAgICBrJC5kZWJvdW5jZSBoaWRlU3RhdHVzQmFyLCAnaGlkZVN0YXR1c0JhcicsIHN0YXR1cy5kZWxheVxuXG4gICRzdGF0dXMgPSBrJC4kKFwiI3N0YXR1cy1iYXJfc3RhdHVzXCIpXG4gICRzdGF0dXMuaW5uZXJIVE1MID0gc3RhdHVzLnRleHRcbiAgJHN0YXR1cy5kYXRhc2V0LnR5cGUgPSBzdGF0dXMudHlwZSB8fCAnd2FybidcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0aHJvdHRsZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gIFxuXG5rJC50aHJvdHRsZSA9IHRocm90dGxlXG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGVcbiJdfQ==
