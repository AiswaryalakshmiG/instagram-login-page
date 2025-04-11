document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", function () {
        alert("Logging out...");
        window.location.href = "login.html";
    });
});