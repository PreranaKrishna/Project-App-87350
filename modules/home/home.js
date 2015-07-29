(function(){
	'use strict';
	angular.module('health.home',[])
	.config(config);

	config.$inject = ['$routeProvider','$httpProvider']
	function config($routeProvider,$httpProvider){
		$routeProvider
		.when('/home',{
			title : 'Home',
			templateUrl : 'modules/home/views/home.html',
			controller : 'homeController',
			controllerAs : 'home'
		});
	}
})();