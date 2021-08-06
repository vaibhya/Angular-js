(function(){
    

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope","$q","$http",function($scope,$q,$http){
            $scope.user={}
            $scope.postData = function(){
                $http({
                    method:"POST",
                    url :"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                    data:$scope.user,
                    headers:"application/json;charset=utf-8",
                    
                })
                .then(function (response){
                    $scope.content = response.data;
                    console.log("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/"+$scope.content)
                })
            }

        }])

    

}());