/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds', ['ngMaterial','angular.filter'])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
    });

}());