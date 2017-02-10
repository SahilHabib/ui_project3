angular.module("appName").controller("sessionCtrl",["$scope","personFactory","sessionHttp",function($scope,personFactory,sessionHttp){
    $scope.classList = [
        {
            "classid":1,
            "title":"java"
        },
        {
            "classid":1,
            "title":"ui"
        }
    ];
    //console.log(sessionHttp.test);
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.sessionDatabase = [];
    $scope.option="n";
    $scope.updateId = 0;
    $scope.formModels = {
        sessionid:"",
        startDate:"",
        endDate:"",
        startTime:"",
        classid:"",
        teacherid:"",
        sessionTitle:""
    };
    
    $scope.delete=function(contactId){
        alert(contactId); sessionHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        });
                                                    
        
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        $scope.updateId=contactId;
        var prom = sessionHttp.getPersonListUniq(contactId).then(function(data){
            $scope.formModels = data[0];  
            //$scope.$watch.option="y";
        })
      //$scope.option="y";
        
        
    };
    
    $scope.add = function(option) {
        alert($scope.option);
        var tempObj = {
        //sessionid:$scope.formModels.sessionid,
        startDate:$scope.formModels.startDate,
        endDate:$scope.formModels.endDate,
        startTime:$scope.formModels.startTime,
        classid:$scope.formModels.classid,
        teacherid:$scope.formModels.teacherid,
        sessionTitle:$scope.formModels.sessionTitle
        };
      // alert($scope.updateId);
        if($scope.updateId!=0){//update
        //    alert("i am here");
          alert($scope.updateId);  sessionHttp.updatePersonList(tempObj,$scope.updateId).then(function(response){
            alert("successfully updated");
            refreshEntries();    
        });
        }else{//add
             sessionHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        }
       
        //$scope.cubicDatabase.push(tempObj);
    }; 

function refreshEntries(){
    var promise= sessionHttp.getPersonList();
    promise.then(function(response){
        $scope.sessionDatabase = response;
        console.log(response);
        
    });
    }
        
}]);