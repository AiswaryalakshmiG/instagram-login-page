function loginpage() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter username and password!");
        return false;
    }

    const savedUsername = localStorage.getItem("signupUsername");
    const savedPassword = localStorage.getItem("signupPassword");

    if (username === savedUsername && password === savedPassword) {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password!");
        return false;
    }
}
