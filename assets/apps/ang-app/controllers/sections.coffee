define ['./module'], (controllers) ->
	controllers.controller 'SectionsCtrl', ['$scope', 'angularFire', '$location', 'ngProgress', ($scope, angularFire, $location, ngProgress) ->
		ngProgress.start()
		$scope.sections = [
			name: 'Features'
			path: 'features'
		,
			name: 'First Steps'
			path: 'first-steps'
		,
			name: 'Creating Pages'
			path: 'pages'
		,
			name: 'Creating Partials'
			path: 'partials'
		,
			name: 'Creating Apps'
			path: 'apps'
		,
			name: 'Creating Angular Templates'
			path: 'templates'
		,
			name: 'Compiling in Roots'
			path: 'roots'
		,
			name: 'Intro to CoffeeScript'
			path: 'coffeescript'
		,
			name: 'Intro to Stylus'
			path: 'stylus'
		,
			name: 'Intro to Jade'
			path: 'jade'
		]
		$scope.selectedSection = $scope.sections[0]
		$scope.setSelectedSection = (section) ->
			$scope.selectedSection = section
			$location.path(section.path)

		# Theme switcher
		$scope.themes = [
			'amelia'
			'bootstrap'
			'cerulean'
			'cosmo'
			'cyborg'
			'flatly'
			'kickstrap'
			'journal'
			'readable'
			'simplex'
			'slate'
			'spacelab'
			'united'
		]
		$scope.themePreviewUrl = ''
		$scope.setTheme = (theme) ->
			$scope.themePreviewUrl = './themes/' + theme + '.css'
			$scope.themePreviewUrl = './css/bootstrap.css' if theme == 'bootstrap'
			k$.demoStylesheet()
		ngProgress.complete()
	]