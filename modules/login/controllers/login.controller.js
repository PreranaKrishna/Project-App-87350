angular.module('healthMaster')
.controller('loginController',loginController);

loginController.$inject = ['$location']
function loginController($location){
    var self = this;

	self.submitCredential = function(){
		$location.path('/home')
	}

}