angular.module("appName").controller("teacherCtrl",["$scope","personFactory","teacherHttp",function($scope,personFactory,teacherHttp){
    //console.log(teacherHttp.test);
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.teacherDatabase = [];
    $scope.option="n";
    $scope.updateId = 0;
    $scope.formModels = {
        teacherid:"",
        firstName:"",
        lastName:"",
        address:"",
        contactid:"",
        email:""       
    }; 
    $scope.delete=function(contactId){
        alert(contactId); teacherHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        }); 
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        $scope.updateId=contactId;
        var prom = teacherHttp.getPersonListUniq(contactId).then(function(data){
            $scope.formModels = data[0];  
            //$scope.$watch.option="y";
        })
      //$scope.option="y";   
    };
    $scope.add = function(option) {
        alert($scope.option);
        var tempObj = {
       // teacherid:$scope.formModels.teacherid,
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        contactid:$scope.formModels.contactid,
        email:$scope.formModels.email,
        };
      // alert($scope.updateId);
        if($scope.updateId!=0){//update
        //    alert("i am here");
          alert($scope.updateId);  teacherHttp.updatePersonList(tempObj,$scope.updateId).then(function(response){
            alert("successfully updated");
            refreshEntries();    
        });
        }else{//add
        teacherHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        }   
        //$scope.cubicDatabase.push(tempObj);
    }; 

function refreshEntries(){
    var promise= teacherHttp.getPersonList();
    promise.then(function(response){
        $scope.teacherDatabase = response;
        console.log(response);
        
    });
    }
        
}]);