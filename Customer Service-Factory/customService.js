(function(){

    var app=angular.module('Module',[])
    app.controller('ControllerCtrl', ["$scope","addSpace",function($scope,addSpace){
        $scope.editData = function(){
            $scope.output = addSpace.processString($scope.input)
        }
            
    }])
    app.factory("addSpace",function(){
        return {
            processString:function(input){
                console.log("inside scope")
                    var output ="";
                    for(var i=0;i<input.length;i++){
                        if(i>0 && input[i]==input[i].toUpperCase()){
                            output = output+" ";
                        }
                        output = output+input[i];
                    }
                    return output; 
            }
        }
    });
        
}());