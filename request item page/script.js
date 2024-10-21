document.querySelectorAll('.nav-button, .item-button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`${button.textContent} clicked!`);
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