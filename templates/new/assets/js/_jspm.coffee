# JSPM

jspm.config
	endpoints:
		ks: 
			location: './apps'
			main: 'main'
			format: 'auto'

	# map basically allows easy "shortcut" names for packages
	map:
		'jquery': 				'github:components/jquery@2.0.3'
		'bootstrap': 			'github:twbs/bootstrap@3.0.2/js/bootstrap'
		'bootstrap@3.0':  		'github:twbs/bootstrap@3.0.2/js/bootstrap'
		'angular': 				'cdnjs:angular.js/1.2.1'
		'angularFire': 			'github:firebase/angularFire@0.3.1'
		'ang-app': 				'ks:ang-app'
		'angular-route':		'ks:ang-app/resources/angular-route'
		'ng-progress':			'ks:ang-app/resources/ng-progress'
		'fontawesome': 			'cdnjs:font-awesome/4.0.1/css/font-awesome.min.css!'

	# packages are the primary unit of configuration
	packages:

		'cdnjs:angular.js/1.2.1':
			main: 'angular.min'
			shim:
				'angular.min':
					exports: 'angular'

		'ks:ang-app':
			shim:
				'resources/angular-route': ['angular']
				'resources/ng-progress': ['angular']
