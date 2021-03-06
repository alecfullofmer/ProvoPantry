angular.module('provoPantry').controller('LoginController', 
    ['$scope', '$http', 'UserFactory',  function($scope, $http, UserFactory){

	$scope.validateUser = function(){
	    
	    UserFactory.validateUser({
		    username: $scope.username,
		    password: $scope.password
		}, function(res) {
		    if(res.redirect) {
			window.location = res.redirect;
		    }
		    else {
			    $scope.invalidUserMessage = "Invalid username or password";
		    }
		});
	}	
        
        $scope.submitRegistration = function(){
            UserFactory.registerUser({
	    	username:$scope.username,
		password:$scope.password,
		email:$scope.email},
		function(res) {
			if(res.redirect){
				window.location = res.redirect;
			}
			else{
				$scope.invalidUserMessage = res.err;
			}
		}
	    )
        }
}]);
