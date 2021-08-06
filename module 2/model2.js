angular.module("modA", ["modB"]).controller("ControllerA", [
    "$scope",
    "$rootScope",
    "$timeout",
    function ($scope, $rootScope,$timeout) {
      $scope.message = "Hello From Controller A";

      $timeout(function(){

        $scope.message = "modA message updated!";
        
        },3000);
      $rootScope.developer = {
        name: "vaibhav",
        role: "Jr Developer",
        department: "Web Development",
        address: ["abc", "pqr","lmsms"],
      };
    },
  ]);
  
  angular.module("modB", []).controller("ControllerB", [
    "$scope",
    "$rootScope",
    function ($scope, $rootScope) {
      $scope.message = "Hello From Controller B";
      console.log($rootScope.developer);
    },
  ]);