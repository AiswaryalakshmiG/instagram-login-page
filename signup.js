function creatinguser() {
    const mail = document.getElementById("mail").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (mail === "" || username === "" || password === "") {
        alert("Please fill in all required fields!");
        return false;
    }

    // Save to localStorage
    localStorage.setItem("signupUsername", username);
    localStorage.setItem("signupPassword", password);

    alert("Account created successfully! Please login.");
    window.location.href = "login.html"; // redirect to login
    return false; // prevent actual form submission
}
