define [
	'angular' 
	'ang-app'
], (angular) ->
	require ['./js/domready'], (domReady) ->
		domReady ->
			angular.bootstrap document, ['app']