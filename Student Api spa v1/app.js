

    var app=angular.module('Module',["ngRoute"])

        .config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
                templateUrl:"fragments/home.html",
                controller:"homeCtrl"
            })
            .when("/home",{
                templateUrl:"fragments/home.html",
                controller:"homeCtrl"
            })
            .when("/addStudent",{
                templateUrl:"fragments/addStudent.html",
                controller:"addStudentCtrl"
            })
            .when("/viewStudent",{
                templateUrl:"fragments/viewStudent.html",
                controller:"viewStudentCtrl"
            })
            .when("/deleteStudent",{
                templateUrl:"fragments/deleteStudent.html",
                controller:"deleteStudentCtrl"
            })
            .when("/updateStudent",{
                templateUrl:"fragments/updateStudent.html",
                controller:"updateStudentCtrl"
            })

        }])

    

