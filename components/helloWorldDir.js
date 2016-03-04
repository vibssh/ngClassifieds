/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .directive('helloWorld', function () {
      return {
        restrict: 'E',
        template: '<h1>{{vm.message}}</h1>'
      };
    });
}());