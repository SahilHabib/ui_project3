angular.module("appName").service("classHttp",["$http",function($http){
    this.personList = [];
    var that = this;
    this.getPersonList = function() {
        return $http({
            method:"GET",
            url:"/service/class"
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/class/"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/class",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/class/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataparam,classid) {
        return $http({
            method:"PUT",
            url:"/service/class/"+classid,
            data:dataparam
            
        }).then(function(result){
            return result.status;
        });
    }
}]);