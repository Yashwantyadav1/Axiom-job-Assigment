// JavaScript to handle interactions such as button clicks can go here.
// For example, adding event listeners for update and delete buttons.

document.querySelectorAll('.update-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Update button clicked!');
    });
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Delete button clicked!');
    });
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage or sessionStorage if used for storing user session data
    localStorage.clear(); // Clear all data from localStorage (or sessionStorage if you're using that)
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to the login page or homepage after logging out
    window.location.href = '../vendor login/index.html'; 
});