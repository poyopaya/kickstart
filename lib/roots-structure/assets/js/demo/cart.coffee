k$.cartCtrl = ($scope) -> 
	$scope.products = k$.allProducts
	$scope.productForId = (id) ->
		productIndex = 0
		$.grep($scope.products, (e, i) -> productIndex = i if e.id == id )
		$scope.products[productIndex]
	$scope.lastRemoved = null
	$scope.purchases = [
		product: $scope.productForId(2)
		quantity: 2
	,
		product: $scope.productForId(12)
		quantity: 4
	,
		product: $scope.productForId(19)
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