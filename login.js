document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();


    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists in array
    const matchedUser = users.find(user => user.username === username && user.password === password);

    // const savedUsername = localStorage.getItem("signupUsername");
    // const savedPassword = localStorage.getItem("signupPassword");

    if (matchedUser) {
        alert("Login successful!");
        window.location.href = "homepage.html";
    } else {
        alert("Invalid username or password!");
    }
});
