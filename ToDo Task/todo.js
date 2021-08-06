(function(){

    angular
        .module('Module',[])
        .controller('ControllerCtrl', ["$scope",function($scope){
            var todoItems = [];
            var timeStampsHistory=[];
            var totalItemCounter = 0;
            $scope.task = "";
            $scope.todo = []
            $scope.getData = function(task){
                $scope.task = task;
                $scope.renderLatestTime();
                
                $scope.todo.push(
                    {
                        text:$scope.task,
                        id:Date.now(),
                    }
                )
                timeStampsHistory.push($scope.latestTime);
                todoItems.push($scope.todo);
                // $scope.renderTodo($scope.todo);
                localStorage.setItem("activity",JSON.stringify(timeStampsHistory));
                localStorage.setItem("todoItems", JSON.stringify(todoItems));
                $scope.renderTotalItem(++totalItemCounter);
                console.log($scope.task)
            }
            $scope.deleteAllData = function(){
                $("#allItemsDiv").html("");
                $scope.renderLatestTime();
                $scope.renderTotalItem(0);
                localStorage.clear();
            }
            $scope.deleteItemDiv = function(){
                if (!(e.target.className == "deleteToDoClass")) {
                    return;
                  }
                  deleteToDo(e.target.id);
                  $("#" + e.target.id).prop("disabled", true);
                  $("li[data-key=" + e.target.id + "]").wrap("<strike>");
                  $scope.renderLatestTime();
                  timeStampsHistory.push(activityTime);
                  console.log(timeStampsHistory);
                  localStorage.setItem("activity",JSON.stringify(timeStampsHistory));
                  $scope.renderTotalItem(--totalItemCounter);
            }
            $scope.renderLatestTime = function(){
                $scope.latestTime = moment().format('h:mm:ss a');
                
            }
            $scope.renderTotalItem = function(count){
                $scope.itemCount = count;
                
            }
            // $scope.renderLastActivity = function(time){
            //     $("#lastUpdate").html("Last Update: "+time);
            // }
            $scope.renderTodo = function(){
                var responseDate = moment($scope.todo.id).fromNow();
                var list = document.getElementById("allItemsDiv");
                var item = document.querySelector(`[data-key='${$scope.todo.id}']`);

                // if (todo.deleted) {
                //     item.remove();
                //     return;
                // }

                
            }
            $scope.deleteToDo = function(buttonId){
                $scope.renderLatestTime()
                $scope.todo = $scope.todo.filter(function(item){
                    return item.id!==Number(buttonId)
                }
                )
                $scope.renderTotalItem(--totalItemCounter);
                console.log($scope.todo)
                
                // todoItems[index] = $scope.todo;
                localStorage.setItem("todoItems", JSON.stringify(todoItems));
            }
        }])

}());