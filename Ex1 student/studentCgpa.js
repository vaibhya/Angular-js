angular.module("modA",[])
    .controller("controllerA",["$scope",
    function($scope){
        var studentData=[{name:"vaibhav",id:1,cgpa:7.9},{name:"harish",id:2,cgpa:8.9},{name:"atul",id:3,cgpa:7.2},
        {name:"aarti",id:4,cgpa:7.0},{name:"monu",id:5,cgpa:8.0}]
        $scope.students=studentData;
        // $scope.minVal=function() { return [2,4]; };
        $scope.values=function() { 
            var data=[]
            var min=max=sum=count=0;
            studentData.map(function(value,index){
                console.log(value.cgpa,index);
                sum+=value.cgpa;
                count+=1;
                if(value.cgpa>max){
                    max=value.cgpa;
                }
                if(min){
                    if(value.cgpa<min){
                        min=value.cgpa;
                        return
                    }
                }
                min=value.cgpa;
                data=[min,max,sum,count];
            })
            console.log(data)
            return data;
        }
        console.log($scope)
        }

])