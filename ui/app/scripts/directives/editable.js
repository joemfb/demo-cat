(function () {

  'use strict';

  angular.module('demoCat')
    .directive('editable', [function () {
      return {
        restrict: 'AE',
        scope: {
          editType: '@editType',
          editModel: '=editModel',
          save: '&save'
        },
        templateUrl: '/scripts/directives/editable.html',
        link: function($scope) {
          $scope.mode = 'view';
        }
      };
    }]);
}());
