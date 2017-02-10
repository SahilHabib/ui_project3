"use strict";
angular.module("appName").directive("batchForm",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/batchForm.html",
        controller:"batchCtrl"
        
    }
    
}]);