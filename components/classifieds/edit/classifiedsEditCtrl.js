(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('EditClassifiedsCtrl', ['$scope', '$state', 'ClassifiedsFac', '$timeout',
      '$mdSidenav', '$mdToast', '$mdDialog', EditClassifiedsCtrl]);

  // Main Controller Function
  function EditClassifiedsCtrl($scope, $state, ClassifiedsFac, $timeout, $mdSidenav, $mdToast, $mdDialog) {
    var vm = this;
    vm.classifieds = ClassifiedsFac.dataUrl;
    vm.saveClassified = saveClassified;
    vm.classified = vm.classifieds.$getRecord($state.params.id) ;
    


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
        vm.classifieds.$save(vm.classified).then(function(){
           $scope.$emit('newClassified', classified);
        vm.sideNavOpen = false;
        })
        classified.contact = {
          name: 'Leo Jacobs',
          phone: '044-7515281100',
          email: 'vibs.sh@gmail.com'
        }

        
      }
    }
  };
}());