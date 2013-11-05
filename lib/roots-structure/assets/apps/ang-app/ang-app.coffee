# Add your angular modules here.

mods = [
	'products'
	'messages'
	'features'
]

define ['jquery', 'angular'], ($, angular) ->
	_mods = []
	(_mods = _mods.concat ['kickstrap:ang-app/' + mod] ) for mod in mods
	_mods.concat ['firebase']
	mods.concat ['firebase']
	require _mods, () ->
		angular.module k$.settings.appName, mods
		angular.bootstrap document, [k$.settings.appName]