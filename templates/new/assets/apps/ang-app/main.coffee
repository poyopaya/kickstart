define [
	'angular' 
	'./controllers/index'
	'./directives/index'
	'./filters/index'
	'angularFire'
	'angular-route'
], (angular) ->
	angular.module('app', [
		'app.controllers'
		'app.directives'
		'app.filters'
		'firebase'
		'ngRoute'
	]).config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
		for page in k$.settings.pages
			$routeProvider.when '/' + page, 
				templateUrl: '/partials/' + page + '.html'
	]