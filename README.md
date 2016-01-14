# angularjs-test-demo
angular自动化单元测试案例.

首先是`npm install`,然后再`bower install`

运行`npm test`开始测试

初始化`karma`

	karma init

配置karma.conf.js 中的files

如果要测试代码覆盖率，要安装

	npm install karma-coverage


#最简单的例子
simple_test.js

`home_test.js`和`view_test.js`演示了两种controller中的$scope的用法inject;