angular.module('templateService', []).factory('TemplateService', ['$http',function($http) {
    return {
        get : function(token) {
            return token
        },

        postWebsiteData : function(data, callback){
           return data
        }
    }
}]);