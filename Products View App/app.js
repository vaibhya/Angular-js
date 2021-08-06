

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
            .when("/productList",{
                templateUrl:"fragments/productList.html",
                controller:"productList"
            })
            .when("/products",{
                templateUrl:"fragments/productDetails.html",
                controller:"productDetails"
            })
        }])

    
