angular.module('mainController', [])
    .controller('mainController', ['$scope','$http', function($scope, $http) {

        $scope.user_data = {}

        $scope.postName = function(){
            $http.post('/users/',  data).success(function(result) {
                return callback(result)
            })
        }
    }])
