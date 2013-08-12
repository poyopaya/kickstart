(function() {
  var k$, less;

  jspm.config({
    locations: {
      kickstrap: 'https://github.jspm.io/guybedford/kickstrap-proto@master'
    }
  });

  k$ = {
    apps: ['select2'],
    theme: 'kickstrap:themes/monaco',
    mode: 'development',
    core: ['jspm:jquery', 'kickstrap:less', 'kickstrap:core/js', 'kickstrap:core/bootstrap', 'kickstrap:core/fontawesome', 'kickstrap:core/angular'],
    jspmResources: function() {
      return k$.apps.concat(k$.theme);
    }
  };

  jspm["import"](k$.jspmResources, function($, k$) {});

  less = {
    env: k$.settings.mode
  };

}).call(this);
