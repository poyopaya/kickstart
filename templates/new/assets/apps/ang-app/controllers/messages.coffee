define ['./module'], (controllers) ->
	controllers.controller 'MessagesCtrl', ['$scope', '$firebase', ($scope, $firebase) ->
		$scope.threads = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/threads/"
		$scope.contacts = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/contacts/"

		$scope.contactForId = (id) ->
			contactIndex = 0
			$.grep($scope.contacts, (e, i) -> contactIndex = i if e.id == id )
			$scope.contacts[contactIndex]
		$scope.selectedThread = $scope.threads[0]
		$scope.setSelectedThread = (thread) ->
			$scope.selectedThread = thread
	]