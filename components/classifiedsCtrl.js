/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ['ClassifiedsFac', '$mdSidenav', '$mdToast',ClassifiedsCtrl]);

  // Main Controller Function
  function ClassifiedsCtrl(ClassifiedsFac, $mdSidenav, $mdToast) {
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
    
    // Adding a Classified 
    vm.classified = {};
    vm.saveClassified = function () {
      if(vm.classified){
        vm.classified.contact = vm.contact;
        vm.classifieds.push(vm.classified);
        vm.classified = {};
        vm.closeSideNav();
        $mdToast.show(
          $mdToast.simple()
                  .content('Classified Saved!')
                  .position('top, right')
                  .hideDelay(3000)
        );
      }
      
    }
  }
}());