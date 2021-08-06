app
    .controller("mainController",["$rootScope",function($rootScope){
        $rootScope.productDetails = function(product){
            $rootScope.product = product
        }
    }])
    .controller("homeCtrl",["$scope",function($scope){

    }])

    .controller("productList",["$scope","$http",function($scope,$http){
        $scope.$on('$routeChangeSuccess', function(event){
            $http({
                method:"GET",
                url:"products.json",
                dataType: "json",
                contentType:"application/json"
            })
            .then(function(response){
                
                console.log(response)
                $scope.products=response.data
            })
        })
    }])

    .controller("productDetails",["$scope","$rootScope","$window",function($scope,$rootScope,$window){
        
        console.log($rootScope.product)
        $scope.redirect = function(){
            $window.history.back();
        }

    }])

    .directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '='
            },
            link: function (scope, elem, attrs) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }
        }
    });