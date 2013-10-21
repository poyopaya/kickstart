angular.module('products', ['kickstrap']).controller('ProductsCtrl', ['$scope', 'angularFire', ($scope, angularFire) ->
	ref = new Firebase 'https://' + k$.firebaseName + '.firebaseio.com/products/'
	promise = angularFire ref, $scope, 'products'
	$scope.products = k$.allProducts
	$scope.featuredId = 13
])
