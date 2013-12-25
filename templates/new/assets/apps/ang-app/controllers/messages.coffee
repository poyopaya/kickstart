define ['./module'], (controllers) ->
	controllers.controller 'MessagesCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.threads = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/threads/"
		$scope.contacts = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/contacts/"
		$scope.contacts.$on 'loaded', ->

			# CRUD - Contacts

			$scope.contacts.create = () ->
				$scope.contacts.$add
					fName: 'New'
					lName: 'Contact'
					email: 'newcontact@example.com'
					img: '...'
					bio: '...'
			$scope.contacts.update = () ->
				try 
					$scope.contacts.$save $scope.contacts.selectedKey
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
			$scope.contacts.delete = () ->
				( $scope.contacts.$remove key if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
				$scope.contacts.countSelected()

			# SETTINGS - Contacts

			$scope.contacts.selectAll = (val) ->
				$scope.contacts[key].val = val for key in $scope.contacts.$getIndex()
				$scope.contacts.countSelected()
			$scope.contacts.selectionCount = 0
			$scope.contacts.countSelected = () ->
				$scope.contacts.selectionCount = 0
				( $scope.contacts.selectionCount++ if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
			$scope.contacts.selectedKey = null
			$scope.contacts.select = (key) ->
				$scope.contacts.selectedKey = key

		$scope.threads.$on 'loaded', ->

			# CRUD - Threads

			$scope.threads.create = () ->
				$scope.threads.$add
					subject: 'New'
					read: false
			$scope.threads.update = () ->
				try 
					$scope.threads.$save $scope.threads.selectedKey
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
			$scope.threads.delete = () ->
				( $scope.threads.$remove key if $scope.threads[key].val ) for key in $scope.threads.$getIndex()
				$scope.threads.countSelected()

			# SETTINGS - Threads

			$scope.threads.selectAll = (val) ->
				$scope.threads[key].val = val for key in $scope.threads.$getIndex()
				$scope.threads.countSelected()
			$scope.threads.selectionCount = 0
			$scope.threads.countSelected = () ->
				$scope.threads.selectionCount = 0
				( $scope.threads.selectionCount++ if $scope.threads[key].val ) for key in $scope.threads.$getIndex()
			$scope.threads.selectedKey = null
			$scope.threads.select = (key) ->
				$scope.threads.selectedKey = key

		$scope.contactForId = (id) ->
			contactIndex = 0
			$.grep($scope.contacts, (e, i) -> contactIndex = i if e.id == id )
			$scope.contacts[contactIndex]
		$scope.selectedThread = $scope.threads[0]
		$scope.setSelectedThread = (thread) ->
			$scope.selectedThread = thread
	]