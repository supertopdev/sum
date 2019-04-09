
angular.module("testApp")
  .controller("AppCtrl", function($scope, $http, $sce, $stateParams) {
    this.$stateParams = $stateParams;


    $scope.first_factor = 0;
    $scope.second_factor = 0;

    $scope.sum = function(){
      $http({
        method: 'POST',
        url: '/api/sum',
        data: { first: $scope.first_factor, second: $scope.second_factor },
      }).success((response) => {
        $scope.sum_sum = response['sum'];
      });
    };
  });
