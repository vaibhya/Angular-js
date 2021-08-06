// (function(){
    

    app
        .controller('homeCtrl', ["$scope",function($scope){
            $scope.home="Home Content"
            console.log("inside home")
        }])

        .controller('aboutCtrl', ["$scope",function($scope){
            $scope.about = "About Content"
        }])

        .controller('contactCtrl', ["$scope",function($scope){
            $scope.contact="Contact content"
        }])

    

// }());