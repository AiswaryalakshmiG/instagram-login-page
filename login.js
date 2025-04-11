document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUsername = localStorage.getItem("signupUsername");
    const savedPassword = localStorage.getItem("signupPassword");

    if (username === savedUsername && password === savedPassword) {
        alert("Login successful!");
        window.location.href = "homepage.html";
    } else {
        alert("Invalid username or password!");
    }
});