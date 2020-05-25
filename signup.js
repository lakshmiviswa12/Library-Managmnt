let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");

    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    var reg2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    

function validate()
{
    
     if(reg.test(email.value)&&reg1.test(pwd.value)&&reg2.test(pno.value)){
        error.innerHTML = "Valid";
        error1.innerHTML = "Valid pwd";
        error.style.color = "blue";
        error1.style.color = "blue";
        error3.innerHTML = "Valid";
        error3.style.color = "blue";
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
    else if(reg2.test(pno.value)){
        error3.innerHTML = "Valid";
        error3.style.color = "blue";
        return false;
    }
    else if(reg2.test!=(pno.value)){
        error3.innerHTML = "Invalid Number";
        error3.style.color = "red";
        return false;
    }
    else {
        error1.innerHTML = "Invalid pwd";
        error.style.color = "red";
    } 
}
function ontype(){
    if(pwd.value.length<8) {
        error1.innerHTML = "Invalid Password";
        error1.style.color = "red";
        
    }
    else if(pwd.value.length==6||pwd.value.length<=7){
        error1.innerHTML = "Poor";
        error1.style.color="red";
    }
    else if(pwd.value.length==8||pwd.value.length<=9){
        error1.innerHTML = "Medium";
        error1.style.color="orange";
    }
    else {
        error1.innerHTML = "Strong";
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