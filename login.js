let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");



    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    

function validate()
{
    
     if(reg.test(email.value)&&reg1.test(pwd.value)){
        error.innerHTML = "Valid";
        error1.innerHTML = "Valid pwd";
        error.style.color = "blue";
        error1.style.color = "blue";
        return true
        ontype();
         
    }
        
    else  if(reg.test(email.value)) {
        error.innerHTML = "Valid Email";
        error.style.color = "blue";
        return false;
        
    }
    else if(reg.test!=(email.value)){
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
    else {
        error1.innerHTML = "Invalid pwd";
        error.style.color = "red";
    }

   
   
    
    
}
function ontype(){
    if(pwd.value.length<8) {
        error1.innerHTML = "Invalid Pwd";
        error1.style.color = "red";
        
    }
    else if(pwd.value.length==8||pwd.value.length<=10){
        error1.innerHTML = "poor";
        error1.style.color="red";
    }
    else if(pwd.value.length==11||pwd.value.length<=13){
        error1.innerHTML = "medium";
        error1.style.color="orange";
    }
    else {
        error1.innerHTML = "strong";
        error1.style.color = "green";
    }
    
}
function check(){
    if(reg1.test!=(pwd.value)){
       error2.innerHTML = "Password should contain minimum 8 characters,atleast 1 uppercase,lowercase & a number";
       error2.style.color = "red";
       return true;
    }
}