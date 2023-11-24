document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    if(validateForm()) {
      alert('Form submitted successfully!');
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  });
});

function validateForm() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^\d{10}$/;

  let firstNameErr = document.getElementById('first-name-err');
  let lastNameErr = document.getElementById('last-name-err');
  let emailErr = document.getElementById('email-err');
  let phoneErr = document.getElementById('phone-err');

  firstNameErr.textContent = '';
  lastNameErr.textContent = '';
  emailErr.textContent = '';
  phoneErr.textContent = '';

  if (firstName.trim() === '') {
    firstNameErr.textContent = 'Please enter your first name';
    return false;
  }

  if(lastName.trim === '') {
    lastNameErr.textContent = 'Please enter your last name';
    return false;
  }

  if(email.trim === '' || !emailRegex.test(email)) {
    emailErr.textContent = 'Please enter a valid email address';
    return false;
  }

  if (phone.trim() === '' || !phoneRegex.test(phone)) {
    phoneErr.textContent = 'Please enter a valid 10-digit phone number';
    return false;
  }

  return true;
}