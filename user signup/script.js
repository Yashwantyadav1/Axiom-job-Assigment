// Basic JavaScript functionality for navigation buttons
document.getElementById('chart').addEventListener('click', function() {
    alert('Chart button clicked');
});

document.getElementById('back').addEventListener('click', function() {
    alert('Back button clicked');
});

// redirecting back to the login page
document.getElementById('back').addEventListener('click', function() {
    // alert('Redirecting to user signup');
    window.location.href = '../user login/index.html'; // Example of redirect
});

// Signup functionality
document.getElementById('signup').addEventListener('click', function() {
    const signupUserId = document.getElementById('signupUserId').value; // Assuming an input with id 'signupUserId'
    const signupPassword = document.getElementById('signupPassword').value; // Assuming an input with id 'signupPassword'

    if (signupUserId && signupPassword) {
        // Save user credentials to localStorage
        localStorage.setItem('userId', signupUserId);
        localStorage.setItem('password', signupPassword);

        alert('Signup Successful! You can now log in.');
        window.location.href = '../user login/index.html'; // Redirect to login page after signup
    } else {
        alert('Please fill in both fields to sign up.');
    }
});


