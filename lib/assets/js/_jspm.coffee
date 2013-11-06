# JSPM

# Ask Guy if this can just be default in JSPM

jspm.config
	locations: 
		kickstrap: './apps'
	map:
		# 'jquery': 'jquery@2.0'
		# 'bootstrap': 'bootstrap@3.0.0'
		# 'angular': 'angular@1.1.5/angular'
		# 'angularFire': 'angularFire@0.3'
		# 'firebase': '//cdn.firebase.com/v0/firebase.js'
		'jquery': 		'./js/temp/jquery'
		'bootstrap': 	'./js/temp/bootstrap'
		'angular': 		'./js/temp/angular'
		'angularFire': 	'./js/temp/angularfire'
		'firebase': 	'./js/temp/firebase'
	shim:
		'./js/temp/jquery': 	true
		'./js/temp/angular': 	true
		'./js/temp/firebase': 	true
		'./js/temp/bootstrap': 			['jquery']
		'./js/temp/angularfire': 			['angular', 'firebase']
