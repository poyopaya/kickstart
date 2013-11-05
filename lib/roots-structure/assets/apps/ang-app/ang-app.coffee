# Add your angular modules here.
mods = [
	# 'products'
	# 'messages'
	'features'
]

define ['jquery', 'angular', 'firebase', 'kickstrap:-angularFire/-angularFire'], ($, angular, Firebase, angularFire) ->
	_mods = []
	(_mods = _mods.concat ['kickstrap:ang-app/' + mod] ) for mod in mods
	mods.concat ['firebase']
	require _mods, () ->
		angular.module k$.settings.appName, mods
		angular.bootstrap document, [k$.settings.appName]