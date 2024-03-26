document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get username and password from form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send POST request to login endpoint
  fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: 'example',
        password: 'password',
    }),
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Invalid username or password');
    }
  })
  .then(data => {
    // Successful login
    console.log(data); // Do something with the response data, such as storing the JWT token
    document.getElementById('message').textContent = 'Login successful';
  })
  .catch(error => {
    // Failed login
    console.error('Login error:', error.message);
    document.getElementById('message').textContent = error.message;
  });
});
