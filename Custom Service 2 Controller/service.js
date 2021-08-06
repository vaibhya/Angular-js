(function(){

    angular
        .module('Module',[])
        .factory("mathService",["$q",function($q){
            var math={}
            math.chechEven = function(no){
                return $q(function(resolve,reject){
                    if(no%2==0){
                        resolve(true)
                        return
                    }
                    reject("Odd Number");
                })
                
            }
            return math;
        }])
        .controller('ControllerCtrl',["$scope","mathService",function($scope,mathService){
            $scope.checkHandler = function(){
                mathService.chechEven($scope.input)
                    .then(function(result){
                        $scope.output = result
                    })
                    .catch(function(message){
                        $scope.output=message;
                    })
            }
        }])

    

}());