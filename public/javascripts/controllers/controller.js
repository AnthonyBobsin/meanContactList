var myApp = angular.module('MyApp', [])

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from client side controller")

  var refresh = function() {
    $http.get('/contactlist').success(function(response) {
      console.log("I got the data I requested")
      $scope.contactList = response
      $scope.newContact = ""
    })
  }

  refresh()

  $scope.addContact = function() {
    console.log($scope.newContact)
    $http.post('/contactlist', $scope.newContact).success(function(response) {
      console.log(response)
      refresh()
    })
  }

  $scope.update = function() {
    console.log($scope.newContact._id)
    $http.put('/contactlist/' + $scope.newContact._id, $scope.newContact).success(function(response) {
      refresh()
    })
  }

  $scope.remove = function(id) {
    console.log(id)
    $http.delete('/contactlist/' + id).success(function(response) {
      refresh()
    })
  }

  $scope.edit = function(id) {
    console.log(id)
    $http.get('/contactlist/' + id).success(function(response) {
      $scope.newContact = response
    })
  }
}])