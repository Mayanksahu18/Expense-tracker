document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const savedEmail = localStorage.getItem('userEmail');
  const savedPassword = localStorage.getItem('userPassword');

  if (email === savedEmail && password === savedPassword) {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

// Forgot password click
document.getElementById('forgotLink').addEventListener('click', function(e) {
  e.preventDefault();
  const savedEmail = localStorage.getItem('userEmail');
  const savedPassword = localStorage.getItem('userPassword');

  if (savedEmail && savedPassword) {
    alert(`Your credentials:\nEmail: ${savedEmail}\nPassword: ${savedPassword}`);
  } else {
    alert("No account found. Please sign up first.");
  }
});
