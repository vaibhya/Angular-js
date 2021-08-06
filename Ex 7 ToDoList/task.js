(function(){
    
    angular
        .module('Module',[])
        .controller('ControllerCtrl',["$scope",function($scope){
            $scope.inputVal = function(){
                var x=angular.element(document.getElementById("input"));
                $scope.inputData = x.val();
            }
        }])


}());