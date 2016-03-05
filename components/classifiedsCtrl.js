/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ['ClassifiedsFac', '$mdSidenav', ClassifiedsCtrl]);

  // Main Controller Function
  function ClassifiedsCtrl(ClassifiedsFac, $mdSidenav) {
    var vm = this;
    ClassifiedsFac.then(function (response) {
      vm.classifieds = response.data;
      console.info(vm.classifieds);
    });
    
    // Navigation Side Bar Toggle
    vm.openSideNav = function(){
      $mdSidenav('left').open();
    };
    vm.closeSideNav = function(){
      $mdSidenav('left').close();
    };
    
    vm.contact = {
      name: 'Leo Jacobs',
      phone: '044-7515281100',
      email: 'vibs.sh@gmail.com'
    }
    
    
    
  }
}());