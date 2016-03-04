/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('ClassifiedsCtrl', ClassifiedsCtrl);

  function ClassifiedsCtrl() {
    var vm = this;
    vm.classifieds = {
      title: 'First Item',
      imageUrl: 'http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg',
      price: 100000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ratione voluptate, iure officia nihil, doloremque quod. Placeat est dolore quas impedit ab porro, architecto nisi sunt quaerat, debitis ea, nostrum.'

    };
  }

}());