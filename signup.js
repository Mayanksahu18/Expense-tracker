document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;

  // For simplicity, we'll just "save" user info in localStorage
  // In real apps, you'd send this data to a backend server

  if (email && password) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Signup successful! You can now log in.');
    window.location.href = 'index.html'; // Redirect to login page
  } else {
    alert('Please fill in all fields');
  }
});