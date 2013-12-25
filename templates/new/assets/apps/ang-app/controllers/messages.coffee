define ['./module'], (controllers) ->
	controllers.controller 'MessagesCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.threads = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/threads/"
		$scope.contacts = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/contacts/"
		$scope.contacts.$on 'loaded', ->

			# CRUD

			$scope.create = () ->
				$scope.contacts.$add
					fName: 'New'
					lName: 'Contact'
					email: 'newcontact@example.com'
					img: '...'
					bio: '...'
			$scope.update = () ->
				try 
					$scope.contacts.$save $scope.selectedContactKey
					$.growl
						title: 'Saved successfully'
						type: 'success'
						delay: 1000
				catch error
					$.growl
						title: 'Could not save:<br>'
						text: error
						type: 'danger'
						delay: 1000
			$scope.delete = () ->
				( $scope.contacts.$remove key if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
				$scope.countSelected()

			# SETTINGS

			$scope.selectAll = (val) ->
				$scope.contacts[key].val = val for key in $scope.contacts.$getIndex()
				$scope.countSelected()
			$scope.selectionCount = 0
			$scope.countSelected = () ->
				$scope.selectionCount = 0
				( $scope.selectionCount++ if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
			$scope.selectedContactKey = null
			$scope.selectContact = (key) ->
				$scope.selectedContactKey = key

		$scope.contactForId = (id) ->
			contactIndex = 0
			$.grep($scope.contacts, (e, i) -> contactIndex = i if e.id == id )
			$scope.contacts[contactIndex]
		$scope.selectedThread = $scope.threads[0]
		$scope.setSelectedThread = (thread) ->
			$scope.selectedThread = thread
	]