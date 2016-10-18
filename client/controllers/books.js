var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded!');
	
	$scope.getBooks = function (){
		$http.get('/api/books').success(function(response){
			//putting the api json into 'books'
			$scope.books = response;// 'books' can be accessed from books.html
		});
	}

	$scope.getBook = function (){
		var id = $routeParams.id;
		$http.get('/api/books/' + id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function (){
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href = '#/books';
		});
	}

	$scope.updateBook = function (){
		var id = $routeParams.id;
		$http.put('/api/books/' + id, $scope.book).success(function(response){
			window.location.href = '#/books';
		});
	}

	$scope.removeBook = function (id){
		$http.delete('/api/books/' + id, $scope.book).success(function(response){
			window.location.href = '#/books';
		});
	}


}]);  