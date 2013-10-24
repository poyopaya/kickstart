#= require "_badge"
#= require "_jspm"

# BASIC SITE SETTINGS

window.k$ =
	apps: [
		# 'fontawesome'
		'./js/bootstrap'
		'./js/angular'
	]
	version: 		'2.0.0 alpha'
	theme: 			'monaco'
	mode: 			'development'
	core: [
		'jspm:jquery'
	]
	jspmResources: ->
		# k$.apps[app] = 'kickstrap:' + k$.apps[app] for app of k$.apps
		return k$.apps
			.concat('./themes/' + k$.theme)
			.concat(k$.core)
	firebaseName: 'kickstrap-demo'
	readyFxs: []
	ready: (fx) -> 
		k$.readyFxs.push(fx)

jspm.import k$.jspmResources(), ($, k$) ->


# LESS

less =
  env: k$.mode