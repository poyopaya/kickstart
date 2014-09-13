(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var booleanViewOptions, defaults, els, extend, option, options, setSettings, settings, _fn, _i, _j, _len, _len1;
    window.$$ = function(el) {
      return document.querySelectorAll(el);
    };
    window.$ = function(el) {
      return $$(el)[0];
    };

    /*
    CRUD DOCUMENTATION SETTINGS
     */
    defaults = {
      viewOptions: {
        jquery: false,
        semantic: true
      }
    };
    booleanViewOptions = ['jquery', 'semantic'];
    options = JSON.parse(localStorage.getItem('kickstartDocs'));
    extend = function(destination, source) {
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
    settings = options ? extend(defaults, options) : defaults;
    setSettings = function(settings) {
      var $container, $visibleStyle, option, _i, _j, _len, _len1, _ref, _results;
      localStorage.setItem('kickstartDocs', JSON.stringify(settings));
      _results = [];
      for (_i = 0, _len = booleanViewOptions.length; _i < _len; _i++) {
        option = booleanViewOptions[_i];
        _ref = $$(".if-" + option);
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          $container = _ref[_j];
          $visibleStyle = $container.nodeName === 'SPAN' ? 'inline-block' : 'block';
          $container.style.display = (settings.viewOptions["" + option] ? $visibleStyle : 'none');
        }
        _results.push((function() {
          var _k, _len2, _ref1, _results1;
          _ref1 = $$(".ifnot-" + option);
          _results1 = [];
          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            $container = _ref1[_k];
            $visibleStyle = $container.nodeName === 'SPAN' ? 'inline-block' : 'block';
            _results1.push($container.style.display = (settings.viewOptions["" + option] ? 'none' : $visibleStyle));
          }
          return _results1;
        })());
      }
      return _results;
    };
    setSettings(settings);
    els = [];
    for (_i = 0, _len = booleanViewOptions.length; _i < _len; _i++) {
      option = booleanViewOptions[_i];
      option = "#docs-" + option;
      els.push(option);
    }
    if ($$(els).length) {
      _fn = function(option) {
        window["$opt" + option] = $("#docs-" + option);
        window["$opt" + option].checked = (settings.viewOptions["" + option] ? true : false);
        return window["$opt" + option].addEventListener('click', function() {
          settings.viewOptions["" + option] = this.checked;
          console.log(settings.viewOptions);
          return setSettings(settings);
        });
      };
      for (_j = 0, _len1 = booleanViewOptions.length; _j < _len1; _j++) {
        option = booleanViewOptions[_j];
        _fn(option);
      }
    }
    if (k$.$('#example-showStatus')) {
      return k$.$('#example-showStatus').addEventListener('click', function() {
        var statuses;
        statuses = [
          {
            text: 'Document Saved.',
            type: 'success'
          }, {
            text: 'Sorry, we could find that library book.',
            type: 'error'
          }, {
            text: 'Remember to check out our clearance',
            type: 'info'
          }, {
            text: 'Deadline is approaching!',
            type: 'warn'
          }
        ];
        k$.exampleCounter++;
        if (!k$.exampleCounter || k$.exampleCounter > 3) {
          k$.exampleCounter = 0;
        }
        return k$.status(statuses[k$.exampleCounter]);
      });
    }
  });

}).call(this);
