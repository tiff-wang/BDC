angular.module('mainController', [])
    .controller('templateController', ['$scope','$http','TemplateService', function($scope, $http, TemplateService) {

        $scope.test = "tiffany"

        $scope.function = function(arg){
            return arg;
        }
    }])

myFunction = function myFunction(){

}
