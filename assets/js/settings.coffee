#= require "_badge"
#= require "_jspm"

# BASIC SITE SETTINGS

window.k$ =
	apps: [
		'fontawesome'
		'bootstrap'
		'angular'
	]
	version: 		'2.0.0 alpha'
	theme: 			'monaco'
	mode: 			'development'
	core: [
		'jspm:jquery'
		'kickstrap:less'
		'kickstrap:core/js'
	]
	jspmResources: ->
		k$.apps[app] = 'kickstrap:' + k$.apps[app] for app of k$.apps
		return k$.apps
			.concat('kickstrap:themes/' + k$.theme)
			.concat(k$.core)

jspm.import(k$.jspmResources()
, ($, k$) ->

)

# LESS

less =
  env: k$.mode