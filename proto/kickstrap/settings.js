// APPS
// ====

ks.apps = [
	'pinesnotify'
	, 'bootstrap'	
	, 'colorschemer'
	, 'ping'
]

// BASIC SITE SETTINGS
// ===================

ks.settings = {

	mode: 'development'
	// Choose "development" or "production"

// CUSTOM DIRECTORIES
// ==================

	, dir: {
		
		root: '/'
		// Location of the "kickstrap" folder relative to site's root.
		
		, apps: ks.settings.root + 'kickstrap/apps/'
		// Apps path
		
		// Themes and extras paths should be set in settings.less
		
	}

}



