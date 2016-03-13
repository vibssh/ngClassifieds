/*classified-card Directive global angular, $, window, console, jQuery*/

(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .directive('classifiedCard', function () {
      return {
        templateUrl: 'components/classifieds/card/classified-card.tpl.html',
        scope: {
          classifieds: '=classifieds',
          classifiedsFilter: '=classifiedsFilter',
          category: '=category'
        },
        controller: classifiedCardController,
        controllerAs: "vm"
      };

      function classifiedCardController($state, $mdDialog) {
        var vm = this;
        vm.editClassified = editClassified;
        vm.deleteClassified = deleteClassified;
        vm.showToast = showToast;


        // Editing a Classified
        function editClassified(classified) { // This Classified passed in a parameter is same that is in the ng-repeat object  
          $state.go('classifieds.edit', {
            id: classified.$id
          });

        }

        //Deleting a classified
        function deleteClassified(event, classified) {
          var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete' + ' ' + classified.title + '?')
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);
          $mdDialog.show(confirm)
            .then(function () {
              vm.classifieds.$remove(classified);
              showToast('Classified deleted');
              //          var index = vm.classifieds.indexOf(classified);
              //          vm.classifieds.splice(index, 1);
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

      }
    });
}());