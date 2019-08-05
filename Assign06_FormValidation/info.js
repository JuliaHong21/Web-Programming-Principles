//message of success
function formValidation() {   
    clearErrors();
    if (validatefName() === true && validatelName() === true &&
    validateUsername() === true &&
    validatePass() === true && validateConfirmPass() === true &&    
    validateAge() === true) {
    alert("Registration Success");
        return true;
    } else {
        return false;
    }
}

//delete error a message on the side
function clearErrors() {   
    document.querySelector("#fNameError").innerHTML = "";
    document.querySelector("#lNameError").innerHTML = "";
    document.querySelector("#usernameError").innerHTML = "";
    document.querySelector("#passError").innerHTML = "";
    document.querySelector("#ConfirmPassError").innerHTML = "";
    document.querySelector("#edulevelError").innerHTML = "";
    document.querySelector("#edustatusError").innerHTML = "";
    document.querySelector("#emailError").innerHTML = "";
    document.querySelector("#ageError").innerHTML = "";    
}

//First name: start with a cap, alphabet only
function validatefName() {
    var error = document.querySelector("#fNameError");
    var elem = document.querySelector("#fName");
    var input = elem.value.trim();    
    for (var i = 0; i < input.length; i++) { 
        if (input.charAt(0) != input.charAt(0).toUpperCase()) {
            clearErrors();
            error.innerHTML += "<p>*Must start with a capital letter.</p>";
            document.signup.fName.focus();
            return false;
        }

        if (input.charAt(i) < "A" || input.charAt(i) > "z" ) {
            clearErrors();
            error.innerHTML += "<p>*only alphabet allowed.</p>";
            document.signup.fName.focus();
            return false;
        }
        
        clearErrors();
        return true;
    }
}

//Last name: start with a cap, alphabet only
function validatelName() {
    var error = document.querySelector("#lNameError");
    var elem = document.querySelector("#lName");
    var input = elem.value.trim();
    
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(0) != input.charAt(0).toUpperCase()) {
            clearErrors();
            error.innerHTML += "<p>*Must start with a capital letter.</p>";
            document.signup.lName.focus();
            return false;
        }

        if (input.charAt(i) < "A" || input.charAt(i) > "z") {
            clearErrors();
            error.innerHTML += "<p>*Only alphabet allowed.</p>";
            document.signup.lName.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}


//Password: 6 char, start with a char, a least 1 digit and 1 uppercase
function validatePass() {
    var error = document.querySelector("#passError");
    var elem = document.querySelector("#password");
    var input = elem.value.trim();        
        if(input.length !=6||input.search(/[A-Z]/i)!=0||input.search(/\d/)==-1||input.search(/[A-Z]/)==-1){
            clearErrors();
                error.innerHTML = "<p>*Must be 6 characters long, must start with a character, must have a least 1 digit and 1 uppercase.</p>";
                document.signup.password.focus();
                return false;
        }
        clearErrors();
        return true;
    //}
}

//Password confirm
function validateConfirmPass() {
    var error = document.querySelector("#ConfirmPassError");
    var input = document.signup.confirmPassword.value.trim();
    if (input != document.signup.password.value.trim()) {
        clearErrors();
        error.innerHTML += "<p>*Passwords must match.</p>";
        document.signup.confirmPassword.focus();
        return false;
    }
    clearErrors();
    return true;
}

//User name: must start with a letter, must have at least 6
function validateUsername() {
    var error = document.querySelector("#usernameError");
    var elem = document.querySelector("#username");
    var input = elem.value.trim();   
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(0) < "A" || input.charAt(0) > "z") {
            clearErrors();
            error.innerHTML += "<p>*Must start with a letter.</p>";
            document.signup.username.focus();
            return false;
        }
        if (input.length != 6) {
            clearErrors();
            error.innerHTML += "<p>*Username must be 6 characters long.</p>";
            document.signup.username.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

//Age in between 10-60
function validateAge() {
    var error = document.querySelector("#ageError");
    var elem = document.querySelector("#age"); 
    var age = Number(elem.value)
    
        if (age < 18 || age > 60) {
            clearErrors();
            error.innerHTML += "<p>*Must be in between 18-60.</p>";  
            document.signup.age.focus();          
            return false;
        }        
        clearErrors();
        return true;    
}


