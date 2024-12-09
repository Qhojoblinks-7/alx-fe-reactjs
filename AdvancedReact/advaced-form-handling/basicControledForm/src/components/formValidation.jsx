import { useState } from 'react';

function ControlledForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Validate fields on change
    let errorMsg = '';

    if (name === 'name' && value.trim().length < 3) {
      errorMsg = 'Name must be at least 3 characters long';
    }

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      errorMsg = 'Invalid email address';
    }

    if (name === 'password' && value.trim().length < 6) {
      errorMsg = 'Password must be at least 6 characters long';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if there are any validation errors before submission
    if (Object.values(errors).some((error) => error)) {
      alert('Please fix the errors before submitting');
      return;
    }

    alert('Form submitted successfully');
    console.log('Submitted Values:', formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}



// Explanation of Changes:
// Error State Tracking:

// jsx
// Copy code
// const [errors, setErrors] = useState({
//   name: '',
//   email: '',
//   password: '',
// });
// We track validation errors for each form field here.
// Validation Logic inside handleChange:

// jsx
// Copy code
// if (name === 'name' && value.trim().length < 3) {
//   errorMsg = 'Name must be at least 3 characters long';
// }

// if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
//   errorMsg = 'Invalid email address';
// }

// if (name === 'password' && value.trim().length < 6) {
//   errorMsg = 'Password must be at least 6 characters long';
// }
// Name Validation: Ensure the name has at least 3 characters.
// Email Validation: Checks if the email is in a valid format.
// Password Validation: Ensures the password is at least 6 characters long.
// Errors shown near each field:

// jsx
// Copy code
// {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
// Error messages will appear under each field dynamically as the user types.
// Prevent Submission if Errors Exist:

// jsx
// Copy code
// if (Object.values(errors).some((error) => error)) {
//   alert('Please fix the errors before submitting');
//   return;
// }
// Prevents submission if any error exists in the errors state.3