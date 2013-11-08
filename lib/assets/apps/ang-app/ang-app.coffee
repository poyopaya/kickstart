define [
	'angular' 
	'./controllers/index'
	'angularFire'
], (angular) ->
	console.log angular.angular
	angular.module 'app', [
		'app.controllers'
		'firebase'
	]