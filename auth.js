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
