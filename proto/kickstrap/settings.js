// JSPM
// ====

jspm.config({
	locations: {
		kickstrap: 'https://github.jspm.io/guybedford/kickstrap-proto@master'
	}
})

// APPS
// ====

jspm.import([
	// List your apps here.
	'jspm:jquery',
	'kickstrap:less',
	'kickstrap:core/js',			
	'kickstrap:core/bootstrap',
	'kickstrap:core/fontawesome',
	'kickstrap:core/angular',

// THEME
// =====

	'kickstrap:themes/monaco'		

]
, function($, k$) {

// BASIC SITE SETTINGS
// ===================

k$.settings = {
	mode: 'development'
	// Choose "development" or "production"
}

// LESS
// ====

less = {
  env: k$.settings.mode
}

})