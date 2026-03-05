// Get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// SIGNUP
function signup() {
  const username = document.getElementById("su-username").value.trim();
  const password = document.getElementById("su-password").value.trim();

  if (!username || !password) {
    alert("Please fill in both username and password.");
    return;
  }

  const users = getUsers();
  if (users.find(u => u.username === username)) {
    alert(`Username "${username}" already exists.`);
    return;
  }

  users.push({ username, password });
  saveUsers(users);

  document.getElementById("su-username").value = "";
  document.getElementById("su-password").value = "";

  alert(`Account created successfully for "${username}"!`);
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const username = document.getElementById("li-username").value.trim();
  const password = document.getElementById("li-password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    alert(`Welcome back, ${username}!`); // ✅ Always text
    window.location.href = "profile.html";
  } else {
    alert("Incorrect username or password.");
  }
}

// CHECK LOGIN
function checkLogin() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "login.html";
  } else {
    const usernameEl = document.getElementById("username");
    if (usernameEl) usernameEl.textContent = user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out successfully.");
  window.location.href = "login.html";
}
