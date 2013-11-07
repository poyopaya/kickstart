define [
	'angular' 
	'./controllers/index'
	'./angularFire'
], (angular) ->
	angular.module 'app', [
		'app.controllers'
		'firebase'
	]