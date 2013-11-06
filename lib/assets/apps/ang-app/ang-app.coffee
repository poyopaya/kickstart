# Add your angular modules here.
mods = [
	# 'products'
	# 'messages'
	'features'
]

define ['jquery', 'angular', 'firebase', 'angularFire', 'angularResource'], ($, angular, Firebase) ->
	_mods = []
	(_mods = _mods.concat ['kickstrap:ang-app/' + mod] ) for mod in mods
	mods.concat ['firebase', 'ngResource']
	window.app = angular.module k$.settings.appName, mods
	angular.bootstrap document, [k$.settings.appName]
	jspm.import _mods