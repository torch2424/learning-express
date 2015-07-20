'use strict';

/**
 * @ngdoc function
 * @name linkDumpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linkDumpApp
 */
angular.module('linkDumpApp')
  .controller('LoginCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Fucntion to find the active page
    $scope.isActive = function(route)
    {
       return route === $location.path();
   }
  });
