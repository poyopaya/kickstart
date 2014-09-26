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
      var $subMenu, $ul, _$menuItem, _j, _k, _len1, _len2, _ref, _ref1;
      if ($menuItem.classList.contains('open')) {
        $menuItem.classList.remove('open');
        $menuItem.querySelector('ul').style.display = 'block';
        return;
      }
      _ref = document.querySelectorAll('.with-submenu');
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        _$menuItem = _ref[_j];
        _$menuItem.classList.remove('open');
      }
      $ul = $menuItem.querySelector('ul');
      _ref1 = document.querySelectorAll('.with-submenu ul');
      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
        $subMenu = _ref1[_k];
        $subMenu.style.display = 'none';
      }
      if ($ul) {
        $menuItem.classList.add('open');
        $ul.style.display = ($ul.style.display === 'block' ? 'none' : 'block');
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
      $ul.style.display = 'none';
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
      if ($menuItem.querySelectorAll('ul').length) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2J1dHRvbnMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kZWJvdW5jZXIuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9kcm9wZG93bi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L3NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2tzLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovc2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUvbW9kYWwuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9uYXYuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9zdGF0dXMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9zaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90aHJvdHRsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSw4REFBQTs7QUFBQSxFQUFBLEdBQVksT0FBQSxDQUFRLE1BQVIsQ0FBWixDQUFBOztBQUFBLEtBQ0EsR0FBWSxPQUFBLENBQVEsU0FBUixDQURaLENBQUE7O0FBQUEsR0FFQSxHQUFZLE9BQUEsQ0FBUSxPQUFSLENBRlosQ0FBQTs7QUFBQSxRQUdBLEdB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QSxFQWVBLGFBQUEsR0FBZ0IsU0FBQSxHQUFBO1dBQ2QsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUF0QixDQUFrQyxVQUFsQyxFQURjO0VBQUEsQ0FmaEIsQ0FBQTtBQWtCQSxFQUFBLElBQUcsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFsQjtBQUNFLElBQUEsRUFBRSxDQUFDLFFBQUgsQ0FBWSxhQUFaLEVBQTJCLGVBQTNCLEVBQTRDLE1BQU0sQ0FBQyxLQUFuRCxDQUFBLENBREY7R0FsQkE7QUFBQSxFQXFCQSxPQUFBLEdBQVUsRUFBRSxDQUFDLENBQUgsQ0FBSyxvQkFBTCxDQXJCVixDQUFBO0FBQUEsRUFzQkEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsTUFBTSxDQUFDLElBdEIzQixDQUFBO1NBdUJBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBaEIsR0FBdUIsTUFBTSxDQUFDLElBQVAsSUFBZSxPQXpCL0I7QUFBQSxDQUFULENBQUE7O0FBQUEsRUEyQkUsQ0FBQyxNQUFILEdBQVksTUEzQlosQ0FBQTs7QUFBQSxNQTZCTSxDQUFDLE9BQVAsR0FBaUIsTUE3QmpCLENBQUE7Ozs7O0FDQUEsSUFBQSxRQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxHQUFBLENBQVgsQ0FBQTs7QUFBQSxFQUlFLENBQUMsUUFBSCxHQUFjLFFBSmQsQ0FBQTs7QUFBQSxNQU1NLENBQUMsT0FBUCxHQUFpQixRQU5qQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIktTICAgICAgICA9IHJlcXVpcmUgJy4va3MnXG5Nb2RhbCAgICAgPSByZXF1aXJlICcuL21vZGFsJ1xuTmF2ICAgICAgID0gcmVxdWlyZSAnLi9uYXYnXG5EZWJvdW5jZSAgPSByZXF1aXJlICcuL2RlYm91bmNlcidcblN0YXR1cyAgICA9IHJlcXVpcmUgJy4vc3RhdHVzJ1xuVGhyb3R0bGVyID0gcmVxdWlyZSAnLi90aHJvdHRsZXInXG5CdXR0b25zICAgPSByZXF1aXJlICcuL2J1dHRvbnMnXG5Ecm9wZG93biAgPSByZXF1aXJlICcuL2Ryb3Bkb3duJ1xuXG5rJC5idXR0b24oKVxuayQuZHJvcGRvd24oKVxuIiwiYnV0dG9uID0gLT5cblxuICAoJGJ1dHRvbi5jbGFzc0xpc3QuYWRkICd3aXRoLXN1Ym1lbnUnIGlmICRidXR0b24ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGgpIGZvciAkYnV0dG9uIGluIGskLiQkKFwiYnV0dG9uXCIpXG4gICRidXR0b25Ecm9wZG93bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudScgZm9yICRidXR0b25Ecm9wZG93biBpbiBrJC4kJCAnLmJ1dHRvbi1kcm9wZG93bidcblxuayQuYnV0dG9uID0gYnV0dG9uXG5cbm1vZHVsZS5leHBvcnRzID0gYnV0dG9uXG4iLCJkZWJvdW5jZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gICRkZWxheSA9IGRlbGF5IHx8IDEwMDBcblxuICBrJC5kZWJvdW5jZVF1ZXVlID0gaWQgaWYgayQuZGVib3VuY2VRdWV1ZSA9PSBudWxsXG4gIGNsZWFyVGltZW91dCBrJC5kZWJvdW5jZVRpbWVyIGlmIGlkID09IGskLmRlYm91bmNlUXVldWVcbiAgayQuZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQgLT5cbiAgICBmbigpXG4gICAgayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbiAgLCAkZGVsYXlcblxuayQuZGVib3VuY2UgPSBkZWJvdW5jZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlXG4iLCJkcm9wZG93biA9IC0+XG5cbiAgIyBUaGUgZm9sbG93aW5nIHNob3VsZCBhcHBseSB0byBib3RoIG5hdmlnYXRpb24gZWxlbWVudHMgYW5kIGRyb3Bkb3duIGJ1dHRvbnNcblxuICAkbWVudUl0ZW1zID0gayQuJCQgJy53aXRoLXN1Ym1lbnUnXG5cbiAgZm9yICRfbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuXG4gICAgJG1lbnVJdGVtID0gJF9tZW51SXRlbS5jbG9uZU5vZGUgdHJ1ZVxuICAgICRfbWVudUl0ZW0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQgJG1lbnVJdGVtLCAkX21lbnVJdGVtXG5cbiAgICBkbyAoJG1lbnVJdGVtKSAtPlxuICAgICAgIyBUT0RPOiBJcyB0aGVyZSBhIHdheSB3ZSBjb3VsZCBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciBmb3IgZXZlcnlcbiAgICAgICMgc2luZ2xlIG9uZT9cbiAgICAgICRtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuXG4gICAgICAgICMgSnVzdCBjbG9zZSBpdCBpZiBpdCdzIGFscmVhZHkgb3BlblxuICAgICAgICBpZiAkbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zICdvcGVuJ1xuICAgICAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJ1xuICAgICAgICAgICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51JylcbiAgICAgICAgJHVsID0gJG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IgJ3VsJ1xuICAgICAgICAkc3ViTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIGZvciAkc3ViTWVudSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51IHVsJylcblxuICAgICAgICAjIE9wZW4gdGhpcyBvbmVcbiAgICAgICAgaWYgJHVsXG4gICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ29wZW4nXG5cbiAgICAgICAgICAjIFRPRE86IFBlcmhhcHMgdGhpcyBzaG91bGQgYmUgc2V0IGluIENTUyB2aWEgdGhlIC5vcGVuIGNsYXNzLlxuICAgICAgICAgICR1bC5zdHlsZS5kaXNwbGF5ID0gKGlmICR1bC5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycgdGhlbiAnbm9uZScgZWxzZSAnYmxvY2snKVxuXG4gICAgICAgICMgUHJldmVudCBidWJibGluZ1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgIyBEaXNtaXNzIGFsbFxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAkdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyBmb3IgJHVsIGluIGskLiQkKCcud2l0aC1zdWJtZW51ID4gdWwnKVxuICAgICRsaS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgJGxpIGluIGskLiQkKCcud2l0aC1zdWJtZW51Lm9wZW4nKVxuXG5rJC5kcm9wZG93biA9IGRyb3Bkb3duXG5cbm1vZHVsZS5leHBvcnRzID0gZHJvcGRvd25cbiIsImdsb2JhbC5rJCA9IG5ldyBPYmplY3QoKVxuXG5rJC4kJCA9IChlbCkgLT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBlbFxuayQuJCA9IChlbCkgLT4gayQuJCQoZWwpWzBdXG5rJC5kZWJvdW5jZVRpbWVyID0gZmFsc2VcbmskLmRlYm91bmNlUXVldWUgPSBudWxsXG5rJC5leHRlbmQgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgLT5cbiAgZm9yIHByb3BlcnR5IG9mIHNvdXJjZVxuICAgIGlmIHNvdXJjZVtwcm9wZXJ0eV0gYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgaXMgT2JqZWN0XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gb3Ige31cbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUgZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldXG4gICAgZWxzZVxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XVxuICBkZXN0aW5hdGlvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGskXG4iLCJtb2RhbCA9IChlbCkgLT5cblxuICBkbyAoZWwpIC0+XG5cbiAgICAjIEFsbG93IG1vZGFsIHRvIGRpc21pc3Mgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgIGskLiQoZWwpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGskLiQoZWwpLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG4gICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGskLiQgZWxcblxuayQubW9kYWwgPSBtb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsXG4iLCJuYXYgPSAoZWwpIC0+XG5cbiAgdHJ5XG4gICAgJG1lbnVJdGVtcyA9IGskLiQoZWwpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsID4gbGknKVxuICAgICMgUHJ1bmUgaXRlbXMgdGhhdCBkb24ndCBjb250YWluIHVsc1xuICAgIF8kbWVudUl0ZW1zID0gbmV3IEFycmF5KClcbiAgICBmb3IgJG1lbnVJdGVtIGluICRtZW51SXRlbXNcbiAgICAgIF8kbWVudUl0ZW1zLnB1c2ggJG1lbnVJdGVtIGlmICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmxlbmd0aFxuXG4gICAgJG1lbnVJdGVtcyA9IF8kbWVudUl0ZW1zXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51J1xuXG4gICAgIyBXaXJlIHVwIHRoZSBtZW51XG4gICAgayQuZHJvcGRvd24oKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICBrJC4kIGVsXG5cblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3dhcm4nXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXMtYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXMtYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1cy1iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1cy1iYXJfc3RhdHVzJyBpZD0nc3RhdHVzLWJhcl9zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzLWJhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXMtYmFyX3N0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGUgfHwgJ3dhcm4nXG5cbmskLnN0YXR1cyA9IHN0YXR1c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXR1c1xuIiwidGhyb3R0bGUgPSAoZm4sIGlkLCBkZWxheSkgLT5cblxuICBcblxuayQudGhyb3R0bGUgPSB0aHJvdHRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlXG4iXX0=
