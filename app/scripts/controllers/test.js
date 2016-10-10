'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('TestCtrl', function ($scope, $rootScope ) {

  	$rootScope.flash={
  		messages:'message',
  		type:'success'
  	};


    $scope.UserInfo={
    	email:"has191210@qq.com",
    	password:"password",
    	autoLogin:"true"
    };

    $scope.loadDate=function(){
      console.log("Loading data");
    }

    $scope.loader2=function(){
      console.log("111111111111111111");
    }

  });
