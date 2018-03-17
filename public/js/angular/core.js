angular.module('BDC-app', ['loginController', 'dashboardController', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl : "login.html",
                controller: 'loginController'
            })
            .otherwise({redirectTo:'/'})
    });