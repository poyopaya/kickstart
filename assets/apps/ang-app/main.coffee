define [
	'angular' 
	'./controllers/index'
	'./directives/index'
	'./filters/index'
	'angularFire'
	'angular-route'
	'ng-progress'
	'./resources/ng-progress.css!'
], (angular) ->
	angular.module('app', [
		'app.controllers'
		'app.directives'
		'app.filters'
		'firebase'
		'ngRoute'
		'ngProgress'
	]).config ['$routeProvider', ($routeProvider) ->
		$routeProvider.when '/features', 
			templateUrl: '/partials/features.html'
		$routeProvider.when '/apps', 
			templateUrl: '/partials/apps.html'
		$routeProvider.when '/coffeescript', 
			templateUrl: '/partials/coffeescript.html'
		$routeProvider.when '/jade', 
			templateUrl: '/partials/jade.html'
		$routeProvider.when '/pages', 
			templateUrl: '/partials/pages.html'
		$routeProvider.when '/partials', 
			templateUrl: '/partials/partials.html'
		$routeProvider.when '/roots', 
			templateUrl: '/partials/roots.html'
		$routeProvider.when '/stylus', 
			templateUrl: '/partials/stylus.html'
		$routeProvider.when '/templates', 
			templateUrl: '/partials/templates.html'
	]