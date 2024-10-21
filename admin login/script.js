document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    
    if (userId === 'Admin' && password === 'Admin') {
        alert('Login Successful!');
        window.location.href = '../admin page/index.html';
    } else {
        alert('Incorrect User Id or Password');
    }
});

function resetForm() {
    document.getElementById('userid').value = '';
    document.getElementById('password').value = '';
}
