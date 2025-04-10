function validatelogin (){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username ===" "|| password ===" "){
        alert("Enter username and passord");
        return false;
    }
        alert("login successfully");
        return true; 
}