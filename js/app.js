(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.meal = "";

    $scope.checkLunch = function() {
      var items = $scope.meal.split(",");
      if ($scope.meal.length == 0 || items.length == 0) {
        $scope.message = "Please enter data first.";
      } else if (items.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  };
})();
