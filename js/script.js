// Simulate a simple in-memory database
const users = [];

// Handle signup
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save user details
    users.push({ username, email, password });
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
});

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate user
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert(`Welcome back, ${username}!`);
    } else {
        alert('Invalid username or password!');
    }
});
