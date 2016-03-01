'use strict';

/**
 * @ngdoc overview
 * @name baseballAngularApp
 * @description
 * # baseballAngularApp
 *
 * Main module of the application.
 */
angular
    .module('baseballAngularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
      ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/main.html',  // put everthing in here to start
                controller: 'MainCtrl'
              })
            .when('/database', {
                templateUrl: './views/database.html',
                controller: 'DatabaseCtrl'
            })
            .when('/database/details/:id', {
                templateUrl: './views/database_details.html',
                controller: 'DatabaseCtrl'
            })
            .when('/players', {
                templateUrl: './views/players.html',
                controller: 'PlayerCtrl'
            })
            .when('/players/details/:id', {
                templateUrl: './views/players_details.html',
                controller: 'PlayerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});
