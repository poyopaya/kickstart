(function() {
  var ctrl, dctv, filter, jspmResources, k$, k$settings, systemNormalize, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;

  k$settings = extend({
    mode: 'dev',
    firebaseName: 'kickstrap-demo',
    version: '2.0.0 alpha'
  }, window.k$ || {});

  k$ = window.k$ = function() {};

  k$.settings = k$settings;

  k$["import"] = function(app) {
    return jspm["import"](app);
  };

  k$.app = function(name, options) {
    var htmlElement;
    htmlElement = document.body.childNodes[document.body.childNodes.length - 3];
    return jspm["import"](name, function(app) {
      return app.attach(htmlElement, options);
    });
  };

  k$.readyFxs = [];

  k$.ready = function(fx) {
    return k$.readyFxs.push(fx);
  };

  jspmResources = k$.settings.core;

  if (k$.settings.mode === 'dev') {
    System.urlArgs = '?bust=' + new Date().getTime();
  }

  System.paths['ks:*'] = 'apps/*.js';

  systemNormalize = System.normalize;

  System.normalize = function(name, parentName, parentAddress) {
    return Promise.resolve(systemNormalize.call(this, name, parentName, parentAddress)).then(function(normalized) {
      if (normalized.substr(0, 3) === 'ks:' && normalized.split('/').length === 1) {
        normalized += '/main';
      }
      return normalized;
    });
  };

  window.jspm = {
    "import": function(names, callback, errback) {
      if (typeof names === 'string') {
        names = [names];
      }
      return (Promise.all(names.map(function(n) {
        return System["import"](n);
      }))).then(function(modules) {
        return callback.apply(null, modules);
      })["catch"](errback);
    }
  };

  k$.appCore = [];

  _ref = k$.settings.angular.controllers;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    ctrl = _ref[_i];
    k$.appCore.push('ks:ang-app/controllers/' + ctrl);
  }

  _ref1 = k$.settings.angular.directives;
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    dctv = _ref1[_j];
    k$.appCore.push('ks:ang-app/directives/' + dctv);
  }

  _ref2 = k$.settings.angular.filters;
  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
    filter = _ref2[_k];
    k$.appCore.push('ks:ang-app/filters/' + filter);
  }

  jspmResources = jspmResources.concat(k$settings.apps);

  jspmResources = jspmResources.concat(k$.appCore);

  jspm["import"](jspmResources, function($, app, angular) {
    return $(document).ready(function() {
      var i;
      document.body.className += 'loaded';
      angular.bootstrap(document, ['app']);
      i = 0;
      while (i < k$.readyFxs.length) {
        k$.readyFxs[i]();
        i++;
      }
      return k$.ready = function(fx) {
        return fx();
      };
    });
  })["catch"](function(e) {
    return setTimeout(function() {
      throw e;
    }, 1000);
  });

}).call(this);
