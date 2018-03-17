angular.module('dashboardController', [])
    .controller('dashboardController', ['$scope','$http', 'sharedProperties', function($scope, $http, sharedProperties) {
        $scope.user_data = sharedProperties.getProperty()

        $scope.first_name = $scope.user_data.first_name
        $scope.last_name =  $scope.user_data.last_name
        $scope.id =  $scope.user_data.id


    }])
