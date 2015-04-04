angular.module('provoPantry').factory('UserFactory', ['$http', '$cookies', function($http, $cookies) {
    
    var userData = {
        user: {}
    }
    
    userData.validateUser = function(data, next) {
        return $http.post('/api/v1/login', data).success(function(data) {
            angular.copy(data, userData.user);
	    next(userData.user);
        });
    }    
    
    userData.getUser = function() {
	var url = '/api/v1/users/' + $cookies.username;
	return $http.get(url).success(function(data) {
		user = data;
	    });
    }

    return userData;
}]);
