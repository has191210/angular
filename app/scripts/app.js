'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
  .module('angular1App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 'nemLogging','ui-leaflet'
    

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
     .when('/fpmap', {
        templateUrl: 'views/fpmap.html',
        controller: 'FpmapCtrl',
        controllerAs: 'fpmap'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
