document.getElementById('signupForm').addEventListener('submit', function(e) {
    // Get the form fields
    const privacyCheckbox = document.getElementById('privacy');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    let formIsValid = true;

    // Remove existing error messages, if any
    document.querySelectorAll('.error-message').forEach(function(error) {
        error.remove();
    });

    // Check if the privacy policy checkbox is checked
    if (!privacyCheckbox.checked) {
        // Prevent the form from submitting
        e.preventDefault();
        formIsValid = false;

        // Display a privacy policy error message
        const privacyError = document.createElement('div');
        privacyError.innerText = 'Please agree to the Privacy Policy to continue.';
        privacyError.style.color = 'red';
        privacyError.style.marginTop = '10px';
        privacyError.classList.add('error-message');

        // Append error message to the privacy policy section
        document.querySelector('.privacy-policy').appendChild(privacyError);
    }

    // Email validation to check for "@"
    if (!emailField.value.includes('@')) {
        // Prevent the form from submitting
        e.preventDefault();
        formIsValid = false;

        // Display an email validation error message
        const emailError = document.createElement('div');
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.color = 'red';
        emailError.style.marginTop = '10px';
        emailError.classList.add('error-message');

        // Append the error message after the email field
        emailField.parentNode.appendChild(emailError);
    }

    // Password and confirm password match validation
    if (passwordField.value !== confirmPasswordField.value) {
        // Prevent the form from submitting
        e.preventDefault();
        formIsValid = false;

        // Display a password mismatch error message
        const passwordError = document.createElement('div');
        passwordError.innerText = 'Passwords do not match.';
        passwordError.style.color = 'red';
        passwordError.style.marginTop = '10px';
        passwordError.classList.add('error-message');

        // Append the error message after the confirm password field
        confirmPasswordField.parentNode.appendChild(passwordError);
    }

    // If all validations pass, allow form submission
    if (formIsValid) {
        // Form will submit if no issues
    }
});

