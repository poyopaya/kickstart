(function() {
  window.k$ = {
    apps: ['ks:sample-app', 'ks:tinygrowl', 'ks:ang-app', 'ks:kickstrap-logo'],
    angular: {
      controllers: ['messages', 'products', 'docs', 'home', 'login'],
      directives: ['enter', 'visible', 'repeat'],
      filters: ['startFrom'],
      pages: ['first-steps', 'apps', 'api', 'coffeescript', 'jade', 'pages', 'partials', 'roots', 'stylus', 'templates', 'acknowledgments', 'optimizations', 'social-login', 'growls']
    },
    firebaseNameVersion: 'v2-0',
    core: ['jquery', 'bootstrap', 'angular', 'fontawesome']
  };

  System.map = {
    'jquery': 'github:components/jquery@2.0',
    'bootstrap': 'github:twbs/bootstrap@3.0/js/bootstrap',
    'angular': 'github:angular/bower-angular@1.2.1',
    'angularFire': 'github:firebase/angularFire@0.5',
    'ang-app': 'ks:ang-app',
    'angular-route': 'ks:ang-app/resources/angular-route',
    'gatedScope': 'ks:ang-app/resources/gatedScope',
    'fontawesome': 'github:FortAwesome/Font-Awesome@4.0.3/css/font-awesome.min.css!',
    'ngProgress': 'ks:ang-app/resources/ngprogress',
    'firebaseSimpleLogin': 'ks:ang-app/resources/firebaseSimpleLogin',
    'css': 'github:jspm/plugin-css/css'
  };

  System.shim = {
    'github:angular/bower-angular@1.2.1/angular.min': {
      exports: 'angular'
    },
    'ks:ang-app/resources/angular-route': ['angular'],
    'ks:ang-app/resources/ngprogress': ['angular'],
    'ks:ang-app/resources/gatedScope': ['angular']
  };

}).call(this);
