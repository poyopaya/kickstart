define ['./module'], (controllers) ->
	controllers.controller 'SectionsCtrl', ['$scope', 'angularFire', '$location', 'ngProgress', ($scope, angularFire, $location, ngProgress) ->
		ngProgress.start()
		$scope.sections = [
			name: 'First Steps'
			path: 'first-steps'
		,
			name: 'Features'
			path: 'features'
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
		ngProgress.complete()
	]