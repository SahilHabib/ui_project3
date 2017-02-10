"use strict";
angular.module("appName").directive("sessionForm",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/sessionForm.html",
        controller:"sessionCtrl"
        
    }
    
}]);