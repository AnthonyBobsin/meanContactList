var myApp = angular.module('MyApp', [])

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from client side controller")
}])