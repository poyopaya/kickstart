(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Debounce, Dropdown, KS, Modal, Nav, Status, Throttler;

KS = require('./ks');

Modal = require('./modal');

Nav = require('./nav');

Debounce = require('./debouncer');

Status = require('./status');

Throttler = require('./throttler');

Dropdown = require('./dropdown');

k$.dropdown();



},{"./debouncer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee","./dropdown":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/dropdown.coffee","./ks":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee","./nav":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/nav.coffee","./status":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee","./throttler":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee":[function(require,module,exports){
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
  var $button, _i, _len, _ref, _results;
  _ref = k$.$$("button");
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    $button = _ref[_i];
    _results.push($button.querySelectorAll('ul').length ? $button.classList.add('with-submenu') : void 0);
  }
  return _results;
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
  var $menuItem, $menuItems, e, _$menuItems, _fn, _i, _j, _len, _len1;
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
    _fn = function($menuItem) {
      return $menuItem.addEventListener('click', function(e) {
        var $subMenu, $ul, _$menuItem, _k, _l, _len2, _len3, _ref, _ref1;
        e.stopPropagation();
        _ref = document.querySelectorAll('.with-submenu');
        for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
          _$menuItem = _ref[_k];
          _$menuItem.classList.remove('open');
        }
        $ul = $menuItem.querySelector('ul');
        _ref1 = document.querySelectorAll('.with-submenu ul');
        for (_l = 0, _len3 = _ref1.length; _l < _len3; _l++) {
          $subMenu = _ref1[_l];
          $subMenu.style.display = 'none';
        }
        if ($ul) {
          $menuItem.classList.add('open');
          return $ul.style.display = ($ul.style.display === 'block' ? 'none' : 'block');
        }
      });
    };
    for (_j = 0, _len1 = $menuItems.length; _j < _len1; _j++) {
      $menuItem = $menuItems[_j];
      $menuItem.classList.add('with-submenu');
      _fn($menuItem);
    }
    document.body.addEventListener('click', function() {
      var $li, $ul, _k, _l, _len2, _len3, _ref, _ref1, _results;
      _ref = k$.$(el).querySelectorAll('ul li ul');
      for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
        $ul = _ref[_k];
        $ul.style.display = 'none';
      }
      _ref1 = k$.$(el).querySelectorAll('ul li');
      _results = [];
      for (_l = 0, _len3 = _ref1.length; _l < _len3; _l++) {
        $li = _ref1[_l];
        _results.push($li.classList.remove('open'));
      }
      return _results;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2RlYm91bmNlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2Ryb3Bkb3duLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUva3MuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9tb2RhbC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL25hdi5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3N0YXR1cy5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL3Rocm90dGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLHFEQUFBOztBQUFBLEVBQUEsR0FBWSxPQUFBLENBQVEsTUFBUixDQUFaLENBQUE7O0FBQUEsS0FDQSxHQUFZLE9BQUEsQ0FBUSxTQUFSLENBRFosQ0FBQTs7QUFBQSxHQUVBLEdBQVksT0FBQSxDQUFRLE9BQVIsQ0FGWixDQUFBOztBQUFBLFFBR0EsR0FBWSxPQUFBLENBQVEsYUFBUixDQUhaLENBQUE7O0FBQUEsTUFJQSxHQUFZLE9BQUEsQ0FBUSxVQUFSLENBSlosQ0FB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QyxDQUFILENBQUssYUFBTCxDQWJiLENBQUE7QUFBQSxFQWVBLGFBQUEsR0FBZ0IsU0FBQSxHQUFBO1dBQ2QsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUF0QixDQUFrQyxVQUFsQyxFQURjO0VBQUEsQ0FmaEIsQ0FBQTtBQWtCQSxFQUFBLElBQUcsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFsQjtBQUNFLElBQUEsRUFBRSxDQUFDLFFBQUgsQ0FBWSxhQUFaLEVBQTJCLGVBQTNCLEVBQTRDLE1BQU0sQ0FBQyxLQUFuRCxDQUFBLENBREY7R0FsQkE7QUFBQSxFQXFCQSxPQUFBLEdBQVUsRUFBRSxDQUFDLENBQUgsQ0FBSyxvQkFBTCxDQXJCVixDQUFBO0FBQUEsRUFzQkEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsTUFBTSxDQUFDLElBdEIzQixDQUFBO1NBdUJBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBaEIsR0FBdUIsTUFBTSxDQUFDLElBQVAsSUFBZSxPQXpCL0I7QUFBQSxDQUFULENBQUE7O0FBQUEsRUEyQkUsQ0FBQyxNQUFILEdBQVksTUEzQlosQ0FBQTs7QUFBQSxNQTZCTSxDQUFDLE9BQVAsR0FBaUIsTUE3QmpCLENBQUE7Ozs7O0FDQUEsSUFBQSxRQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxHQUFBLENBQVgsQ0FBQTs7QUFBQSxFQUlFLENBQUMsUUFBSCxHQUFjLFFBSmQsQ0FBQTs7QUFBQSxNQU1NLENBQUMsT0FBUCxHQUFpQixRQU5qQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIktTICAgICAgICA9IHJlcXVpcmUgJy4va3MnXG5Nb2RhbCAgICAgPSByZXF1aXJlICcuL21vZGFsJ1xuTmF2ICAgICAgID0gcmVxdWlyZSAnLi9uYXYnXG5EZWJvdW5jZSAgPSByZXF1aXJlICcuL2RlYm91bmNlcidcblN0YXR1cyAgICA9IHJlcXVpcmUgJy4vc3RhdHVzJ1xuVGhyb3R0bGVyID0gcmVxdWlyZSAnLi90aHJvdHRsZXInXG5Ecm9wZG93biAgPSByZXF1aXJlICcuL2Ryb3Bkb3duJ1xuXG5rJC5kcm9wZG93bigpXG4iLCJkZWJvdW5jZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gICRkZWxheSA9IGRlbGF5IHx8IDEwMDBcblxuICBrJC5kZWJvdW5jZVF1ZXVlID0gaWQgaWYgayQuZGVib3VuY2VRdWV1ZSA9PSBudWxsXG4gIGNsZWFyVGltZW91dCBrJC5kZWJvdW5jZVRpbWVyIGlmIGlkID09IGskLmRlYm91bmNlUXVldWVcbiAgayQuZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQgLT5cbiAgICBmbigpXG4gICAgayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbiAgLCAkZGVsYXlcblxuayQuZGVib3VuY2UgPSBkZWJvdW5jZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlXG4iLCJkcm9wZG93biA9IC0+XG5cbiAgKCRidXR0b24uY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51JyBpZiAkYnV0dG9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJykubGVuZ3RoKSBmb3IgJGJ1dHRvbiBpbiBrJC4kJChcImJ1dHRvblwiKVxuXG5rJC5kcm9wZG93biA9IGRyb3Bkb3duXG5cbm1vZHVsZS5leHBvcnRzID0gZHJvcGRvd25cbiIsImdsb2JhbC5rJCA9IG5ldyBPYmplY3QoKVxuXG5rJC4kJCA9IChlbCkgLT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBlbFxuayQuJCA9IChlbCkgLT4gayQuJCQoZWwpWzBdXG5rJC5kZWJvdW5jZVRpbWVyID0gZmFsc2VcbmskLmRlYm91bmNlUXVldWUgPSBudWxsXG5rJC5leHRlbmQgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgLT5cbiAgZm9yIHByb3BlcnR5IG9mIHNvdXJjZVxuICAgIGlmIHNvdXJjZVtwcm9wZXJ0eV0gYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgYW5kIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgaXMgT2JqZWN0XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gb3Ige31cbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUgZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldXG4gICAgZWxzZVxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XVxuICBkZXN0aW5hdGlvblxuXG5tb2R1bGUuZXhwb3J0cyA9IGskXG4iLCJtb2RhbCA9IChlbCkgLT5cblxuICBkbyAoZWwpIC0+XG5cbiAgICAjIEFsbG93IG1vZGFsIHRvIGRpc21pc3Mgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgIGskLiQoZWwpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGskLiQoZWwpLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpIC0+XG4gICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGskLiQgZWxcblxuayQubW9kYWwgPSBtb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsXG4iLCJuYXYgPSAoZWwpIC0+XG5cbiAgdHJ5XG4gICAgJG1lbnVJdGVtcyA9IGskLiQoZWwpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsID4gbGknKVxuICAgICMgUHJ1bmUgaXRlbXMgdGhhdCBkb24ndCBjb250YWluIHVsc1xuICAgIF8kbWVudUl0ZW1zID0gbmV3IEFycmF5KClcbiAgICBmb3IgJG1lbnVJdGVtIGluICRtZW51SXRlbXNcbiAgICAgIF8kbWVudUl0ZW1zLnB1c2ggJG1lbnVJdGVtIGlmICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmxlbmd0aFxuXG4gICAgJG1lbnVJdGVtcyA9IF8kbWVudUl0ZW1zXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICAjIEZvciBzdHlsaW5nXG4gICAgICAkbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCAnd2l0aC1zdWJtZW51J1xuXG4gICAgICBkbyAoJG1lbnVJdGVtKSAtPlxuICAgICAgICAjIFRPRE86IElzIHRoZXJlIGEgd2F5IHdlIGNvdWxkIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeVxuICAgICAgICAjIHNpbmdsZSBvbmU/XG4gICAgICAgICRtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuXG4gICAgICAgICAgIyBQcmV2ZW50IGJ1YmJsaW5nXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgIyBSZXNldCBhbGxcbiAgICAgICAgICBfJG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciBfJG1lbnVJdGVtIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aXRoLXN1Ym1lbnUnKVxuICAgICAgICAgICR1bCA9ICRtZW51SXRlbS5xdWVyeVNlbGVjdG9yICd1bCdcbiAgICAgICAgICAkc3ViTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIGZvciAkc3ViTWVudSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51IHVsJylcblxuICAgICAgICAgICMgT3BlbiB0aGlzIG9uZVxuICAgICAgICAgIGlmICR1bFxuICAgICAgICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ29wZW4nXG4gICAgICAgICAgICAkdWwuc3R5bGUuZGlzcGxheSA9IChpZiAkdWwuc3R5bGUuZGlzcGxheSA9PSAnYmxvY2snIHRoZW4gJ25vbmUnIGVsc2UgJ2Jsb2NrJylcblxuICAgICMgRGlzbWlzcyBhbGxcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICR1bC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIGZvciAkdWwgaW4gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgbGkgdWwnKVxuICAgICAgJGxpLmNsYXNzTGlzdC5yZW1vdmUgJ29wZW4nIGZvciAkbGkgaW4gayQuJChlbCkucXVlcnlTZWxlY3RvckFsbCgndWwgbGknKVxuXG4gIGNhdGNoIGVcbiAgICBjb25zb2xlLmVycm9yIFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGFzIGEgbmF2LlwiLCBlLm1lc3NhZ2VcblxuICBrJC4kIGVsXG5cblxuayQubmF2ID0gbmF2XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2XG4iLCJzdGF0dXMgPSAob3B0cykgLT5cblxuICBkZWZhdWx0cyA9XG4gICAgdHlwZTogJ3dhcm4nXG4gICAgZGVsYXk6IDIwMDBcblxuICBzdGF0dXMgPSBrJC5leHRlbmQgZGVmYXVsdHMsIG9wdHNcblxuICBpZiBub3QgayQuJCQoJyNzdGF0dXMtYmFyJykubGVuZ3RoXG4gICAgJHN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJHN0YXR1c0Jhci5pZCA9ICdzdGF0dXMtYmFyJ1xuICAgICRzdGF0dXNCYXIuY2xhc3NOYW1lID0gJ3N0YXR1cy1iYXInXG4gICAgJHN0YXR1c0Jhci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3N0YXR1cy1iYXJfc3RhdHVzJyBpZD0nc3RhdHVzLWJhcl9zdGF0dXMnPjwvZGl2PlwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkc3RhdHVzQmFyKVxuXG4gICRzdGF0dXNCYXIgPSBrJC4kKCcjc3RhdHVzLWJhcicpXG5cbiAgaGlkZVN0YXR1c0JhciA9IC0+XG4gICAgJHN0YXR1c0Jhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkICRzdGF0dXNCYXJcblxuICBpZiBzdGF0dXMuZGVsYXkgPiAwXG4gICAgayQuZGVib3VuY2UgaGlkZVN0YXR1c0JhciwgJ2hpZGVTdGF0dXNCYXInLCBzdGF0dXMuZGVsYXlcblxuICAkc3RhdHVzID0gayQuJChcIiNzdGF0dXMtYmFyX3N0YXR1c1wiKVxuICAkc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cy50ZXh0XG4gICRzdGF0dXMuZGF0YXNldC50eXBlID0gc3RhdHVzLnR5cGUgfHwgJ3dhcm4nXG5cbmskLnN0YXR1cyA9IHN0YXR1c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXR1c1xuIiwidGhyb3R0bGUgPSAoZm4sIGlkLCBkZWxheSkgLT5cblxuICBcblxuayQudGhyb3R0bGUgPSB0aHJvdHRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlXG4iXX0=
