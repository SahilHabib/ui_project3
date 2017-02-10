angular.module("appName").service("sessionHttp",["$http",function($http){
    this.personList = [];
    var that = this;
    this.getPersonList = function() {
        return $http({
            method:"GET",
            url:"/service/session"
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/session/"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/session",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/session/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataparam,sessionid) {
        return $http({
            method:"PUT",
            url:"/service/session/"+sessionid,
            data:dataparam
            
        }).then(function(result){
            return result.status;
        });
    }
}]);