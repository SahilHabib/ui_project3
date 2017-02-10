"use strict";
angular.module("appName").directive("teacherTable",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/teacherTable.html",
        controller:"teacherCtrl"
        
    }
    
}]);