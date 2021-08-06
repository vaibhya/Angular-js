angular.module("modA",[])
        .controller("controllerA",function($scope,$rootScope,$log){
            console.log("inside controller A")
            $log.info("using $log service");
            $rootScope.company={
                name:"AurionPro",
                strength:200
            }
            $scope.developer = {
                name:"vaibhav",
                role:'engineer'
            }
            $log.info($rootScope)
            $log.info($scope)
        })