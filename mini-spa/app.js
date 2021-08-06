// (function(){
    

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

            .when("/about",{
                templateUrl:"fragments/about.html",
                controller:"aboutCtrl"
            })

            .when("/contact",{
                templateUrl:"fragments/contact.html",
                controller:"contactCtrl"
            })
        }])

    

// }());