"use strict";
angular.module("appName").directive("teacherForm",[function(){
    return{
        restrict:"EAMC", 
        templateUrl:"/views/teacherForm.html",
        controller:"teacherCtrl"
        
    }
    
}]);