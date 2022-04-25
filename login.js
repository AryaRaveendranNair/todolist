const form = document.getElementsByTagName('form')[0];
var msg = document.getElementById("msg");
username.value="";
password.value="";  
 
function validate(checksuccess) {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
  checksuccess(username,password);
}

function login(username,password){

    if(username.value =="" && password.value == ""){
        alert("KINDLY ENTER DETAILS");
        setTimeout(function(){ 
            msg.innerHTML = "";
        }, 1500);
    }
    else if (username.value =="admin" && password.value == "12345") {
        alert("Welcome to TODO List App");
        window.location.href="mainpage.html";
    }
    else {
        alert("Invalid login");
     }
} 
function success(){
    validate(login);
}

form.addEventListener('submit', function (event) {
        // if the email field is valid, we let the form submit
        if (!success()) {
            // Then we prevent the form from being sent by canceling the event
            event.preventDefault();
        }
    });
    