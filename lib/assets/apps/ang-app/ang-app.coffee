define [
	'angular' 
	'./controllers/index'
], (ng) ->
	return ng.module 'app', [
		'app.controllers'
	]