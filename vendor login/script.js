// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Get stored credentials from localStorage
    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');

    if (userId === storedUserId && password === storedPassword) {
        alert('Login Successful!');
        window.location.href = '../welcome vendor page/index.html'; // Redirect to vendor  portal
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});

// redirecting vendor signup page
document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Redirecting to Vendor signup');
    window.location.href = '../vendor signup/index.html'; // Example of redirect
});
// redirecting vendor welcome page
document.getElementById('back-btn').addEventListener('click', function() {
    // alert('Redirecting to Vendor signup');
    window.location.href = '../welcome page/index.html'; // Example of redirect
});






