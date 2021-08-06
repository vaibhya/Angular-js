(function(){
    

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope","$q","$http",function($scope,$q,$http){
            $scope.user={}
            $scope.database={}
            $scope.postData = function(){
                $http({
                    method:"POST",
                    url :"http://localhost:60804/api/v1/aurionpro/Add/Employee/Post",
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
                    url:"http://localhost:60804/api/v1/aurionpro/Employee/Get",
                    headers:"application/json;charset=utf-8",
                    dataType: "json"
                })
                .then(function(response){
                    $scope.database.size = response.data.length;
                    $scope.database.receivedData = response;
                    $scope.database.responseArray=[]
                    
                    for(var i=0;i<$scope.database.size;i++){
                        $scope.database.responseArray.push({
                            "id": $scope.database.receivedData.data[i].Id,
                            "name":$scope.database.receivedData.data[i].Name,
                            "salary":$scope.database.receivedData.data[i].Salary,
                            "age":$scope.database.receivedData.data[i].Age,
                            "email":$scope.database.receivedData.data[i].Email,
                            "date":$scope.database.receivedData.data[i].Date,
                            "gender":$scope.database.receivedData.data[i].isMale, 
                        })
                    }
                    console.log($scope.database.responseArray)
                })
            }
            $scope.deleteRowData = function(rowId){
                $http({
                    method:"DELETE",
                    url:"http://localhost:60804/api/v1/aurionpro/Remove/Employee/"+rowId,
                    headers:"application/json;charset=utf-8",
                    dataType: "json"
                })
                .then(function(response){
                    
                    alert("Delete Operation Successful! "+rowId+ " is removed from database!")
                    console.log("http://localhost:60804/api/v1/aurionpro/Remove/Employee/"+rowId);
                })
            }
            $scope.putData = function(student){
                $scope.user.name = student.name;
                $scope.user.salary = student.salary;
                $scope.user.email = student.email;
                $scope.user.age = student.age;
                $scope.user.date = new Date(student.date);
                $scope.database.updateId=student.id;
                if(student.gender==true){
                    $scope.user.radio1=true
                    return
                }
                $scope.user.radio2=true
                
            }
            
            $scope.updateData = function(){
                $http({
                    method:"PUT",
                    url:"http://localhost:60804/api/v1/aurionpro/Update/Employee/"+$scope.database.updateId,
                    headers:"application/json;charset=utf-8",
                    data:$scope.user,
                    dataType: "json"
                })
                .then(function(response){
                    $scope.database.id = "Student with id:"+$scope.database.updateId+" updated successfully!"
                    console.log("http://localhost:60804/api/v1/aurionpro/Update/Employee/"+$scope.database.updateId)
                })
            }

        }])

    

}());