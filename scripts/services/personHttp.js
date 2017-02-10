angular.module("appName").service("personHttp",["$http",function($http){
    this.personList = [];
    //this.test="casdfasdfg";
    var that = this;
    this.getPersonList = function() {
        //console.log("before");
        return $http({
            method:"GET",
            url:"/service/student"
        }).then(function(result){
            //alert("getting hit");
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/student/"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/student",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/student/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataparam,studentid) {
        return $http({
            method:"PUT",
            url:"/service/student/"+studentid,
            data:dataparam
            
        }).then(function(result){
            return result.status;
        });
    }
}]);












