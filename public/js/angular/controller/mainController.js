angular.module('mainController', [])
    .controller('mainController', ['$scope','$http', function($scope, $http) {

        $scope.user_data = {}

        $scope.postName = function(){
            console.log($scope.user_data)

            $http.post('/users/', $scope.user_data).success(function(result) {
                return callback(result)
            })
        }
    }])
