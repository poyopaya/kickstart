(function() {
  console.log('%cKickstrap', 'font-style:italic;font-family: helvetica neue, helvetica, sans-serif;font-size:20px;color:#FDD726;text-shadow:0 1px 0 #D1B43B,0 2px 0 #D1B43B,0 3px 0 #D1B43B,0 4px 0 #D1B43B,0 5px 0 #D1B43B,0 6px 1px rgba(30,28,23,.1),0 0 5px rgba(30,28,23,.1),0 1px 3px rgba(30,28,23,.3),0 3px 5px rgba(30,28,23,.2),0 5px 10px rgba(30,28,23,.25),0 10px 10px rgba(30,28,23,.2),0 20px 20px rgba(30,28,23,.15);');

}).call(this);

(function() {
  window.jspm.config({
    locations: {
      kickstrap: 'https://github.jspm.io/guybedford/kickstrap-proto@master'
    }
  });

}).call(this);

(function() {
  var less;

  window.k$ = {
    apps: ['fontawesome', 'bootstrap', 'angular'],
    version: '2.0.0 alpha',
    theme: 'monaco',
    mode: 'development',
    core: ['jspm:jquery', 'kickstrap:less', 'kickstrap:core/js'],
    jspmResources: function() {
      var app;
      for (app in k$.apps) {
        k$.apps[app] = 'kickstrap:' + k$.apps[app];
      }
      return k$.apps.concat('kickstrap:themes/' + k$.theme).concat(k$.core);
    },
    readyFxs: [],
    ready: function(fx) {
      return k$.readyFxs.push(fx);
    }
  };

  jspm["import"](k$.jspmResources(), function($, k$) {});

  less = {
    env: k$.mode
  };

}).call(this);
