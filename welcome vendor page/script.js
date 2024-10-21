// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../user login/index.html'; // Change to your login page URL
});

// redirecting to vendor add item page
document.getElementById('add-item-btn').addEventListener('click', function() {
    window.location.href = '../vendor add item/index.html'; // Change to your login page URL
});
