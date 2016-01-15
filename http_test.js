describe("MainCtrl", function() {
	var scope, $httpBackend;
	beforeEach(module('Application'));
	beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
		$httpBackend = _$httpBackend_;
		$httpBackend.when('GET', 'Users/users.json').respond([{
			id: 1,
			name: 'Bob'
		}, {
			id: 2,
			name: 'Jane'
		}]);
		//创建一个空的 scope
		scope = $rootScope.$new();

		//声明 Controller并且注入已创建的空的 scope
		$controller('MainCtrl', {
			$scope: scope
		});

	}));
	// 测试从这里开始
	it('should have variable text = "Hello World!"', function() {
		expect(scope.text).toBe('Hello World!');
	});
	it('should fetch list of users', function() {
		$httpBackend.flush();
		expect(scope.users.length).toBe(2);
		expect(scope.users[0].name).toBe('Bob');
		//输出结果以方便查看
		for (var i = 0; i < scope.users.length; i++) {
			console.log(scope.users[i].name);
		}
	});

})