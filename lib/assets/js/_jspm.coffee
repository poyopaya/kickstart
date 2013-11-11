# JSPM

# Ask Guy if this can just be default in JSPM

jspm.config
	endpoints:
		ks:
			location: './apps'
			format: 'amd' # or 'commonjs'
			main: 'main'
	map:
		'jquery': 			'jquery@2.0'
		'bootstrap': 		'https://github.jspm.io/twbs/bootstrap@3.0.2/js/bootstrap.js'
		'angular': 			'angular@1.1.5/angular'
		'angularFire': 		'angularFire@0.3.1'
		'ang-app': 			'ks:ang-app'
	shim: 
		'cdnjs:angular.js/1.1.5/angular':
			exports: 'angular'