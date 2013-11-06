define ['./ang-app'], (app) ->
	return app.config ['$routeProvider', ($routeProvider) ->
		$routeProvider.when '/', 
			controller: FeaturesCtrl
	]