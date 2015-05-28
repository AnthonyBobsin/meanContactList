var myApp = angular.module('MyApp', [])

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from client side controller")

	var personOne = {
		name: 'Alex',
		email: 'alex@email.com',
		number: '444-555-6666'
	}

	var personTwo = {
		name: 'Emily',
		email: 'emily@email.com',
		number: '444-666-5555'
	}

	var personThree = {
		name: 'John',
		email: 'johnAppleseed@email.com',
		number: '333-444-5555'
	}

	var contactList = [personOne, personTwo, personThree]
	$scope.contactList = contactList

}])