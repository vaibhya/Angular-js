(function(){
    
    angular
        .module('ModA',[])
        .controller('ControllerCtrl',["$scope",function($scope){
            var min=1;
            var max=6;

            $scope.rollDice = function(min,max){
                return Math.floor(Math.random() * (max - min) + min);
            }
            $scope.result = {};
            for(let i=0;i<10;i++){
                let number = $scope.rollDice(min,max);
                if($scope.result[number]){
                    $scope.result[number]+=1;
                }else{
                    $scope.result[number]=1;
                }
            }
            console.log($scope)
        }])


}());