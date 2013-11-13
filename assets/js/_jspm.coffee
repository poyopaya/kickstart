# JSPM

jspm.config
	endpoints:
		ks:
			location: './apps'
			normalize: (name) ->
				name = name + '/main' if (name.split('/').length == 1)
				return name
	map:
		'jquery': 			'jquery@2.0'
		'bootstrap': 		'github:twbs/bootstrap@3.0.2/js/bootstrap'
		'angular': 			'angular@1.2.0/angular'
		'angularFire': 		'angularFire@0.3.1'
		'ang-app': 			'ks:ang-app'
		'angular-route':	'ks:ang-app/resources/angular-route'
	shim: 
		'cdnjs:angular.js/1.2.0/angular':
			exports: 'angular'
		'ks:ang-app/resources/angular-route': ['angular@1.2.0/angular']
