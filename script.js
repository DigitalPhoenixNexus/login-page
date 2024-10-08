document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (username === 'admin' && password === 'password123') {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password';
    }
});

document.getElementById('createAccount').addEventListener('click', function(event) {
    event.preventDefault();
    showCreateAccountPage();
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    showForgotPasswordPage();
});

document.getElementById('modeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark', this.checked);
});

function showCreateAccountPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Create Account</h2>
        <form id="createAccountForm">
            <label for="newUsername">Username</label>
            <input type="text" id="newUsername" name="newUsername" required>

            <label for="newPassword">Password</label>
            <input type="password" id="newPassword" name="newPassword" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Create Account</button>
        </form>
        <div class="additional-links">
            <a href="#" id="backToLogin">Back to Login</a>
        </div>
    `;

    document.getElementById('createAccountForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Account created successfully!');
        showLoginPage();
    });

    document.getElementById('backToLogin').addEventListener('click', function(event) {
        event.preventDefault();
        showLoginPage();
    });
}

function showForgotPasswordPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Forgot Password</h2>
        <form id="forgotPasswordForm">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Reset Password</button>
        </form>
        <div class="additional-links">
            <a href="#" id="backToLogin">Back to Login</a>
        </div>
    `;

    document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Password reset link sent!');
        showLoginPage();
    });

    document.getElementById('backToLogin').addEventListener('click', function(event) {
        event.preventDefault();
        showLoginPage();
    });
}

function showLoginPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
        <div id="message"></div>
        <div class="additional-links">
            <a href="#" id="createAccount">Create Account</a>
            <a href="#" id="forgotPassword">Forgot Password?</a>
        </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');

        if (username === 'admin' && password === 'password123') {
            messageDiv.style.color = 'green';
            messageDiv.textContent = 'Login successful!';
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = 'Invalid username or password';
        }
    });

    document.getElementById('createAccount').addEventListener('click', function(event) {
        event.preventDefault();
        showCreateAccountPage();
    });

    document.getElementById('forgotPassword').addEventListener('click', function(event) {
        event.preventDefault();
        showForgotPasswordPage();
    });
}
