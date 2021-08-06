(function(){

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope","addSpace",function($scope,addSpace){
            $scope.editData = function(){
                $scope.output = addSpace.processData($scope.input)
            }
            
        }])
        .service("addSpace",function(){
            this.processData = function(input){
                console.log("inside scope")
                var output ="";
                for(var i=0;i<input.length;i++){
                    if(i>0 && input[i]==input[i].toUpperCase()){
                        output = output+" ";
                    }
                    output = output+input[i];
                }
                return output
                
            }
        })


}());