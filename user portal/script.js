// Dropdown interaction for main drop down
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Dropdown interaction for vendor button
document.querySelector('.vendor-btn').addEventListener('click', function() {
    const vendorDropdownContent = document.querySelector('.vendor-dropdown-content');
    vendorDropdownContent.style.display = vendorDropdownContent.style.display === 'block' ? 'none' : 'block';
});

// redirect to cart page
document.getElementById('cart-btn').addEventListener('click', function() {
    // alert('Redirecting to User Login');
    window.location.href = '../cart page/index.html'; 
});

// redirect to order status page
document.getElementById('order-btn').addEventListener('click', function() {
    // alert('Redirecting to User Login');
    window.location.href = '../order status user/index.html'; 
});

// redirect to update page
document.getElementById('guest-btn').addEventListener('click', function() {
    // alert('Redirecting to User Login');
    window.location.href = '../update page/index.html'; 
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../user login/index.html'; // Change to your login page URL
});