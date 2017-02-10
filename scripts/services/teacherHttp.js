angular.module("appName").service("teacherHttp",["$http",function($http){
    this.personList = [];
    var that = this;
    this.getPersonList = function() {
        return $http({
            method:"GET",
            url:"/service/teacher"
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/teacher/"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/teacher",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/teacher/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataparam,teacherid) {
        return $http({
            method:"PUT",
            url:"/service/teacher/"+teacherid,
            data:dataparam
            
        }).then(function(result){
            return result.status;
        });
    }
}]);