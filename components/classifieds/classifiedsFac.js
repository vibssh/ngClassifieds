/*global angular, jQuery, console, $ */

(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .factory('ClassifiedsFac', ['$http', '$firebaseArray', ClassifiedFac]);


      var dataUrl = new Firebase('https://happymarkup.firebaseio.com/');
    
      function ClassifiedFac($http, $firebaseArray){
        return {
          dataUrl: $firebaseArray(dataUrl)
        }
      }

}());