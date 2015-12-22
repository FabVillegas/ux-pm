'use strict';

/**
 * @ngdoc overview
 * @name usariaUxpmApp
 * @description
 * # usariaUxpmApp
 *
 * Main module of the application.
 */
angular
  .module('usariaUxpmApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
