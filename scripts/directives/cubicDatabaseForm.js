"use strict";
angular.module("appName").directive("studentForm",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/studentForm.html",
        controller:"cubicDatabaseCtrl"
        
    }
    
}]);