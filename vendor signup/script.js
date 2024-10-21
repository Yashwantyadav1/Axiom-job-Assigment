document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const category = document.getElementById('category').value;
    
    if (name && email && password && category) {
        alert('Sign Up Successful!');
    } else {
        alert('Please fill in all fields.');
    }
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
        window.location.href = '../vendor login/index.html'; // Redirect to login page after signup
    } else {
        alert('Please fill all the  fields to sign up.');
    }
});
