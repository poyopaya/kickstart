console.log 'ping'
angular.module k$.settings.appName, [
	'firebase'
	'products'
	'messages'
	'features'
]
angular.bootstrap document, [k$settings.appName]