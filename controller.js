angular.module('Calculator')
    .controller('mainCtrl', function($scope){

      $scope.screen_display = '';
      $scope.currentCalc = '';
      $scope.leftOfOperator = '';
      $scope.operator = '';

      $scope.adjustCurrentVal = function(num){
        $scope.screen_display += num;
        $scope.currentCalc += num;
      }

      $scope.clearAll = function(){
        $scope.screen_display = '';
        $scope.currentCalc = '';
        $scope.leftOfOperator = '';
        $scope.operator = '';
      }

      $scope.doOperator = function(operator){
        $scope.leftOfOperator = $scope.currentCalc;
        $scope.operator = operator;
        $scope.currentCalc = '';
        $scope.screen_display = '';
        // console.log('------Begin');
        // console.log($scope.leftOfOperator);
        // console.log($scope.operator);
        // console.log($scope.currentCalc);
        // console.log('------End');
      }

      $scope.doEquation = function(){
        switch($scope.operator){
          case '/':
            $scope.screen_display = +$scope.leftOfOperator / +$scope.currentCalc;
            $scope.currentCalc = $scope.screen_display.toString();
            break;
          case '*':
            $scope.screen_display = +$scope.leftOfOperator * +$scope.currentCalc;
            $scope.currentCalc = $scope.screen_display.toString();
            break;
          case '-':
            $scope.screen_display = +$scope.leftOfOperator - +$scope.currentCalc;
            $scope.currentCalc = $scope.screen_display.toString();
            break;
          case '+':
            $scope.screen_display = +$scope.leftOfOperator + +$scope.currentCalc;
            $scope.currentCalc = $scope.screen_display.toString();
            break;
        }
      }

      $scope.changeToPercent = function(){
        $scope.screen_display = ($scope.screen_display*100) + '%';
      }

      // $scope.changeToNegative = function(){
      //   console.log('hello');
      //   $scope.screen_display = $scope.screen_display.split('')
      //   $scope.screen_display.unshift('-');
      //   $scope.screen_display = $scope.screen_display.join('');
      //   console.log($scope.screen_display);
      // }


    })
