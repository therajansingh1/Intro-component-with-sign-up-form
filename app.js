document.getElementById("submit").addEventListener("click",function (event){
    event.preventDefault();
    validate();
});
var fname = document.getElementById("name")
var lname = document.getElementById("lastname")
var email = document.getElementById("email")
var pass = document.getElementById("password")
function validate(){
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailId = email.value.trim();
    var password = pass.value.trim();
    var pattern = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if(firstName==="" || firstName== null){
        seterror(fname,"First name cannot be empty")
    }
    if(lastName==="" || lastName==null){
        seterror(lname,"Last name cannot be empty")
    }
    if(!emailId.match(pattern)){
        seterror(email,"Looks like this is not an email")
    }
    if(password==""){
        seterror(pass,"Password cannot be empty")
    }else if(password.length<8){
        seterror(pass,"Password cannot be less then 8 digit")
        return false;
    }
    

}

function seterror(id,msg){
    var parentBox=id.parentElement;
   var errorImg= parentBox.querySelector(".error-icon");
   var errorMsg= parentBox.querySelector("p");
   errorImg.classList.remove("hidden-icon");
   errorMsg.innerText=msg;
}

