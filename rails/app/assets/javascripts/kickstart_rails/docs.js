(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var $headingLevel, $link, $menuItem, $newSubmenu, $stepsUp, $targetNode, $thisHeadingLevel, $toc, booleanViewOptions, defaults, els, extend, heading, option, options, setSettings, settings, _fn, _i, _j, _k, _len, _len1, _len2, _ref;
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
          $visibleStyle = $container.nodeName === 'SPAN' ? 'inline' : 'block';
          $container.style.display = (settings.viewOptions["" + option] ? $visibleStyle : 'none');
        }
        _results.push((function() {
          var _k, _len2, _ref1, _results1;
          _ref1 = $$(".ifnot-" + option);
          _results1 = [];
          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            $container = _ref1[_k];
            $visibleStyle = $container.nodeName === 'SPAN' ? 'inline' : 'block';
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
          return setSettings(settings);
        });
      };
      for (_j = 0, _len1 = booleanViewOptions.length; _j < _len1; _j++) {
        option = booleanViewOptions[_j];
        _fn(option);
      }
    }
    if (k$.$('#example-showGrowl')) {
      k$.$('#example-showGrowl').addEventListener('click', function() {
        var growls;
        growls = [
          {
            title: 'Document Saved.',
            text: 'Your document was successfully saved.',
            type: 'alert-green'
          }, {
            title: 'Library book not found',
            text: 'Sorry, we could find that library book.',
            type: 'alert-red'
          }, {
            title: 'Wide clearance selection',
            text: 'Remember to check out our clearance',
            type: 'alert-blue'
          }, {
            title: 'Deadline approaching',
            text: 'Friendly reminder that your deadline is quickly approaching.',
            type: 'alert-yellow'
          }
        ];
        k$.exampleCounter++;
        if (!k$.exampleCounter || k$.exampleCounter > 3) {
          k$.exampleCounter = 0;
        }
        return k$.growl(growls[k$.exampleCounter]);
      });
    }
    if (k$.$('#example-showStatus')) {
      k$.$('#example-showStatus').addEventListener('click', function() {
        var statuses;
        statuses = [
          {
            text: 'Document Saved.',
            type: 'status-green'
          }, {
            text: 'Sorry, we could find that library book.',
            type: 'status-red'
          }, {
            text: 'Remember to check out our clearance',
            type: 'status-blue'
          }, {
            text: 'Deadline is approaching!',
            type: 'status-yellow'
          }
        ];
        k$.exampleCounter++;
        if (!k$.exampleCounter || k$.exampleCounter > 3) {
          k$.exampleCounter = 0;
        }
        return k$.status(statuses[k$.exampleCounter]);
      });
    }
    k$.slugify = function(str) {
      return str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    };
    if (k$.$$('#toc').length) {
      k$.$('.creating-table').parentNode.removeChild(k$.$('.creating-table'));
      $toc = document.createElement('ul');
      $toc.className = "list list-unstyled";
      $link = document.createElement('li');
      $link.innerHTML = '<a></a>';
      $headingLevel = 1;
      $targetNode = $toc;
      _ref = k$.$$('.document-container h1, .document-container h2, .document-container h3, .document-container h4, .document-container h5, .document-container h6');
      for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
        heading = _ref[_k];
        if (!heading.classList.contains('toc-exempt')) {
          heading.id = "" + (k$.slugify(heading.innerHTML)) + "-" + _k;
          $thisHeadingLevel = parseInt(heading.tagName.substr(1, 2));
          if ($thisHeadingLevel > $headingLevel) {
            $newSubmenu = document.createElement('ul');
            $targetNode.appendChild($newSubmenu);
            $targetNode = $newSubmenu;
            $headingLevel = $thisHeadingLevel;
          }
          if ($thisHeadingLevel < $headingLevel) {
            $stepsUp = $headingLevel - $thisHeadingLevel;
            while ($stepsUp > 0) {
              $targetNode = $targetNode.parentNode;
              $stepsUp--;
            }
            $headingLevel = $thisHeadingLevel;
          }
          $menuItem = $link.cloneNode(true);
          $menuItem.querySelector('a').href = "#" + heading.id;
          $menuItem.querySelector('a').innerHTML = heading.innerHTML;
          $targetNode.appendChild($menuItem);
        }
      }
      return k$.$('#toc').appendChild($toc);
    }
  });

}).call(this);
