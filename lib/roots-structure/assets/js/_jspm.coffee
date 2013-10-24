# JSPM

# Ask Guy if this can just be default in JSPM

jspm.config
	locations: 
		kickstrap: './apps/'
	map:
		'jquery': ['cdnjs:jquery/1.10.2/jquery']
		'bootstrap': ['cdnjs:twitter-bootstrap/3.0.0/js/bootstrap']
		'angular': ['//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular']
		'angularFire': ['cdnjs:angularFire/0.2.0/angularfire.min']
		'firebase': ['//cdn.firebase.com/v0/firebase']
	depends:
		'bootstrap': ['jquery']
		'angularFire': ['angular', 'firebase']