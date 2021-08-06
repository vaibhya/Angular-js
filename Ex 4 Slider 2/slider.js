(function(){
    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope",function($scope){
            $scope.val=10;   

            $scope.range = function(){
                var input=[]
                for(var i=0;i<$scope.val;i++){
                    input.push(i)
                }
                return input
            }
        }])

}());