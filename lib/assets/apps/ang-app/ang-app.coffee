# Add your angular modules here.
mods = [
	# 'products'
	# 'messages'
	'features'
]

define ['jquery', 'angular', 'angularFire'], ($, angular, Firebase) ->
	_mods = []
	(_mods = _mods.concat ['kickstrap:ang-app/' + mod] ) for mod in mods
	mods.concat ['firebase']
	window.app = angular.module k$.settings.appName, mods
	angular.bootstrap document, [k$.settings.appName]
	jspm.import _mods