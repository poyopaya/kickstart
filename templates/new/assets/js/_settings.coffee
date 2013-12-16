# BASIC SITE SETTINGS

window.k$ =

	# Apps
	# Local apps to be loaded on every page.
	apps: [
		'ks:sample-app'
		'ks:tinygrowl'
		'ks:ang-app'
		'ks:kickstrap-logo'
	]

	# Partials
	# These are the name of both the "#/" path and the .html file that will load in ng-view
	pages: [
		'first-steps'
		'apps'
		'coffeescript'
		'jade'
		'pages'
		'partials'
		'roots'
		'stylus'
		'templates'
		'acknowledgments'
		'optimizations'
	]

	# Caching mode
	# mode: 'dev'

	# Firebase URI
	# firebaseName: 'kickstrap-demo'

	# Only edit if you know what you're doing.
	core: [
		'jquery'
		'bootstrap'
		'angular'
	]

jspm.config
	endpoints:
		ks: 
			location: 	'./apps'
			main: 		'main'
			format: 	'auto'

	# map basically allows easy "shortcut" names for packages
	map:
		'jquery': 				'github:components/jquery@2.0'
		'bootstrap': 			'github:twbs/bootstrap@3.0/js/bootstrap'
		'bootstrap@3.0':  		'github:twbs/bootstrap@3.0/js/bootstrap'
		'angular': 				'cdnjs:angular.js/1.2.1'
		'angularFire': 			'github:firebase/angularFire@0.3'
		'ang-app': 				'ks:ang-app'
		'angular-route':		'ks:ang-app/resources/angular-route'
		'gatedScope':			'ks:ang-app/resources/gatedScope'
		'fontawesome': 			'cdnjs:font-awesome/4.0/css/font-awesome.min.css!'

	# packages are the primary unit of configuration
	packages:

		'cdnjs:angular.js/1.2.1':
			main: 'angular.min'
			shim:
				'angular.min':
					exports: 'angular'

		'ks:ang-app':
			shim:
				'resources/angular-route': 				['angular']
				'resources/gatedScope': 				['angular']