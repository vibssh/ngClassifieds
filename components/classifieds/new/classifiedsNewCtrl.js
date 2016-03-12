(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('NewClassifiedsCtrl', ['$scope', '$state', '$timeout',
      '$mdSidenav', '$mdToast', '$mdDialog', NewClassifiedsCtrl]);

  // Main Controller Function
  function NewClassifiedsCtrl($scope, $state, $timeout, $mdSidenav, $mdToast, $mdDialog) {
    var vm = this;
    vm.saveClassified = saveClassified;


    function sideNav() {
      $mdSidenav('left').open();
    };
    $timeout(sideNav);


    // $watch method
    $scope.$watch('vm.sideNavOpen', function (value) {
      if (value === false) {
        $mdSidenav('left').close()
          .then(function () {
            $state.go('classifieds');
          });
      }
    });

    vm.closeSideNav = function () {
      vm.sideNavOpen = false;
    };

    function saveClassified(classified) {
      if (classified) {

        classified.contact = {
          name: 'Leo Jacobs',
          phone: '044-7515281100',
          email: 'vibs.sh@gmail.com'
        }

        $scope.$emit('newClassified', classified);
        vm.sideNavOpen = false;
      }
    }

  };


}());