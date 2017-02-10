"use strict";
angular.module("appName").directive("batchTable",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/batchTable.html",
        controller:"batchCtrl"
        
    }
    
}]);