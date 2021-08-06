(function(){
    

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope","$q","$http",function($scope,$q,$http){
            $scope.user={}
            $scope.database={}
            $scope.postData = function(){
                $http({
                    method:"POST",
                    url :"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                    data:$scope.user,
                    headers:"application/json;charset=utf-8",
                    
                })
                .then(function (response){
                    $scope.database.id = response.data;
                })
            }
            $scope.getData = function(){
                $http({
                    method:"GET",
                    url:"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                    headers:"application/json;charset=utf-8",
                    dataType: "json"
                })
                .then(function(response){
                    $scope.database.size = response.data.length;
                    $scope.database.receivedData = response;
                    $scope.database.responseArray=[]
                    
                    for(var i=0;i<$scope.database.size;i++){
                        $scope.database.responseArray.push({
                            "id": $scope.database.receivedData.data[i].id,
                            "name":$scope.database.receivedData.data[i].name,
                            "rollNo":$scope.database.receivedData.data[i].rollNo,
                            "age":$scope.database.receivedData.data[i].age,
                            "email":$scope.database.receivedData.data[i].email,
                            "date":$scope.database.receivedData.data[i].date,
                            "gender":$scope.database.receivedData.data[i].isMale, 
                        })
                    }
                    console.log($scope.database.responseArray)
                })
            }

        }])

    

}());