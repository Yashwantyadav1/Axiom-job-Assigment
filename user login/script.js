// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const userId = document.getElementById('userId').value;
//     const password = document.getElementById('password').value;
    
//     if (userId ==='user' && password ==='123') {
//         alert('Login Successful!');
//         window.location.href ='../user portal/index.html';
//     } else {
//         alert('Please fill in both fields.');
//     }
// });

// redirecting vendor signup page
document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Redirecting to user signup');
    window.location.href = '../user signup/index.html'; // Example of redirect
});

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
        window.location.href = '../user portal/index.html'; // Redirect to user portal
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});