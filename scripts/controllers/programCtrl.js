angular.module("appName").controller("programCtrl",["$scope","personFactory","classHttp",function($scope,personFactory,classHttp){
    //console.log(classHttp.test);
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.programDatabase = [];
    $scope.option="n";
    $scope.updateId = 0;
    $scope.formModels = {
        classid:"",
        title:"",
        capacity:"",
        description:""      
    };
    
    $scope.delete=function(contactId){
        alert(contactId); classHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        });
                                                    
        
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        $scope.updateId=contactId;
        var prom = classHttp.getPersonListUniq(contactId).then(function(data){
            $scope.formModels = data[0];  
            //$scope.$watch.option="y";
        })
      //$scope.option="y";
        
        
    };
    
    $scope.add = function(option) {
        alert($scope.option);
        var tempObj = {
       // classid:$scope.formModels.classid,
        title:$scope.formModels.title,
        capacity:$scope.formModels.capacity,
        description:$scope.formModels.description,
        };
      // alert($scope.updateId);
        if($scope.updateId!=0){//update
        //    alert("i am here");
          alert($scope.updateId);  classHttp.updatePersonList(tempObj,$scope.updateId).then(function(response){
            alert("successfully updated");
            refreshEntries();    
        });
        }else{//add
             classHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        }
       
        //$scope.cubicDatabase.push(tempObj);
    }; 

function refreshEntries(){
    var promise= classHttp.getPersonList();
    promise.then(function(response){
        $scope.programDatabase = response;
        console.log(response);
        
    });
    }
        
}]);