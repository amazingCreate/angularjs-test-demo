"use strict";
describe("myApp module", function() {
	beforeEach(module('myApp'));
	var $scope;
	beforeEach(inject(function($rootScope,$controller) {
		$scope = $rootScope.$new();
		$controller('myController', {
			$scope: $scope
		});
	}));
	it('should ...', inject(function($controller) {
		var c = $controller('myController',{$scope:$scope});
		expect(c).toBeDefined();
	}));
	it('should have var text ="hello world."',function(){
		expect($scope.text).toBe('hello world.');
	});
});