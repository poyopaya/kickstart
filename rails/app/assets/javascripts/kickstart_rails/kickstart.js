(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/coffee/app.coffee":[function(require,module,exports){
var Debounce, KS, Modal, Nav, Status, Throttler;

KS = require('./ks');

Modal = require('./modal');

Nav = require('./nav');

Debounce = require('./debouncer');

Status = require('./status');

Throttler = require('./throttler');



},{"./debouncer":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee","./ks":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/ks.coffee","./modal":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/modal.coffee","./nav":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/nav.coffee","./status":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/status.coffee","./throttler":"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/throttler.coffee"}],"/Users/adamkochanowicz/Sites/kickstart/lib/coffee/debouncer.coffee":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2FwcC5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2RlYm91bmNlci5jb2ZmZWUiLCIvVXNlcnMvYWRhbWtvY2hhbm93aWN6L1NpdGVzL2tpY2tzdGFydC9saWIvY29mZmVlL2tzLmNvZmZlZSIsIi9Vc2Vycy9hZGFta29jaGFub3dpY3ovU2l0ZXMva2lja3N0YXJ0L2xpYi9jb2ZmZWUvbW9kYWwuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9uYXYuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS9zdGF0dXMuY29mZmVlIiwiL1VzZXJzL2FkYW1rb2NoYW5vd2ljei9TaXRlcy9raWNrc3RhcnQvbGliL2NvZmZlZS90aHJvdHRsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSwyQ0FBQTs7QUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLE1BQVIsQ0FBTCxDQUFBOztBQUFBLEtBQ0EsR0FBUSxPQUFBLENBQVEsU0FBUixDQURSLENBQUE7O0FBQUEsR0FFQSxHQUFNLE9BQUEsQ0FBUSxPQUFSLENBRk4sQ0FBQTs7QUFBQSxRQUdBLEdBQVcsT0FBQSxDQUFRLGFBQVIsQ0FIWCxDQUFBOztBQUFBLE1BSUEsR0FBUyxPQUFBLENBQVEsVUFBUixDQUpULENBQUE7O0FBQUEsU0FLQSxHQUFZLE9BQUEsQ0FBUSxhQUFSLENBTFosQ0FBQTs7Ozs7QUNBQSxJQUFBLFFBQUE7O0FBQUEs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Q0FBQyxNQUFILEdBQVksTUEzQlosQ0FBQTs7QUFBQSxNQTZCTSxDQUFDLE9BQVAsR0FBaUIsTUE3QmpCLENBQUE7Ozs7O0FDQUEsSUFBQSxRQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxHQUFBLENBQVgsQ0FBQTs7QUFBQSxFQUdFLENBQUMsUUFBSCxHQUFjLFFBSGQsQ0FBQTs7QUFBQSxNQUtNLENBQUMsT0FBUCxHQUFpQixRQUxqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIktTID0gcmVxdWlyZSAnLi9rcydcbk1vZGFsID0gcmVxdWlyZSAnLi9tb2RhbCdcbk5hdiA9IHJlcXVpcmUgJy4vbmF2J1xuRGVib3VuY2UgPSByZXF1aXJlICcuL2RlYm91bmNlcidcblN0YXR1cyA9IHJlcXVpcmUgJy4vc3RhdHVzJ1xuVGhyb3R0bGVyID0gcmVxdWlyZSAnLi90aHJvdHRsZXInXG4iLCJkZWJvdW5jZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG4gICRkZWxheSA9IGRlbGF5IHx8IDEwMDBcblxuICBrJC5kZWJvdW5jZVF1ZXVlID0gaWQgaWYgayQuZGVib3VuY2VRdWV1ZSA9PSBudWxsXG4gIGNsZWFyVGltZW91dCBrJC5kZWJvdW5jZVRpbWVyIGlmIGlkID09IGskLmRlYm91bmNlUXVldWVcbiAgayQuZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQgLT5cbiAgICBmbigpXG4gICAgayQuZGVib3VuY2VRdWV1ZSA9IG51bGxcbiAgLCAkZGVsYXlcblxuayQuZGVib3VuY2UgPSBkZWJvdW5jZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlXG4iLCJnbG9iYWwuayQgPSBuZXcgT2JqZWN0KClcblxuayQuJCQgPSAoZWwpIC0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgZWxcbmskLiQgPSAoZWwpIC0+IGskLiQkKGVsKVswXVxuayQuZGVib3VuY2VUaW1lciA9IGZhbHNlXG5rJC5kZWJvdW5jZVF1ZXVlID0gbnVsbFxuayQuZXh0ZW5kID0gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIC0+XG4gIGZvciBwcm9wZXJ0eSBvZiBzb3VyY2VcbiAgICBpZiBzb3VyY2VbcHJvcGVydHldIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGFuZCBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yIGlzIE9iamVjdFxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIG9yIHt9XG4gICAgICBhcmd1bWVudHMuY2FsbGVlIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XVxuICAgIGVsc2VcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV1cbiAgZGVzdGluYXRpb25cblxubW9kdWxlLmV4cG9ydHMgPSBrJFxuIiwibW9kYWwgPSAoZWwpIC0+XG5cbiAgZG8gKGVsKSAtPlxuXG4gICAgIyBBbGxvdyBtb2RhbCB0byBkaXNtaXNzIHdoZW4gY2xpY2tlZCBvdXRzaWRlXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICBrJC4kKGVsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBrJC4kKGVsKS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuICAgICAgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICBrJC4kIGVsXG5cbmskLm1vZGFsID0gbW9kYWxcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbFxuIiwibmF2ID0gKGVsKSAtPlxuXG4gIHRyeVxuICAgICRtZW51SXRlbXMgPSBrJC4kKGVsKS5xdWVyeVNlbGVjdG9yQWxsKCd1bCA+IGxpJylcbiAgICAjIFBydW5lIGl0ZW1zIHRoYXQgZG9uJ3QgY29udGFpbiB1bHNcbiAgICBfJG1lbnVJdGVtcyA9IG5ldyBBcnJheSgpXG4gICAgZm9yICRtZW51SXRlbSBpbiAkbWVudUl0ZW1zXG4gICAgICBfJG1lbnVJdGVtcy5wdXNoICRtZW51SXRlbSBpZiAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgndWwnKS5sZW5ndGhcblxuICAgICRtZW51SXRlbXMgPSBfJG1lbnVJdGVtc1xuICAgIGZvciAkbWVudUl0ZW0gaW4gJG1lbnVJdGVtc1xuICAgICAgIyBGb3Igc3R5bGluZ1xuICAgICAgJG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQgJ3dpdGgtc3VibWVudSdcblxuICAgICAgZG8gKCRtZW51SXRlbSkgLT5cbiAgICAgICAgIyBUT0RPOiBJcyB0aGVyZSBhIHdheSB3ZSBjb3VsZCBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciBmb3IgZXZlcnlcbiAgICAgICAgIyBzaW5nbGUgb25lP1xuICAgICAgICAkbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoZSkgLT5cblxuICAgICAgICAgICMgUHJldmVudCBidWJibGluZ1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICMgUmVzZXQgYWxsXG4gICAgICAgICAgXyRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgXyRtZW51SXRlbSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2l0aC1zdWJtZW51JylcbiAgICAgICAgICAkdWwgPSAkbWVudUl0ZW0ucXVlcnlTZWxlY3RvciAndWwnXG4gICAgICAgICAgJHN1Yk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJyBmb3IgJHN1Yk1lbnUgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpdGgtc3VibWVudSB1bCcpXG5cbiAgICAgICAgICAjIE9wZW4gdGhpcyBvbmVcbiAgICAgICAgICBpZiAkdWxcbiAgICAgICAgICAgICRtZW51SXRlbS5jbGFzc0xpc3QuYWRkICdvcGVuJ1xuICAgICAgICAgICAgJHVsLnN0eWxlLmRpc3BsYXkgPSAoaWYgJHVsLnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJyB0aGVuICdub25lJyBlbHNlICdibG9jaycpXG5cbiAgICAjIERpc21pc3MgYWxsXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAkdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyBmb3IgJHVsIGluIGskLiQoZWwpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGxpIHVsJylcbiAgICAgICRsaS5jbGFzc0xpc3QucmVtb3ZlICdvcGVuJyBmb3IgJGxpIGluIGskLiQoZWwpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGxpJylcblxuICBjYXRjaCBlXG4gICAgY29uc29sZS5lcnJvciBcIkNvdWxkIG5vdCBpbnN0YW50aWF0ZSBhcyBhIG5hdi5cIiwgZS5tZXNzYWdlXG5cbiAgayQuJCBlbFxuXG5rJC5uYXYgPSBuYXZcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZcbiIsInN0YXR1cyA9IChvcHRzKSAtPlxuXG4gIGRlZmF1bHRzID1cbiAgICB0eXBlOiAnd2FybidcbiAgICBkZWxheTogMjAwMFxuXG4gIHN0YXR1cyA9IGskLmV4dGVuZCBkZWZhdWx0cywgb3B0c1xuXG4gIGlmIG5vdCBrJC4kJCgnI3N0YXR1cy1iYXInKS5sZW5ndGhcbiAgICAkc3RhdHVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkc3RhdHVzQmFyLmlkID0gJ3N0YXR1cy1iYXInXG4gICAgJHN0YXR1c0Jhci5jbGFzc05hbWUgPSAnc3RhdHVzLWJhcidcbiAgICAkc3RhdHVzQmFyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzLWJhcl9zdGF0dXMnIGlkPSdzdGF0dXMtYmFyX3N0YXR1cyc+PC9kaXY+XCJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRzdGF0dXNCYXIpXG5cbiAgJHN0YXR1c0JhciA9IGskLiQoJyNzdGF0dXMtYmFyJylcblxuICBoaWRlU3RhdHVzQmFyID0gLT5cbiAgICAkc3RhdHVzQmFyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQgJHN0YXR1c0JhclxuXG4gIGlmIHN0YXR1cy5kZWxheSA+IDBcbiAgICBrJC5kZWJvdW5jZSBoaWRlU3RhdHVzQmFyLCAnaGlkZVN0YXR1c0JhcicsIHN0YXR1cy5kZWxheVxuXG4gICRzdGF0dXMgPSBrJC4kKFwiI3N0YXR1cy1iYXJfc3RhdHVzXCIpXG4gICRzdGF0dXMuaW5uZXJIVE1MID0gc3RhdHVzLnRleHRcbiAgJHN0YXR1cy5kYXRhc2V0LnR5cGUgPSBzdGF0dXMudHlwZSB8fCAnd2FybidcblxuayQuc3RhdHVzID0gc3RhdHVzXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG4iLCJ0aHJvdHRsZSA9IChmbiwgaWQsIGRlbGF5KSAtPlxuXG5cbmskLnRocm90dGxlID0gdGhyb3R0bGVcblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZVxuIl19
