/*global angular, jQuery, console, $ */

(function () {
  'use strict';
  
  angular
    .module('ngClassifieds')
    .factory('ClassifiedsFac', ClassifiedFac);
    
    var dataUrl = '/data/classifieds.json';
  
    function ClassifiedFac($http){
      return $http.get(dataUrl);
    }
  
}());