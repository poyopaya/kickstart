define [
	'angular' 
	'ang-app'
], (angular) ->
	require ['./js/domready'], (domReady) ->
		console.log domready 
		domReady ->
			angular.bootstrap document, ['app']