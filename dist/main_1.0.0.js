/*! angular-directive 2014-12-09 */
!function(){"use strict";var a=angular.module("directiveApp",[]);a.controller("MatchingController",["$scope",function(a){a.name="Truong"}]).controller("CreateDirectiveController",["$scope",function(a){a.customer={name:"Truong",address:"Ha Noi"}}]).directive("myCustomer",function(){return{template:"Name: {{customer.name}} & Address: {{customer.address}}"}}).directive("myCustomerUrl",function(){return{templateUrl:"templates/customer.html"}}).directive("myCustomerRestrict",function(){return{restrict:"E",templateUrl:"templates/customer.html"}}).controller("CreateDirectiveControllerScope",["$scope",function(a){a.user1={name:"User 1",address:"Address 1"},a.user2={name:"User 2",address:"Address 2"},a.common="This is common variable in controller scope"}]).directive("myCustomerScope",function(){return{restrict:"E",scope:{customer:"=user"},templateUrl:"templates/customer_scope.html"}}).controller("DirectiveDomController",["$scope",function(a){a.variable=new Date,a.content="Truong"}]).directive("myDom",function(){return{restrict:"E",link:function(a,b,c){a.$watch(c.myContent,function(a){b.text(a)})},templateUrl:"templates/dom.html"}})}();