'use strict';

var m = angular.module('baseballAngularApp');
/**
 * @ngdoc function
 * @name baseballAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baseballAngularApp
 */
m.controller('DatabaseCtrl', function($scope, $http, $routeParams, $GamesService) {
	console.log("DatabaseCtrl loaded...");

	/**
	 * get games using api
	 */
	$scope.getGames = function() {
		$scope.games = $GamesService.query();
		/*$http.get("/api/games").success(function(response) {
			$scope.games = response;
       	});*/
	};

	/**
	 * get games by ID using api
	 */
	$scope.getGame = function() {
		var id = $routeParams.id;  // get id from url
		console.log("getting game with ID: " + id);
		$http.get("/api/games/" + id).success(function(response) {
			$scope.game = response;
       	});
	};

	/**
	 * remove game by ID when button "Delete" is clicked
	 */ 
	$scope.onDeleteClick = function(id) {
		$http.delete("/api/games/" + id).success(function() {
			window.location.href = "#/games";
       	});
	};
});