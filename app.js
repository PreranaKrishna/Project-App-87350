(function(){
	'use strict';
	angular.module('healthMaster',[
		'ngRoute',
		'ngResource',
		'ngAnimate',
		// 'health.login',
		'health.home'
		])
	.config(config)
	.run(run);

	config.$inject = ['$routeProvider','$httpProvider'];
	function config($routeProvider,$httpProvider){
		$routeProvider
		.when('/',{
			title : 'Home',
			templateUrl : 'modules/home/views/home.html',
			controller : 'homeController',
			controllerAs : 'home'
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