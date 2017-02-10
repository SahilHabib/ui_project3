angular.module("appName").controller("cubicDatabaseCtrl",["$scope","personFactory","personHttp",function($scope,personFactory,personHttp){
    //console.log(personHttp.test);
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.cubicDatabase = [];
    $scope.option="n";
    $scope.updateId = 0;
    $scope.formModels = {
        studentid:"",
        firstName:"",
        lastName:"",
        address:"",
        contactid:"",
        email:"",
        socialSN:""
    };
    
    $scope.delete=function(contactId){
        alert(contactId); personHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        });
                                                    
        
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        $scope.updateId=contactId;
        var prom = personHttp.getPersonListUniq(contactId).then(function(data){
            $scope.formModels = data[0];  
            //$scope.$watch.option="y";
        })
      //$scope.option="y";
        
        
    };
    
    $scope.add = function(option) {
        alert($scope.option);
        var tempObj = {
       // studentid:$scope.formModels.studentid,
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        contactid:$scope.formModels.contactid,
        email:$scope.formModels.email,
        socialSN:$scope.formModels.socialSN
        };
      // alert($scope.updateId);
        if($scope.updateId!=0){//update
        //    alert("i am here");
          alert($scope.updateId);  personHttp.updatePersonList(tempObj,$scope.updateId).then(function(response){
            alert("successfully updated");
            refreshEntries();    
        });
        }else{//add
             personHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        }
       
        //$scope.cubicDatabase.push(tempObj);
    }; 

function refreshEntries(){
    var promise= personHttp.getPersonList();
    promise.then(function(response){
        $scope.cubicDatabase = response;
        console.log(response);
        
    });
    }
        
}]);