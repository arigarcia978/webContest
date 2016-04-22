angular.module('app')
	.controller('IEEEController', ['$scope', 'IEEEService', function($scope, IEEEService){
		$scope.benefits = IEEEService.getBenefits();
		console.log($scope.benefits);
	}]);