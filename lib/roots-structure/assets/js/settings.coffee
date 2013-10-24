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
		'cdnjs:jquery/1.10.2/jquery'
		'cdnjs:twitter-bootstrap/3.0.0/js/bootstrap'
		'cdnjs:twitter-bootstrap/3.0.0/css/bootstrap.css!'
		'cdnjs:angular.js/1.1.5/angular'
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