angular.module('loginController', [])
    .controller('loginController', ['$scope','$http', '$location', 'sharedProperties', function($scope, $http, $location, sharedProperties) {

        $scope.user_data = {}

        $scope.postName = function(){
            if(!$scope.user_data.first_name || !$scope.user_data.last_name) {}
            else{
                console.log("sent")
                $http.post('/user/', $scope.user_data).then(function (result) {
                    console.log(result)
                    if(result.data.user_found){
                        $location.path("/dashboard")
                        sharedProperties.setProperty(result.data.user)
                    }
                    else{
                        $(".user-not-found").css('visibility', 'visible')
                    }
                })
            }
        }
        $scope.load = function(){
            /*==================================================================
             [ Focus input ]*/
            $('.input100').each(function(){
                $(this).on('blur', function(){
                    if($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    }
                    else {
                        $(this).removeClass('has-val');
                    }
                })
            })


            /*==================================================================
             [ Validate ]*/
            var input = $('.validate-input .input100');

            $('.validate-form').on('submit',function(){
                var check = true;

                for(var i=0; i<input.length; i++) {
                    if(validate(input[i]) == false){
                        showValidate(input[i]);
                        check=false;
                    }
                }

                return check;
            });


            $('.validate-form .input100').each(function(){
                $(this).focus(function(){
                    hideValidate(this);
                });
            });
        }

        $scope.load();
    }])


function validate (input) {
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
    else {
        if($(input).val().trim() == ''){
            return false;
        }
    }
}

function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');

}

function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}

