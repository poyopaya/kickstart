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



},{}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee":[function(require,module,exports){
var throttle;

throttle = function(fn, id, delay) {};

k$.throttle = throttle;

module.exports = throttle;



},{}]},{},["./lib/coffee/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1ZmZlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2dyb3dsLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3Rocm90dGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLDZFQUFBOztBQUFB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QUEsRUEyQkUsQ0FBQyxNQUFILEdBQVksTUEzQlosQ0FBQTs7QUFBQSxNQTZCTSxDQUFDLE9BQVAsR0FBaUIsTUE3QmpCLENBQUE7Ozs7O0FDQUEsSUFBQSxRQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxHQUFBLENBQVgsQ0FBQTs7QUFBQSxFQUlFLENBQUMsUUFBSCxHQUFjLFFBSmQsQ0FBQTs7QUFBQSxNQU1NLENBQUMsT0FBUCxHQUFpQixRQU5qQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIktTICAgICAgICA9IHJlcXVpcmUgJy4va3MnXG5Nb2RhbCAgICAgPSByZXF1aXJlICcuL21vZGFsJ1xuTmF2ICAgICAgID0gcmVxdWlyZSAnLi9uYXYnXG5EZWJvdW5jZSAgPSByZXF1aXJlICcuL2RlYm91bmNlcidcblN0YXR1cyAgICA9IHJlcXVpcmUgJy4vc3RhdHVzJ1xuVGhyb3R0bGVyID0gcmVxdWlyZSAnLi90aHJvdHRsZXInXG5CdXR0b25zICAgPSByZXF1aXJlICcuL2J1dHRvbnMnXG5Ecm9wZG93biAgPSByZXF1aXJlICcuL2Ryb3Bkb3duJ1xuQnVmZmVyICAgID0gcmVxdWlyZSAnLi9idWZmZXInXG5Hcm93bCAgICAgPSByZXF1aXJlICcuL2dyb3dsJ1xuXG5rJC5idXR0b24oKVxuayQuZHJvcGRvd24oKVxuIiwiYnVmZmVyID0gKGZuLCBkZWxheSkgLT5cblxuICAjIENyZWF0ZSBhIG5ldyBidWZmZXJBcnJheSBpZiBvbmUgZG9lcyBub3QgZXhpc3QgYWxyZWFkeS5cbiAgayQuYnVmZmVyQXJyYXkgPSBrJC5idWZmZXJBcnJheSB8fCBuZXcgQXJyYXkoKVxuICBpZiBub3QgayQuYnVmZmVyQXJyYXkubGVuZ3RoXG4gICAgayQuYnVmZmVyQXJyYXkgPSBuZXcgQXJyYXkoKVxuXG4gICAgZGVsYXkgPSBkZWxheSB8fCA1MDBcblxuICAgICMgQ3JlYXRlIGFuIGludGVydmFsIHRvIGZpcmUgdGhlIGZucyBpbiBidWZmZXJBcnJheVxuICAgIGkgPSAxXG5cbiAgICBrJC5idWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsIC0+XG4gICAgICBrJC5idWZmZXJBcnJheVtpXSgpIGlmIGskLmJ1ZmZlckFycmF5W2ldXG4gICAgICBpKytcbiAgICAgIGNvbnNvbGUubG9nIGlcbiAgICAgIGlmIGkgPj0gayQuYnVmZmVyQXJyYXkubGVuZ3RoXG4gICAgICAgIGNsZWFySW50ZXJ2YWwgayQuYnVmZmVySW50ZXJ2YWxcbiAgICAgICAgayQuYnVmZmVyQXJyYXkgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IDFcbiAgICAsIGRlbGF5XG5cbiAgIyBBZGQgdGhpcyBmdW5jdGlvbiB0byB0aGUgYXJyYXkuXG4gIGskLmJ1ZmZlckFycmF5LnB1c2ggZm5cblxuICAjIEZpcmUgcmlnaHQgYXdheSBpZiBpdCdzIHRoZSBmaXJzdCBpbiBsaW5lLlxuICBrJC5idWZmZXJBcnJheVswXSgpIGlmIGskLmJ1ZmZlckFycmF5Lmxlbmd0aCA9PSAxXG5cbiAgY29uc29sZS5pbmZvIFwiRnVuY3Rpb24gcXVldWVkICgje2skLmJ1ZmZlckFycmF5Lmxlbmd0aH0gaW4gcXVldWUpXCJcblxuayQuYnVmZmVyID0gYnVmZmVyXG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG4iLCJidXR0b24gPSAtPlxuXG4gICgkYnV0dG9uLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudScgaWYgJGJ1dHRvbi5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmxlbmd0aCkgZm9yICRidXR0b24gaW4gayQuJCQoXCJidXR0b25cIilcbiAgJGJ1dHRvbkRyb3Bkb3duLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51JyBmb3IgJGJ1dHRvbkRyb3Bkb3duIGluIGskLiQkICcuYnV0dG9uLWRyb3Bkb3duJ1xuXG5rJC5idXR0b24gPSBidXR0b25cblxubW9kdWxlLmV4cG9ydHMgPSBidXR0b25cbiIsImRlYm91bmNlID0gKGZuLCBpZCwgZGVsYXkpIC0+XG5cbiAgJGRlbGF5ID0gZGVsYXkgfHwgMTAwMFxuXG4gIGskLmRlYm91bmNlUXVldWUgPSBpZCBpZiBrJC5kZWJvdW5jZVF1ZXVlID09IG51bGxcbiAgY2xlYXJUaW1lb3V0IGskLmRlYm91bmNlVGltZXIgaWYgaWQgPT0gayQuZGVib3VuY2VRdWV1ZVxuICBrJC5kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCAtPlxuICAgIGZuKClcbiAgICBrJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuICAsICRkZWxheVxuXG5rJC5kZWJvdW5jZSA9IGRlYm91bmNlXG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2VcbiIsImRyb3Bkb3duID0gLT5cblxuICAjIFRoZSBmb2xsb3dpbmcgc2hvdWxkIGFwcGx5IHRvIGJvdGggbmF2aWdhdGlvbiBlbGVtZW50cyBhbmQgZHJvcGRvd24gYnV0dG9uc1xuXG4gICRtZW51SXRlbXMgPSBrJC4kJCAnLndpdGgtc3VibWVudSdcblxuICBmb3IgJF9tZW51SXRlbSBpbiAkbWVudUl0ZW1zXG5cbiAgICAkbWVudUl0ZW0gPSAkX21lbnVJdGVtLmNsb25lTm9kZSB0cnVlXG4gICAgJF9tZW51SXRlbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCAkbWVudUl0ZW0sICRfbWVudUl0ZW1cblxuICAgIGRvICgkbWVudUl0ZW0pIC0+XG4gICAgICAjIFRPRE86IElzIHRoZXJlIGEgd2F5IHdlIGNvdWxkIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeVxuICAgICAgIyBzaW5nbGUgb25lP1xuICAgICAgJG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG5cbiAgICAgICAgIyBKdXN0IGNsb3NlIGl0IGlmIGl0J3MgYWxyZWFkeSBvcGVuXG4gICAgICAgIGlmICRtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMgJ29wZW4nXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51JylcbiAgICAgICAgJHVsID0gJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IgJ3VsJ1xuXG4gICAgICAgICMgT3BlbiB0aGlzIG9uZVxuICAgICAgICBpZiAkdWxcbiAgICAgICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnb3BlbidcblxuICAgICAgICAjIFByZXZlbnQgYnViYmxpbmdcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICMgRGlzbWlzcyBhbGxcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgJHVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICR1bCBpbiBrJC4kJCgnLndpdGgtc3VibWVudSA+IHVsJylcbiAgICAkbGkuY2xhc3NMaXN0LnJlbW92ZSAnb3BlbicgZm9yICRsaSBpbiBrJC4kJCgnLndpdGgtc3VibWVudS5vcGVuJylcblxuayQuZHJvcGRvd24gPSBkcm9wZG93blxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3Bkb3duXG4iLCJncm93bCA9IChwYXJhbXMpIC0+XG5cbiAgayQuYnVmZmVyIC0+XG4gICAgZGVmYXVsdHMgPVxuICAgICAgdGl0bGU6IHVuZGVmaW5lZFxuICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICBkZWxheTogMjAwMFxuICAgICAgdHlwZTogJ2FsZXJ0LXdhcm4nXG4gICAgICBpZDogRGF0ZS5ub3coKVxuXG4gICAgcGFyYW1zID0gayQuZXh0ZW5kIGRlZmF1bHRzLCBwYXJhbXNcblxuICAgICMgQ3JlYXRlIGdyb3dsIGNvbnRhaW5lclxuICAgIGlmIG5vdCBrJC4kJCgnLmdyb3dsX2NvbnRhaW5lcicpLmxlbmd0aFxuICAgICAgZ3Jvd2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG4gICAgICBncm93bENvbnRhaW5lci5jbGFzc05hbWUgPSAnZ3Jvd2xfY29udGFpbmVyJ1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCBncm93bENvbnRhaW5lclxuXG4gICAgIyBDcmVhdGUgZ3Jvd2xcbiAgICBncm93bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdidcblxuICAgICMgQWRkIGFwcHJvcHJpYXRlIGNsYXNzZXNcbiAgICBjbGFzc05hbWUgPSBcImFsZXJ0IGdyb3dsIHNob3cgI3twYXJhbXMudHlwZX0gZ3Jvd2wtI3twYXJhbXMuaWR9XCJcbiAgICBncm93bC5jbGFzc05hbWUgPSBjbGFzc05hbWVcblxuICAgICMgQWRkIGNvbnRlbnRcbiAgICBjb250ZW50ID0gXCJcIlxuICAgIGNvbnRlbnQgKz0gXCI8aDE+I3twYXJhbXMudGl0bGV9PC9oMT5cIiBpZiBwYXJhbXMudGl0bGVcbiAgICBjb250ZW50ICs9IFwiPHA+I3twYXJhbXMudGV4dH08L3A+XCIgaWYgcGFyYW1zLnRleHRcbiAgICBncm93bC5pbm5lckhUTUwgPSBjb250ZW50XG5cbiAgICAjIEFwcGVuZCBjaGlsZCB0byBjb250YWluZXJcbiAgICBrJC4kKCcuZ3Jvd2xfY29udGFpbmVyJykuYXBwZW5kQ2hpbGQgZ3Jvd2xcblxuICAgIGRlbGF5ID0gcGFyYW1zLmRlbGF5XG4gICAgaWQgPSBwYXJhbXMuaWRcblxuICAgIGlmIGRlbGF5ID4gMFxuICAgICAgZG8gKGRlbGF5LCBpZCkgLT5cbiAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgICRncm93bCA9IGskLiQoXCIuZ3Jvd2wtI3tpZH1cIilcbiAgICAgICAgICAkZ3Jvd2wuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgICAgJG5ld0dyb3dsID0gJGdyb3dsLmNsb25lTm9kZSB0cnVlXG4gICAgICAgICAgJGdyb3dsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkICRuZXdHcm93bCwgJGdyb3dsXG4gICAgICAgICAgJG5ld0dyb3dsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gICAgICAgICAgZG8gKGRlbGF5LCBpZCkgLT5cbiAgICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgICAgIyBSZW1vdmUgZ2hvc3QgZ3Jvd2xzXG4gICAgICAgICAgICAgIGskLiQoJy5ncm93bF9jb250YWluZXInKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkIGskLiQoJy5ncm93bF9jb250YWluZXInKSBpZiBub3QgayQuJCQoJy5ncm93bC5zaG93JykubGVuZ3RoXG4gICAgICAgICAgICAsIDUwMFxuICAgICAgICAsIGRlbGF5XG5cbmskLmdyb3dsID0gZ3Jvd2xcblxubW9kdWxlLmV4cG9ydHMgPSBncm93bFxuIiwiZ2xvYmFsLmskID0gbmV3IE9iamVjdCgpXG5cbmskLiQkID0gKGVsKSAtPiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIGVsXG5rJC4kID0gKGVsKSAtPiBrJC4kJChlbClbMF1cbmskLmRlYm91bmNlVGltZXIgPSBmYWxzZVxuayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbmskLmV4dGVuZCA9IChkZXN0aW5hdGlvbiwgc291cmNlKSAtPlxuICBmb3IgcHJvcGVydHkgb2Ygc291cmNlXG4gICAgaWYgc291cmNlW3Byb3BlcnR5XSBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBhbmQgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciBpcyBPYmplY3RcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSBvciB7fVxuICAgICAgYXJndW1lbnRzLmNhbGxlZSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV1cbiAgICBlbHNlXG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldXG4gIGRlc3RpbmF0aW9uXG5cbm1vZHVsZS5leHBvcnRzID0gayRcbiIsIm1vZGFsID0gKGVsKSAtPlxuXG4gIGRvIChlbCkgLT5cblxuICAgICMgQWxsb3cgbW9kYWwgdG8gZGlzbWlzcyB3aGVuIGNsaWNrZWQgb3V0c2lkZVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgayQuJChlbCkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgayQuJChlbCkuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cbiAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgayQuJCBlbFxuXG5rJC5tb2RhbCA9IG1vZGFsXG5cbm1vZHVsZS5leHBvcnRzID0gbW9kYWxcbiIsIm5hdiA9IChlbCkgLT5cblxuICB0cnlcbiAgICAjIFdpcmUgdXAgbWVudSBpdGVtc1xuICAgICRtZW51SXRlbXMgPSBrJC4kKGVsKS5xdWVyeVNlbGVjdG9yQWxsKCd1bCA+IGxpJylcbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGggYW5kICEkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJidXR0b25cIl0nKS5sZW5ndGhcbiAgICAgICAgXyRtZW51SXRlbXMucHVzaCAkbWVudUl0ZW1cblxuICAgICRtZW51SXRlbXMgPSBfJG1lbnVJdGVtc1xuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51J1xuXG4gICAgIyBXaXJlIHVwIHRoZSBtZW51XG4gICAgayQuZHJvcGRvd24oKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICBrJC4kIGVsXG5cblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3N0YXR1cy15ZWxsb3cnXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXNfYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXNfYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1c19iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19iYXItc3RhdHVzJyBpZD0nc3RhdHVzX2Jhci1zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzX2JhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXNfYmFyLXN0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGVcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0aHJvdHRsZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gIFxuXG5rJC50aHJvdHRsZSA9IHRocm90dGxlXG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGVcbiJdfQ==
