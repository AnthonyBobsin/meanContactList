var myApp = angular.module('MyApp', [])

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from client side controller")

	$http.get('/contactlist').success(function(response) {
		console.log("I got the data I requested")
		$scope.contactList = response
	})

  
}])