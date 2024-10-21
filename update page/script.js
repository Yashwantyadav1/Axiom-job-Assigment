document.querySelector('.update-btn').addEventListener('click', function() {
    const selectedStatus = document.querySelector('input[name="status"]:checked');
    const statusMessage = document.getElementById('status-message');
    
    if (selectedStatus) {
        statusMessage.textContent = `Status updated to: ${selectedStatus.value}`;
    } else {
        statusMessage.textContent = 'Please select a status to update.';
    }
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../user login/index.html'; 
});
