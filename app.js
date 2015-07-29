(function(){
	'use strict';
	angular.module('healthMaster',[
		'ngRoute',
		'ngResource',
		'ngAnimate',
		'health.login',
		'health.home'
		])
	.config(config)
	.run(run);

	config.$inject = ['$routeProvider','$httpProvider'];
	function config($routeProvider,$httpProvider){
		$routeProvider
		.when('/',{
			title : 'Login',
			templateUrl : 'modules/login/views/login.html',
			controller : 'loginController',
			controllerAs : 'login'
		})
		.otherwise({
			redirectTo : '/'
		});
	}

	run.$inject = ['$rootScope','$location','$route'];
	function run($rootScope,$location,$route){
		$rootScope.$on('$routeChangeSuccess', function() {
	        $rootScope.pageTitle = $route.current.title;
	    });
	}
})();