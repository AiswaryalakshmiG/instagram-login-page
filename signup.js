function creatinguser() {
    const mail = document.getElementById("mail").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (mail === "" || username === "" || password === "") {
        alert("Please fill in all required fields!");
        return false;
    }
    // 1. Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // 2. Create user object
    const newUser = {
        username: username,
        password: password
    };
    // 3. Push new user to array
    users.push(newUser);
    // 4. Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Save to localStorage
    // localStorage.setItem("signupUsername", username);
    // localStorage.setItem("signupPassword", password);

    alert("Account created successfully! Please login.");
    window.location.href = "login.html"; // redirect to login
    return false; // prevent actual form submission
}
