angular.module('loginController', [])
    .controller('loginController', ['$scope','$http', function($scope, $http) {

        $scope.user_data = {}

        $scope.postName = function(){
            if(!$scope.user_data.first_name || !$scope.user_data.last_name) {}
            else{
                console.log("sent")
                $http.post('/user/', $scope.user_data).success(function (result) {
                    console.log(result)

                })
            }
        }
    }])
