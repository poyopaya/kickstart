(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Buffer, Buttons, Debounce, Dropdown, KS, Modal, Nav, Status, Throttler;

KS = require('./ks');

Modal = require('./modal');

Nav = require('./nav');

Debounce = require('./debouncer');

Status = require('./status');

Throttler = require('./throttler');

Buttons = require('./buttons');

Dropdown = require('./dropdown');

Buffer = require('./buffer');

k$.button();

k$.dropdown();



},{"./buffer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee","./buttons":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buttons.coffee","./debouncer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/dropdown.coffee","./ks":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee","./nav":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/nav.coffee","./status":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee","./throttler":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/buffer.coffee":[function(require,module,exports){
var buffer;

buffer = function(fn, delay) {
  var i;
  k$.bufferArray = k$.bufferArray || new Array();
  if (!k$.bufferArray.length) {
    k$.bufferArray = new Array();
    delay = delay || 2000;
    i = 0;
    k$.bufferInterval = setInterval(function() {
      k$.bufferArray[i]();
      i++;
      if (i > k$.bufferArray.length) {
        clearInterval(k$.bufferInterval);
        k$.bufferArray = [];
        return i = 0;
      }
    }, delay);
  }
  return k$.bufferArray.push(fn);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2tzLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUvbW9kYWwuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9uYXYuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9zdGF0dXMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90aHJvdHRsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxzRUFBQTs7QUFBQSxFQUFBLEdBQVksT0FBQSxDQUFRLE1BQVIsQ0FBWixDQUFBOztBQUFBLEtBQ0EsR0FBWSxPQUFBLENBQVEsU0FB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QSxDQURGO0dBbEJBO0FBQUEsRUFxQkEsT0FBQSxHQUFVLEVBQUUsQ0FBQyxDQUFILENBQUssb0JBQUwsQ0FyQlYsQ0FBQTtBQUFBLEVBc0JBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLE1BQU0sQ0FBQyxJQXRCM0IsQ0FBQTtTQXVCQSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQWhCLEdBQXVCLE1BQU0sQ0FBQyxJQUFQLElBQWUsT0F6Qi9CO0FBQUEsQ0FBVCxDQUFBOztBQUFBLEVBMkJFLENBQUMsTUFBSCxHQUFZLE1BM0JaLENBQUE7O0FBQUEsTUE2Qk0sQ0FBQyxPQUFQLEdBQWlCLE1BN0JqQixDQUFBOzs7OztBQ0FBLElBQUEsUUFBQTs7QUFBQSxRQUFBLEdBQVcsU0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEtBQVQsR0FBQSxDQUFYLENBQUE7O0FBQUEsRUFJRSxDQUFDLFFBQUgsR0FBYyxRQUpkLENBQUE7O0FBQUEsTUFNTSxDQUFDLE9BQVAsR0FBaUIsUUFOakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJLUyAgICAgICAgPSByZXF1aXJlICcuL2tzJ1xuTW9kYWwgICAgID0gcmVxdWlyZSAnLi9tb2RhbCdcbk5hdiAgICAgICA9IHJlcXVpcmUgJy4vbmF2J1xuRGVib3VuY2UgID0gcmVxdWlyZSAnLi9kZWJvdW5jZXInXG5TdGF0dXMgICAgPSByZXF1aXJlICcuL3N0YXR1cydcblRocm90dGxlciA9IHJlcXVpcmUgJy4vdGhyb3R0bGVyJ1xuQnV0dG9ucyAgID0gcmVxdWlyZSAnLi9idXR0b25zJ1xuRHJvcGRvd24gID0gcmVxdWlyZSAnLi9kcm9wZG93bidcbkJ1ZmZlciAgICA9IHJlcXVpcmUgJy4vYnVmZmVyJ1xuXG5rJC5idXR0b24oKVxuayQuZHJvcGRvd24oKVxuIiwiYnVmZmVyID0gKGZuLCBkZWxheSkgLT5cblxuICAjIENyZWF0ZSBhIG5ldyBidWZmZXJBcnJheSBpZiBvbmUgZG9lcyBub3QgZXhpc3QgYWxyZWFkeS5cbiAgayQuYnVmZmVyQXJyYXkgPSBrJC5idWZmZXJBcnJheSB8fCBuZXcgQXJyYXkoKVxuICBpZiBub3QgayQuYnVmZmVyQXJyYXkubGVuZ3RoXG4gICAgayQuYnVmZmVyQXJyYXkgPSBuZXcgQXJyYXkoKVxuXG4gICAgZGVsYXkgPSBkZWxheSB8fCAyMDAwXG5cbiAgICAjIENyZWF0ZSBhbiBpbnRlcnZhbCB0byBmaXJlIHRoZSBmbnMgaW4gYnVmZmVyQXJyYXlcbiAgICBpID0gMFxuICAgIGskLmJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwgLT5cbiAgICAgIGskLmJ1ZmZlckFycmF5W2ldKClcbiAgICAgIGkrK1xuICAgICAgaWYgaSA+IGskLmJ1ZmZlckFycmF5Lmxlbmd0aFxuICAgICAgICBjbGVhckludGVydmFsIGskLmJ1ZmZlckludGVydmFsXG4gICAgICAgIGskLmJ1ZmZlckFycmF5ID0gW11cbiAgICAgICAgaSA9IDBcbiAgICAsIGRlbGF5XG5cbiAgIyBBZGQgdGhpcyBmdW5jdGlvbiB0byB0aGUgYXJyYXkuXG4gIGskLmJ1ZmZlckFycmF5LnB1c2ggZm5cblxuayQuYnVmZmVyID0gYnVmZmVyXG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG4iLCJidXR0b24gPSAtPlxuXG4gICgkYnV0dG9uLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudScgaWYgJGJ1dHRvbi5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmxlbmd0aCkgZm9yICRidXR0b24gaW4gayQuJCQoXCJidXR0b25cIilcbiAgJGJ1dHRvbkRyb3Bkb3duLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51JyBmb3IgJGJ1dHRvbkRyb3Bkb3duIGluIGskLiQkICcuYnV0dG9uLWRyb3Bkb3duJ1xuXG5rJC5idXR0b24gPSBidXR0b25cblxubW9kdWxlLmV4cG9ydHMgPSBidXR0b25cbiIsImRlYm91bmNlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgJGRlbGF5ID0gZGVsYXkgfHwgMTAwMFxuXG4gIGskLmRlYm91bmNlUXVldWUgPSBpZCBpZiBrJC5kZWJvdW5jZVF1ZXVlID09IG51bGxcbiAgY2xlYXJUaW1lb3V0IGskLmRlYm91bmNlVGltZXIgaWYgaWQgPT0gayQuZGVib3VuY2VRdWV1ZVxuICBrJC5kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCAtPlxuICAgIGZuKClcbiAgICBrJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuICAsICRkZWxheVxuXG5rJC5kZWJvdW5jZSA9IGRlYm91bmNlXG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2VcbiIsImRyb3Bkb3duID0gLT5cblxuICAjIFRoZSBmb2xsb3dpbmcgc2hvdWxkIGFwcGx5IHRvIGJvdGggbmF2aWdhdGlvbiBlbGVtZW50cyBhbmQgZHJvcGRvd24gYnV0dG9uc1xuXG4gICRtZW51SXRlbXMgPSBrJC4kJCAnLndpdGgtc3VibWVudSdcblxuICBmb3IgJF9tZW51SXRlbSBpbiAkbWVudUl0ZW1zXG5cbiAgICAkbWVudUl0ZW0gPSAkX21lbnVJdGVtLmNsb25lTm9kZSB0cnVlXG4gICAgJF9tZW51SXRlbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbWVudUl0ZW0sICRfbWVudUl0ZW1cblxuICAgIGRvICgkbWVudUl0ZW0pIC0+XG4gICAgICAjIFRPRE86IElzIHRoZXJlIGEgd2F5IHdlIGNvdWxkIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeVxuICAgICAgIyBzaW5nbGUgb25lP1xuICAgICAgJG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG5cbiAgICAgICAgIyBKdXN0IGNsb3NlIGl0IGlmIGl0J3MgYWxyZWFkeSBvcGVuXG4gICAgICAgIGlmICRtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMgJ29wZW4nXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51JylcbiAgICAgICAgJHVsID0gJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IgJ3VsJ1xuXG4gICAgICAgICMgT3BlbiB0aGlzIG9uZVxuICAgICAgICBpZiAkdWxcbiAgICAgICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnb3BlbidcblxuICAgICAgICAjIFByZXZlbnQgYnViYmxpbmdcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICMgRGlzbWlzcyBhbGxcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgJHVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICR1bCBpbiBrJC4kJCgnLndpdGgtc3VibWVudSA+IHVsJylcbiAgICAkbGkuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRsaSBpbiBrJC4kJCgnLndpdGgtc3VibWVudS5vcGVuJylcblxuayQuZHJvcGRvd24gPSBkcm9wZG93blxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3Bkb3duXG4iLCJnbG9iYWwuayQgPSBuZXcgT2JqZWN0KClcblxuayQuJCQgPSAoZWwpIC0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgZWxcbmskLiQgPSAoZWwpIC0+IGskLiQkKGVsKVswXVxuayQuZGVib3VuY2VUaW1lciA9IGZhbHNlXG5rJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuayQuZXh0ZW5kID0gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIC0+XG4gIGZvciBwcm9wZXJ0eSBvZiBzb3VyY2VcbiAgICBpZiBzb3VyY2VbcHJvcGVydHldIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGlzIE9iamVjdFxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIG9yIHt9XG4gICAgICBhcmd1bWVudHMuY2FsbGVlIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XVxuICAgIGVsc2VcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV1cbiAgZGVzdGluYXRpb25cblxubW9kdWxlLmV4cG9ydHMgPSBrJFxuIiwibW9kYWwgPSAoZWwpIC0+XG5cbiAgZG8gKGVsKSAtPlxuXG4gICAgIyBBbGxvdyBtb2RhbCB0byBkaXNtaXNzIHdoZW4gY2xpY2tlZCBvdXRzaWRlXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICBrJC4kKGVsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBrJC4kKGVsKS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuICAgICAgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICBrJC4kIGVsXG5cbmskLm1vZGFsID0gbW9kYWxcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbFxuIiwibmF2ID0gKGVsKSAtPlxuXG4gIHRyeVxuICAgICRtZW51SXRlbXMgPSBrJC4kKGVsKS5xdWVyeVNlbGVjdG9yQWxsKCd1bCA+IGxpJylcbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW0gXG5cbiAgICAkbWVudUl0ZW1zID0gXyRtZW51SXRlbXNcbiAgICBmb3IgJG1lbnVJdGVtIGluICRtZW51SXRlbXNcblxuICAgICAgIyBGb3Igc3R5bGluZ1xuICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudSdcblxuICAgICMgV2lyZSB1cCB0aGUgbWVudVxuICAgIGskLmRyb3Bkb3duKClcblxuICBjYXRjaCBlXG4gICAgY29uc29sZS5lcnJvciBcIkNvdWxkIG5vdCBpbnN0YW50aWF0ZSBhcyBhIG5hdi5cIiwgZS5tZXNzYWdlXG5cbiAgayQuJCBlbFxuXG5cbmskLm5hdiA9IG5hdlxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdlxuIiwic3RhdHVzID0gKG9wdHMpIC0+XG5cbiAgZGVmYXVsdHMgPVxuICAgIHR5cGU6ICd3YXJuJ1xuICAgIGRlbGF5OiAyMDAwXG5cbiAgc3RhdHVzID0gayQuZXh0ZW5kIGRlZmF1bHRzLCBvcHRzXG5cbiAgaWYgbm90IGskLiQkKCcjc3RhdHVzLWJhcicpLmxlbmd0aFxuICAgICRzdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRzdGF0dXNCYXIuaWQgPSAnc3RhdHVzLWJhcidcbiAgICAkc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdzdGF0dXMtYmFyJ1xuICAgICRzdGF0dXNCYXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXMtYmFyX3N0YXR1cycgaWQ9J3N0YXR1cy1iYXJfc3RhdHVzJz48L2Rpdj5cIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHN0YXR1c0JhcilcblxuICAkc3RhdHVzQmFyID0gayQuJCgnI3N0YXR1cy1iYXInKVxuXG4gIGhpZGVTdGF0dXNCYXIgPSAtPlxuICAgICRzdGF0dXNCYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCAkc3RhdHVzQmFyXG5cbiAgaWYgc3RhdHVzLmRlbGF5ID4gMFxuICAgIGskLmRlYm91bmNlIGhpZGVTdGF0dXNCYXIsICdoaWRlU3RhdHVzQmFyJywgc3RhdHVzLmRlbGF5XG5cbiAgJHN0YXR1cyA9IGskLiQoXCIjc3RhdHVzLWJhcl9zdGF0dXNcIilcbiAgJHN0YXR1cy5pbm5lckhUTUwgPSBzdGF0dXMudGV4dFxuICAkc3RhdHVzLmRhdGFzZXQudHlwZSA9IHN0YXR1cy50eXBlIHx8ICd3YXJuJ1xuXG5rJC5zdGF0dXMgPSBzdGF0dXNcblxubW9kdWxlLmV4cG9ydHMgPSBzdGF0dXNcbiIsInRocm90dGxlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
