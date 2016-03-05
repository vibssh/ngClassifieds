/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ['ClassifiedsFac', '$mdSidenav', '$mdToast', '$mdDialog', ClassifiedsCtrl]);

  // Main Controller Function
  function ClassifiedsCtrl(ClassifiedsFac, $mdSidenav, $mdToast, $mdDialog) {
    var vm = this;
    ClassifiedsFac.then(function (response) {
      vm.classifieds = response.data;
      console.info(vm.classifieds);
    });

    // Navigation Side Bar Toggle
    vm.openSideNav = function () {
      $mdSidenav('left').open();
    };
    vm.closeSideNav = function () {
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
      if (vm.classified) {
        vm.classified.contact = vm.contact;
        vm.classifieds.push(vm.classified);
        vm.classified = {};
        vm.closeSideNav();
        showToast('Classified Saved');

      }

    }

    // Editing a Classified
    vm.editClassified = function (classified) { // This Classified passed in a parameter is same that is in the ng-repeat object  
      vm.editing = true;
      vm.openSideNav();
      vm.classified = classified;
    }

    // Save Edit Button
    vm.saveEdit = function () {
      vm.editing = false;
      vm.classified = {};
      vm.closeSideNav();
      showToast('Edit Saved!');
    }


    //Deleting a classified
    vm.deleteClassified = function (event, classified) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete' + ' ' + classified.title + '?')
        .ok('Yes')
        .cancel('No')
        .targetEvent(event);
      $mdDialog.show(confirm)
        .then(function () {
          var index = vm.classifieds.indexOf(classified);
          vm.classifieds.splice(index, 1);
        }, function () {
          
      });
    }

    // Common Show Toast Method
    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
        .content(message)
        .position('top, right')
        .hideDelay(3000)
      );
    }





  } // End of Classified Function
}());