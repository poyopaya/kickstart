define [
	'angular'
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
		for page in k$.settings.angular.pages
			$routeProvider.when '/' + page, 
				templateUrl: '/partials/' + page + '.html'
	]