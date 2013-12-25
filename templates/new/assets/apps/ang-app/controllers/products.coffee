define ['./module'], (controllers) ->
	controllers.controller 'ProductsCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.featuredProducts = []
		$scope.products = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/products/"
		$scope.products.$on 'loaded', () ->

			# CRUD

			$scope.create = () ->
				$scope.products.$add
					name: 'New Item'
					desc: 'Description'
					img: '...'
					price: 0
			$scope.update = () ->
				try 
					$scope.products.$save $scope.selectedProductKey
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
				( $scope.products.$remove key if $scope.products[key].val ) for key in $scope.products.$getIndex()
				$scope.countSelected()

			# SETTINGS

			$scope.selectAll = (val) ->
				$scope.products[key].val = val for key in $scope.products.$getIndex()
				$scope.countSelected()
			$scope.selectionCount = 0
			$scope.countSelected = () ->
				$scope.selectionCount = 0
				( $scope.selectionCount++ if $scope.products[key].val ) for key in $scope.products.$getIndex()
			$scope.selectedProductKey = null
			$scope.selectProduct = (key) ->
				$scope.selectedProductKey = key


			# Pagination

			$scope.genericItems = $scope.products # Loosely-couples with pagination include
			$scope.currentPage = 0
			$scope.pageSize = 10
			$scope.numPages = () ->
				Math.ceil $scope.genericItems.length/$scope.pageSize
			$scope.startFrom = () ->
				$('.product-img').popover()
				$scope.currentPage * $scope.pageSize + 3 # We used up the first three in the sub-featured items
			$scope.increment = () -> $scope.currentPage++
			$scope.deincrement = () -> $scope.currentPage--
			$scope.setCurrentPage = (number) ->
				$scope.currentPage = number

			# Shopping Cart

			$scope.lastRemoved = null
			$scope.purchases = [
				product: $scope.products.$child 2
				quantity: 2
			,
				product: $scope.products.$child 12
				quantity: 4
			,
				product: $scope.products.$child 19
				quantity: 1
			]
			$scope.deletePurchase = (id) ->
				purchaseIndex = 0
				$.grep($scope.purchases, (e, i) -> purchaseIndex = i if e.product.id == id)
				$scope.lastRemoved = $scope.purchases[purchaseIndex]
				$scope.purchases.splice(purchaseIndex, 1)
			$scope.restorePurchase = (purchase) ->
				$scope.purchases.push(purchase)
				$scope.lastRemoved = null
			$scope.total = () ->
				return $scope.purchases.reduce(
					(a, b) ->
						return { quantity: a.quantity + (b.quantity * b.product.price)}
				, {quantity: 0}).quantity

	]