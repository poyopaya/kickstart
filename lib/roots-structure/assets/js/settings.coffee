#= require "_badge"
#= require "_jspm"

# BASIC SITE SETTINGS

window.k$ =
	apps: [
		# 'fontawesome'
	]
	version: 		'2.0.0 alpha'
	theme: 			'monaco'
	mode: 			'development'
	core: 
		modules: [
			'jquery'
			'bootstrap'
			'cdnjs:twitter-bootstrap/3.0.0/css/bootstrap.css!'
			'angular'
		]

	jspmResources: ->
		# k$.apps[app] = 'kickstrap:' + k$.apps[app] for app of k$.apps
		return k$.apps
			.concat('./themes/' + k$.theme + '.css!')
			.concat(k$.core.modules)
	firebaseName: 'kickstrap-demo'
	readyFxs: []
	ready: (fx) -> 
		k$.readyFxs.push(fx)

jspm.import k$.jspmResources(), ($, k$, angular) ->


# LESS

less =
  env: k$.mode