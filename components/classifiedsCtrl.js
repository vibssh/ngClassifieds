/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ['ClassifiedsFac',ClassifiedsCtrl]);

  function ClassifiedsCtrl(ClassifiedsFac) {
    var vm = this;
    ClassifiedsFac.then(function (response){
        vm.classifieds = response.data;
        console.info(vm.classifieds);
    });
   
    
  }

}());