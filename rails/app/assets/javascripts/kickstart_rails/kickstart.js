(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Buttons, Debounce, Dropdown, KS, Modal, Nav, Status, Throttler;

KS = require('./ks');

Modal = require('./modal');

Nav = require('./nav');

Debounce = require('./debouncer');

Status = require('./status');

Throttler = require('./throttler');

Buttons = require('./buttons');

Dropdown = require('./dropdown');

k$.button();

k$.dropdown();



},{"./buttons":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buttons.coffee","./debouncer":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/dropdown.coffee","./ks":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/modal.coffee","./nav":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/nav.coffee","./status":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/status.coffee","./throttler":"/Users/adamkochanowicz/sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/buttons.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/nav.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/status.coffee":[function(require,module,exports){
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



},{}],"/Users/adamkochanowicz/sites/kickstart/lib/coffee/throttler.coffee":[function(require,module,exports){
var throttle;

throttle = function(fn, id, delay) {};

k$.throttle = throttle;

module.exports = throttle;



},{}]},{},["./lib/coffee/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2tzLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUvbW9kYWwuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9uYXYuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9zdGF0dXMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90aHJvdHRsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSw4REFBQTs7QUFBQSxFQUFBLEdBQVksT0FBQSxDQUFRLE1BQVIsQ0FBWixDQUFBOztBQUFBLEtBQ0EsR0FBWSxPQUFBLENBQVEsU0FBUixDQURaLENBQUE7O0FBQUEsR0FFQSxHQUFZLE9BQUEsQ0FBUSxPQUFSLENBRlosQ0FBQTs7QUFBQSxRQUdBLEdB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QTtBQUFBLEVBcUJBLE9BQUEsR0FBVSxFQUFFLENBQUMsQ0FBSCxDQUFLLG9CQUFMLENBckJWLENBQUE7QUFBQSxFQXNCQSxPQUFPLENBQUMsU0FBUixHQUFvQixNQUFNLENBQUMsSUF0QjNCLENBQUE7U0F1QkEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFoQixHQUF1QixNQUFNLENBQUMsSUFBUCxJQUFlLE9BekIvQjtBQUFBLENBQVQsQ0FBQTs7QUFBQSxFQTJCRSxDQUFDLE1BQUgsR0FBWSxNQTNCWixDQUFBOztBQUFBLE1BNkJNLENBQUMsT0FBUCxHQUFpQixNQTdCakIsQ0FBQTs7Ozs7QUNBQSxJQUFBLFFBQUE7O0FBQUEsUUFBQSxHQUFXLFNBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxLQUFULEdBQUEsQ0FBWCxDQUFBOztBQUFBLEVBSUUsQ0FBQyxRQUFILEdBQWMsUUFKZCxDQUFBOztBQUFBLE1BTU0sQ0FBQyxPQUFQLEdBQWlCLFFBTmpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiS1MgICAgICAgID0gcmVxdWlyZSAnLi9rcydcbk1vZGFsICAgICA9IHJlcXVpcmUgJy4vbW9kYWwnXG5OYXYgICAgICAgPSByZXF1aXJlICcuL25hdidcbkRlYm91bmNlICA9IHJlcXVpcmUgJy4vZGVib3VuY2VyJ1xuU3RhdHVzICAgID0gcmVxdWlyZSAnLi9zdGF0dXMnXG5UaHJvdHRsZXIgPSByZXF1aXJlICcuL3Rocm90dGxlcidcbkJ1dHRvbnMgICA9IHJlcXVpcmUgJy4vYnV0dG9ucydcbkRyb3Bkb3duICA9IHJlcXVpcmUgJy4vZHJvcGRvd24nXG5cbmskLmJ1dHRvbigpXG5rJC5kcm9wZG93bigpXG4iLCJidXR0b24gPSAtPlxuXG4gICgkYnV0dG9uLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudScgaWYgJGJ1dHRvbi5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmxlbmd0aCkgZm9yICRidXR0b24gaW4gayQuJCQoXCJidXR0b25cIilcbiAgJGJ1dHRvbkRyb3Bkb3duLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51JyBmb3IgJGJ1dHRvbkRyb3Bkb3duIGluIGskLiQkICcuYnV0dG9uLWRyb3Bkb3duJ1xuXG5rJC5idXR0b24gPSBidXR0b25cblxubW9kdWxlLmV4cG9ydHMgPSBidXR0b25cbiIsImRlYm91bmNlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgJGRlbGF5ID0gZGVsYXkgfHwgMTAwMFxuXG4gIGskLmRlYm91bmNlUXVldWUgPSBpZCBpZiBrJC5kZWJvdW5jZVF1ZXVlID09IG51bGxcbiAgY2xlYXJUaW1lb3V0IGskLmRlYm91bmNlVGltZXIgaWYgaWQgPT0gayQuZGVib3VuY2VRdWV1ZVxuICBrJC5kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCAtPlxuICAgIGZuKClcbiAgICBrJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuICAsICRkZWxheVxuXG5rJC5kZWJvdW5jZSA9IGRlYm91bmNlXG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2VcbiIsImRyb3Bkb3duID0gLT5cblxuICAjIFRoZSBmb2xsb3dpbmcgc2hvdWxkIGFwcGx5IHRvIGJvdGggbmF2aWdhdGlvbiBlbGVtZW50cyBhbmQgZHJvcGRvd24gYnV0dG9uc1xuXG4gICRtZW51SXRlbXMgPSBrJC4kJCAnLndpdGgtc3VibWVudSdcblxuICBmb3IgJF9tZW51SXRlbSBpbiAkbWVudUl0ZW1zXG5cbiAgICAkbWVudUl0ZW0gPSAkX21lbnVJdGVtLmNsb25lTm9kZSB0cnVlXG4gICAgJF9tZW51SXRlbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbWVudUl0ZW0sICRfbWVudUl0ZW1cblxuICAgIGRvICgkbWVudUl0ZW0pIC0+XG4gICAgICAjIFRPRE86IElzIHRoZXJlIGEgd2F5IHdlIGNvdWxkIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeVxuICAgICAgIyBzaW5nbGUgb25lP1xuICAgICAgJG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG5cbiAgICAgICAgIyBKdXN0IGNsb3NlIGl0IGlmIGl0J3MgYWxyZWFkeSBvcGVuXG4gICAgICAgIGlmICRtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMgJ29wZW4nXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51JylcbiAgICAgICAgJHVsID0gJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IgJ3VsJ1xuXG4gICAgICAgICMgT3BlbiB0aGlzIG9uZVxuICAgICAgICBpZiAkdWxcbiAgICAgICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnb3BlbidcblxuICAgICAgICAjIFByZXZlbnQgYnViYmxpbmdcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICMgRGlzbWlzcyBhbGxcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgJHVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICR1bCBpbiBrJC4kJCgnLndpdGgtc3VibWVudSA+IHVsJylcbiAgICAkbGkuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRsaSBpbiBrJC4kJCgnLndpdGgtc3VibWVudS5vcGVuJylcblxuayQuZHJvcGRvd24gPSBkcm9wZG93blxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3Bkb3duXG4iLCJnbG9iYWwuayQgPSBuZXcgT2JqZWN0KClcblxuayQuJCQgPSAoZWwpIC0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgZWxcbmskLiQgPSAoZWwpIC0+IGskLiQkKGVsKVswXVxuayQuZGVib3VuY2VUaW1lciA9IGZhbHNlXG5rJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuayQuZXh0ZW5kID0gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIC0+XG4gIGZvciBwcm9wZXJ0eSBvZiBzb3VyY2VcbiAgICBpZiBzb3VyY2VbcHJvcGVydHldIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGlzIE9iamVjdFxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIG9yIHt9XG4gICAgICBhcmd1bWVudHMuY2FsbGVlIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XVxuICAgIGVsc2VcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV1cbiAgZGVzdGluYXRpb25cblxubW9kdWxlLmV4cG9ydHMgPSBrJFxuIiwibW9kYWwgPSAoZWwpIC0+XG5cbiAgZG8gKGVsKSAtPlxuXG4gICAgIyBBbGxvdyBtb2RhbCB0byBkaXNtaXNzIHdoZW4gY2xpY2tlZCBvdXRzaWRlXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICBrJC4kKGVsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBrJC4kKGVsKS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuICAgICAgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICBrJC4kIGVsXG5cbmskLm1vZGFsID0gbW9kYWxcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbFxuIiwibmF2ID0gKGVsKSAtPlxuXG4gIHRyeVxuICAgICRtZW51SXRlbXMgPSBrJC4kKGVsKS5xdWVyeVNlbGVjdG9yQWxsKCd1bCA+IGxpJylcbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW0gXG5cbiAgICAkbWVudUl0ZW1zID0gXyRtZW51SXRlbXNcbiAgICBmb3IgJG1lbnVJdGVtIGluICRtZW51SXRlbXNcblxuICAgICAgIyBGb3Igc3R5bGluZ1xuICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudSdcblxuICAgICMgV2lyZSB1cCB0aGUgbWVudVxuICAgIGskLmRyb3Bkb3duKClcblxuICBjYXRjaCBlXG4gICAgY29uc29sZS5lcnJvciBcIkNvdWxkIG5vdCBpbnN0YW50aWF0ZSBhcyBhIG5hdi5cIiwgZS5tZXNzYWdlXG5cbiAgayQuJCBlbFxuXG5cbmskLm5hdiA9IG5hdlxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdlxuIiwic3RhdHVzID0gKG9wdHMpIC0+XG5cbiAgZGVmYXVsdHMgPVxuICAgIHR5cGU6ICd3YXJuJ1xuICAgIGRlbGF5OiAyMDAwXG5cbiAgc3RhdHVzID0gayQuZXh0ZW5kIGRlZmF1bHRzLCBvcHRzXG5cbiAgaWYgbm90IGskLiQkKCcjc3RhdHVzLWJhcicpLmxlbmd0aFxuICAgICRzdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRzdGF0dXNCYXIuaWQgPSAnc3RhdHVzLWJhcidcbiAgICAkc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdzdGF0dXMtYmFyJ1xuICAgICRzdGF0dXNCYXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXMtYmFyX3N0YXR1cycgaWQ9J3N0YXR1cy1iYXJfc3RhdHVzJz48L2Rpdj5cIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHN0YXR1c0JhcilcblxuICAkc3RhdHVzQmFyID0gayQuJCgnI3N0YXR1cy1iYXInKVxuXG4gIGhpZGVTdGF0dXNCYXIgPSAtPlxuICAgICRzdGF0dXNCYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCAkc3RhdHVzQmFyXG5cbiAgaWYgc3RhdHVzLmRlbGF5ID4gMFxuICAgIGskLmRlYm91bmNlIGhpZGVTdGF0dXNCYXIsICdoaWRlU3RhdHVzQmFyJywgc3RhdHVzLmRlbGF5XG5cbiAgJHN0YXR1cyA9IGskLiQoXCIjc3RhdHVzLWJhcl9zdGF0dXNcIilcbiAgJHN0YXR1cy5pbm5lckhUTUwgPSBzdGF0dXMudGV4dFxuICAkc3RhdHVzLmRhdGFzZXQudHlwZSA9IHN0YXR1cy50eXBlIHx8ICd3YXJuJ1xuXG5rJC5zdGF0dXMgPSBzdGF0dXNcblxubW9kdWxlLmV4cG9ydHMgPSBzdGF0dXNcbiIsInRocm90dGxlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
