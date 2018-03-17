angular.module('BDC-app', ['loginController', 'dashboardController', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl : "login.html",
                controller: 'loginController'
            })
            .when("/dashboard", {
                templateUrl: "dashboard.html",
                controller: 'dashboardController'
            })
            .otherwise({redirectTo:'/login'});
    })
    .service('sharedProperties', function () {
        var user = {"name": "tiffany"};
        return {
            getProperty: function () {
                return user;
            },
            setProperty: function(user_data) {
                user = user_data;
            }
        };
    });
