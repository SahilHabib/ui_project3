"use strict";

angular.module("appName").factory("personFactory",function(){
    var studentid, firstName, lastName, address, contactNumber, email, socialSN;
      var _this = this;
    
return{
    setStudentId:function(studentid){
        _this.studentid = studentid;
},
    setFirstName:function(fName){
        _this.firstName = fName;
},
    setLastName:function(lName) {
        _this.lastName = lName;
},
    setAddress:function(add) {
        _this.address = add;
},
    setContactNumber:function(contactid) {
        _this.contactNumber = contactid;
},
    setEmail:function(email) {
        _this.email = email;
},
    setSocialSN:function(socialSN) {
        _this.socialSN = socialSN;
},
    getStudentId:function() {
        return_this.studentid;
},
    getFirstName:function() {
        return_this.firstName;
},
    getLastName:function() {
        return_this.lastName;
},
    getAddress:function() {
        return_this.address;
},
    getContactNumber:function() {
        return_this.contactNumber;
},
    getEmail:function() {
        return_this.email;
},
    getSocialSN:function() {
        return_this.socialSN;
},

testValues:function() {
    console.log("from factory");
    console.log(_this.studentid);
    console.log(_this.firstName);
    console.log(_this.lastName);
    console.log(_this.address);
    console.log(_this.contactNumber);
    console.log(_this.email);
    console.log(_this.socialSN);
    }
}
    
                                  
    });