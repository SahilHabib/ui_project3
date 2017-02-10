"use strict";
angular.module("appName").directive("programForm",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/programForm.html",
        controller:"programCtrl"
        
    }
    
}]);