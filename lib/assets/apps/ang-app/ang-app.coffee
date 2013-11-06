define [
	'angular' 
	'./controllers/index'
], (angular) ->
	angular.module 'app', [
		'app.controllers'
	]