/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ['ClassifiedsFac', '$scope', '$state', '$mdSidenav', '$mdToast', '$mdDialog', ClassifiedsCtrl]);

  // Main Controller Function
  function ClassifiedsCtrl(ClassifiedsFac, $scope, $state, $mdSidenav, $mdToast, $mdDialog) {

    var vm = this;
    vm.openSideNav = openSideNav;
    vm.closeSideNav = closeSideNav;
    vm.saveClassified = saveClassified;
    vm.editClassified = editClassified;
    vm.saveEdit = saveEdit;
    vm.deleteClassified = deleteClassified;
    
    vm.classifieds = ClassifiedsFac.dataUrl;
    vm.classifieds.$loaded().then(function (classifieds){
      vm.categories = getCategories(classifieds);
    });

//    ClassifiedsFac.then(function (response) {
//      vm.classifieds = response.data;
//      var classifieds = vm.classifieds;
//
//      //Getting unique Categories
//      vm.categories = getCategories(vm.classifieds);
//
//    });

    // Function to loop through the categories and get the unique one
    function getCategories(categories) {
      var categories = [];
      angular.forEach(vm.classifieds, function (item) {
        angular.forEach(item.categories, function (value) {
          categories.push(value);
        });
      });

      return _.uniq(categories);
    }

    // Adding data
    $scope.$on('newClassified', function (event, classified) {
//      classified.id = vm.classifieds.length + 1;
//      vm.classifieds.push(classified);
      vm.classifieds.$add(classified);
      showToast('Classified Saved');
    });
    
    // Navigation Side Bar Toggle
    function openSideNav() {
      $state.go('classifieds.new');
    };

    function closeSideNav() {

    };

    vm.contact = {
      name: 'Leo Jacobs',
      phone: '044-7515281100',
      email: 'vibs.sh@gmail.com'
    }

    // Adding a Classified 
    vm.classified = {};

    function saveClassified() {
      if (vm.classified != null) {
        vm.classified.contact = vm.contact;
        vm.classifieds.push(vm.classified);
        vm.classified = {};
        vm.closeSideNav();
        showToast('Classified Saved');
      }
    }
    
    // Save Edit Button
    function saveEdit() {
      vm.editing = false;
      vm.classified = {};
      vm.closeSideNav();
      showToast('Edit Saved!');
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

   // Just used it once to push the data to firebase to get unique hashed id of the data
//    var firebase = ClassifiedsFac.dataUrl; 
//    angular.forEach(data, function(item){
//      firebase.$add(item);
//    });
  } // End of Classified Function
}());