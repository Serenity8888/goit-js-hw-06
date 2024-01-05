document.addEventListener('DOMContentLoaded', function () {
  // Select the login form
  const loginForm = document.querySelector('.login-form');

  // Add submit event listener to the form
  loginForm.addEventListener('submit', function (event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get form elements
    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];

    // Check if fields are empty
    if (!emailInput.value || !passwordInput.value) {
      alert('All fields must be filled in.');
      return;
    }

    // Create an object with field values
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    // Display the object in the console
    console.log(formData);

    // Reset the form fields
    loginForm.reset();
  });
});

