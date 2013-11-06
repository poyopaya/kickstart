define [
	'angular' 
	'ang-app'
], (angular) ->
	require ['domReady!'], (domReady) ->
		domReady ->
			angular.bootstrap document, ['app']