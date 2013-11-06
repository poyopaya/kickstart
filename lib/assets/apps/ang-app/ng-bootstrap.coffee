define [
	'angular' 
	'ang-app'
], (ng) ->
	require ['domReady!'], (document) ->
		ng.bootstrap document, ['app']