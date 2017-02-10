"use strict";
angular.module("appName").directive("sessionTable",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/sessionTable.html",
        controller:"sessionCtrl"
        
    }
    
}]);