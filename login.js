function validatelogin (){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username ===" "|| password ===" "){
        // console.log("Username: " + username.value);
        // console.log("password: " + password.value);
        alert("Enter username and passord");
        return false;
    }
        alert("login successfully");
        return true; 
}