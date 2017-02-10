"use strict";
angular.module("appName").directive("programTable",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/programTable.html",
        controller:"programCtrl"
        
    }
    
}]);