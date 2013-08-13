angular.module('kickstrap'
, []
)
k$.featureCtrl = ($scope) ->
	$scope.features = [
		name: 'Bootstrap 3'
		summary: 'The most popular CSS framework, now extended.'
		description: 'Bootstrap 3 is a mobile-first CSS and JS framework making UI creation a snap on any screen.'
		learnMore:
			link: 'http://getbootstrap.com'
			title: 'the Bootstrap homepage'
	,
		name: 'JSPM'
		summary: 'An app store for your website'
		description: '"JSPM is a browser module loader that will load any module format (ES6 / AMD / CJS) locally or even directly from NPM and Github utilising SPDY push."'
		learnMore: 
			link: 'http://jspm.io'
			title: 'JSPM.io'
	,
		name: 'Roots.cx'
		summary: 'Powerful compilation, live testing, and deployment'
		description: 'No more third-party less compilers or requirement to deploy your own server. Kickstrap is now a custom Roots template. This means it utilizes Roots\' native CoffeeScript, Jade, and Stylus compilation, Heroku deployment, watch mode, plugins, and live reloading.'
		learnMore:
			link: 'http://roots.cx'
			title: 'Roots.cx'
	,
		name: 'Angular.js'
		summary: 'Google\'s front-end MVC for blindingly fast web apps'
		description: '"HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop...."'
		learnMore:
			link: 'http://angularjs.org'
			title: 'Angular JS'
	,
		name: 'Included templates'
		summary: 'Hack away at our included example pages'
		description: 'In version 1 of Kickstrap, I realized users much prefered pre-built templates over blank slates. I\'ve included several simple templates for common application page types--already wired up with Angular.js. Check them out in the navbar at the top.'
	]
	$scope.slug = (str) ->
		# Thanks: https://gist.github.com/keenahn/3184241
		str = str.replace(/^\s+|\s+$/g, "").toLowerCase()
		from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
		to   = "aaaaeeeeiiiioooouuuunc------"
		for i in [i..from.length]
			str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
		str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
		return str