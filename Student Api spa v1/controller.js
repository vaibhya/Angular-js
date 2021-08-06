
app
    .controller("mainController",["$rootScope",function($rootScope){
        $rootScope.url = "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/"
        $rootScope.headers = "application/json;charset=utf-8"
        $rootScope.dataType = "json"
    }])
    
    .controller('homeCtrl', ["$scope",function($scope){
        $scope.home="Home Content"
        $scope.message="You can edit student controller! Select any service"
        
    }])

    .controller('addStudentCtrl', ["$scope","$http","$timeout","$location","$rootScope",function($scope,$http,$timeout,$location,$rootScope){
        console.log($rootScope)
        $scope.user={}
        $scope.postData = function(){
            $http({
                method:"POST",
                // url :"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                url: $rootScope.url,
                data:$scope.user,
                headers:$rootScope.headers,
                    
            })
            .then(function (response){
                $scope.content = response.data;
                console.log($rootScope.url+$scope.content)
                $timeout(function() {
                    $location.path('home');
                    }, 3000);
            })
        }
    }])

    .controller('viewStudentCtrl', ["$scope","$http","$rootScope",function($scope,$http,$rootScope){
        $scope.database={}
        $scope.$on('$routeChangeSuccess', function(event) {
            $http({
                method:"GET",
                // url:"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                url:$rootScope.url,
                headers:$rootScope.headers,
                dataType: $rootScope.dataType
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
        });
        
        
        
    }])

    .controller('deleteStudentCtrl', ["$scope","$http","$window" ,"$timeout","$location","$rootScope",function($scope,$http,$window,$timeout,$location,$rootScope){
        $scope.database={}
        $scope.$on('$routeChangeSuccess', function(event) {
            $http({
                method:"GET",
                // url:"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                url:$rootScope.url,
                headers:$rootScope.headers,
                dataType: $rootScope.dataType
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
        });
        
        $scope.deleteRowData = function(rowId){
            if ($window.confirm("Please confirm?")) {

                $http({
                    method:"DELETE",
                    url:$rootScope.url+rowId,
                    headers:$rootScope.headers,
                    dataType: $rootScope.dataType
                })
                .then(function(response){
                
                    alert("Delete Operation Successful! "+rowId+ " is removed from database!")
                    console.log($rootScope.url+rowId);
                    $timeout(function() {
                        $location.path('home');
                        }, 3000);
                })
                return
            } 
            $scope.Message = "You clicked NO.";
            
        }
        
        
    }])


    .controller('updateStudentCtrl', ["$scope","$http","$rootScope",function($scope,$http,$rootScope){
        $scope.database={}
        $scope.$on('$routeChangeSuccess', function(event) {
            $http({
                method:"GET",
                // url:"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                url:$rootScope.url,
                headers:$rootScope.headers,
                dataType: $rootScope.dataType
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
        });
        $scope.user={}
        $scope.putData = function(student){
            $scope.user.name = student.name;
            $scope.user.rollNo = student.rollNo;
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
                // url:"http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/"+$scope.database.updateId,
                url:$rootScope.url+$scope.database.updateId,
                headers:$rootScope.headers,
                data:$scope.user,
                dataType: $rootScope.dataType
            })
            .then(function(response){
                $scope.database.id = "Student with id:"+$scope.database.updateId+" updated successfully!"
                console.log($rootScope.url+$scope.database.updateId)
            })
        }
        
        
    }])
