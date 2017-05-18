angular.module('Calculator')
    .controller('mainCtrl', function($scope){

      $scope.screen_display = ''

      $scope.adjustCurrentVal = function(num){
        $scope.screen_display += num;
      }


      $scope.multiply = function(){

      }

    })
