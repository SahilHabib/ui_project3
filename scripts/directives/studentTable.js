"use strict";
angular.module("appName").directive("studentTable",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/studentTable.html",
        controller:"cubicDatabaseCtrl"
        
    }
    
}]);