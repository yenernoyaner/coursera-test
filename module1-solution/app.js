(function(){
    'use strict';

  angular.module('LunchCheckApp',[])

      .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.inject=['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchListString="";
        $scope.message="";

        $scope.controlLunch= function () {
          var arrayOfLunch=$scope.lunchListString.trim().split(',');
            if(arrayOfLunch.length==1 && arrayOfLunch[0]=="") {
                $scope.message="Please enter the data first"
            }else if (arrayOfLunch.length>=1 && arrayOfLunch.length<=3) {
              $scope.message="Enjoy!";
          }else{
              $scope.message="Too Much!";
          }
        };
    }
})();