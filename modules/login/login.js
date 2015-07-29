(function(){
	'use strict';
	angular.module('health.login',[])
	.config(config);

	config.$inject = ['$routeProvider','$httpProvider'];
	function config($routeProvider,$httpProvider){
		$routeProvider
		.when('/',{
			title : 'Login',
			templateUrl : 'modules/login/views/home.html',
			controller : 'loginController',
			controllerAs : 'login'
		})
		.otherwise('/',{
			redirectTo : '/'
		});
	}
})();