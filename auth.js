function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function signup() {
    const username = document.getElementById("su-username").value.trim();
    const password = document.getElementById("su-password").value.trim();

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    const users = getUsers();

    if (users.find(u => u.username === username)) {
        alert("Username already exists");
        return;
    }

    users.push({ username, password });
    saveUsers(users);

    alert("Account created successfully");
    window.location.href = "login.html";
}


function login() {
    const username = document.getElementById("li-username").value.trim();
    const password = document.getElementById("li-password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "profile.html";
    } else {
        alert("Incorrect username or password");
    }
function checkLogin() {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html"; // Not logged in
    } else {
        document.getElementById("user").textContent = user;
    }
}
}
