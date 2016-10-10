'use strict';

/**
 * @ngdoc directive
 * @name angular1App.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('angular1App')
  .directive('tt', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
        element.bind('mouseenter', function(){
        	//scope.loadDate();
        	scope.$apply(attrs.test);
        });
      }
    };
  });
