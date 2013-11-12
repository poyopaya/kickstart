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
		'angular': 			'angular@1.1.5/angular'
		'angularFire': 		'angularFire@0.3.1'
		'ang-app': 			'ks:ang-app'
	shim: 
		'cdnjs:angular.js/1.1.5/angular':
			exports: 'angular'
