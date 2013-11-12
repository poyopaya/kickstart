define [
	'angular' 
	'./controllers/index'
	'./directives/index'
	'angularFire'
	'angular-route'
], (angular) ->
	angular.module('app', [
		'app.controllers'
		'app.directives'
		'firebase'
	]).config ['$routeProvider', ($routeProvider) ->
		$routeProvider.when '/features', 
			templateUrl: '/partials/features.html'
	]