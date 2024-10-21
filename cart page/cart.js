function navigateHome() {
    alert("Navigating to Home!");
    // Logic to navigate to the home page can go here.
}

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../user login/index.html'; // Change to your login page URL
});

// redirecting to check out page
document.getElementById('checkout-btn').addEventListener('click', function() {
    // alert('Redirecting to User Login');
    window.location.href = '../check out page/index.html'; // Example of redirect
});

// redirecting to product page
document.getElementById('product-btn').addEventListener('click', function() {
    // alert('Redirecting to User Login');
    window.location.href = '../product page/index.html'; // Example of redirect
});
