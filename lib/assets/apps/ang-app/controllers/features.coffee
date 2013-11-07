define ['./module'], (controllers) ->
	controllers.controller 'FeaturesCtrl', ['$scope', 'angularFire', ($scope, angularFire) ->
		$scope.features = []

		features = new Firebase 'https://' + k$.settings.firebaseName + '.firebaseio.com/features/'
		promise = angularFire features, $scope, 'features'

		$scope.slug = (str) ->
			# Thanks: https://gist.github.com/keenahn/3184241
			str = str.replace(/^\s+|\s+$/g, "").toLowerCase()
			from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
			to   = "aaaaeeeeiiiioooouuuunc------"
			for i in [i..from.length]
				str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
			str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
			return str
		$scope.selectedFeature = $scope.features[0]
		$scope.setSelectedFeature = (feature) ->
			$scope.selectedFeature = feature
	]