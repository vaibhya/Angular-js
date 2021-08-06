(function(){
    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope",function($scope){
            $scope.val=10;   
        }])

}());