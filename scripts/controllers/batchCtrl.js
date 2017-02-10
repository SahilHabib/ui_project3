angular.module("appName").controller("batchCtrl",["$scope","personFactory","batchHttp",function($scope,personFactory,batchHttp){
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
    //console.log(batchHttp.test);
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.batchDatabase = [];
    $scope.option="n";
    $scope.updateId = 0;
    $scope.formModels = {
        batchid:"",
        studentid:"",
        teacherid:""
    };    
    $scope.delete=function(contactId){
        alert(contactId); batchHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        });
                                                        
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        $scope.updateId=contactId;
        var prom = batchHttp.getPersonListUniq(contactId).then(function(data){
            $scope.formModels = data[0];  
            //$scope.$watch.option="y";
        })
      //$scope.option="y";
        
        
    };
    
    $scope.add = function(option) {
        alert($scope.option);
        var tempObj = {
        //batchid:$scope.formModels.batchid,
        studentid:$scope.formModels.studentid,
        teacherid:$scope.formModels.teacherid
        };
      // alert($scope.updateId);
        if($scope.updateId!=0){//update
        //    alert("i am here");
          alert($scope.updateId);  batchHttp.updatePersonList(tempObj,$scope.updateId).then(function(response){
            alert("successfully updated");
            refreshEntries();    
        });
        }else{//add
             batchHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        }
       
        //$scope.cubicDatabase.push(tempObj);
    }; 

function refreshEntries(){
    var promise= batchHttp.getPersonList();
    promise.then(function(response){
        $scope.batchDatabase = response;
        console.log(response);
        
    });
    }
        
}]);