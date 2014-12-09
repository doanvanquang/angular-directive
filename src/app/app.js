(function() {
	"use strict";
	var directiveApp = angular.module("directiveApp", []);

	directiveApp.controller("MatchingController", ["$scope", function($scope) {
		$scope.name = "Truong";
	}])
	.controller("CreateDirectiveController", ["$scope", function($scope) {
		$scope.customer = {
			name: "Truong",
			address: "Ha Noi"
		};
	}])
	.directive("myCustomer", function() {
		return {
			template: "Name: {{customer.name}} & Address: {{customer.address}}"
		};
	})
	.directive("myCustomerUrl", function() {
		return {
			templateUrl: "templates/customer.html"
		};
	})
	.directive("myCustomerRestrict", function() {
		return {
			"restrict": "E",
			templateUrl: "templates/customer.html"
		};
	})
	.controller("CreateDirectiveControllerScope", ["$scope", function($scope) {
		$scope.user1 = {name: "User 1", address: "Address 1"};
		$scope.user2 = {name: "User 2", address: "Address 2"};

		$scope.common = "This is common variable in controller scope";
	}])
	.directive("myCustomerScope", function() {
		return {
			restrict: "E",
			scope: {
				customer: "=user"
			},
			templateUrl: "templates/customer_scope.html"
		};
	})
	.controller("DirectiveDomController", ["$scope", function($scope) {
		$scope.variable = new Date();
		$scope.content = "Truong";
	}])
	.directive("myDom", function() {
		return {
			restrict: "E",
			link: function(scope, element, attrs) {
				scope.$watch(attrs.myContent, function(value){
					element.text(value);
				});
			},
			templateUrl: "templates/dom.html"
		};
	});
})();