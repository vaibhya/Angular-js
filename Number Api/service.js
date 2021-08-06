(function(){

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope","facts",function($scope,facts){
            $scope.getFacts = function(){
                facts.gettingFacts($scope.input)
                    .then(function(response){
                        $scope.fact=response;
                    })
            }
        }])

        .factory("facts",["$q","$http",function($q,$http){
            var obj={}
            obj.gettingFacts= function(number){
                console.log(number)
                return $q(function(resolve,reject){
                    $http.get("http://numbersapi.com/"+number)
                        .then(function(response){
                            resolve(response.data)
                        })
                })
            }
            return obj;
        }])

    

}());