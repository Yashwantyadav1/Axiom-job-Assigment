// You can add interactivity here, such as button click events
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} button clicked!`);
    });
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../welcome page/index.html'; 
});

// redirecting to maintain user page
document.getElementById('maintain-user-btn').addEventListener('click', function() {
    window.location.href = '../maintain user page/index.html'; 
});

// redirecting to maintain vendor page
document.getElementById('maintain-vendor-btn').addEventListener('click', function() {
    window.location.href = '../maintain vendor/index.html'; 
});