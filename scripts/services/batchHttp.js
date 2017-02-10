angular.module("appName").service("batchHttp",["$http",function($http){
    this.personList = [];
    var that = this;
    this.getPersonList = function() {
        return $http({
            method:"GET",
            url:"/service/batch"
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/batch/"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/batch",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/batch/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataparam,batchid) {
        return $http({
            method:"PUT",
            url:"/service/batch/"+batchid,
            data:dataparam
            
        }).then(function(result){
            return result.status;
        });
    }
}]);
