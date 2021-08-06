angular.module('main',[])
        .controller("mainController",function($scope){
            $scope.student = {
                roll:101,
                name:"sachin",
                cgpa:7.5
            }
        })