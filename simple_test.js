"use strict";
describe("simpleApp",function(){
	beforeEach(module('simpleApp'));
	describe("myApp controller",function(){
		it('should controller is defined ...',inject(function($controller){
			var controller = $controller('myController');
			expect(controller).toBeDefined()
		}));
	})
});