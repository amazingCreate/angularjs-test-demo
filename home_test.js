'use strict';
describe('MainCtrl', function() {
	var scope;
	beforeEach(angular.mock.module('Application'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('MainCtrl', {
			$scope: scope
		});
	}));
	it('should have var text ="hello world!"',function(){
		expect(scope.text).toBe('Hello World');
	});
})