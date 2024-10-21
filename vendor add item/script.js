// Basic button interactions
document.querySelector('.submit-btn').addEventListener('click', function() {
    alert('Product Added');
});

document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert(`${button.innerText} button clicked`);
    });
});

// redirecting to product status page
document.getElementById('product-btn').addEventListener('click', function() {
    window.location.href = '../product status page/index.html'; 
});

// redirecting to request item page
document.getElementById('request-btn').addEventListener('click', function() {
    window.location.href = '../request item page/index.html'; 
});

// redirecting to product page
document.getElementById('view-product-btn').addEventListener('click', function() {
    window.location.href = '../product page/index.html'; 
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    alert('Logging out.!')
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../vendor login/index.html'; // Change to your login page URL
});
