// Next Concept: Handling Asynchronous API Calls with Forms
// When working with real-world apps, you often submit form data to a server via an API. Handling API calls asynchronously introduces additional concepts like managing loading states, handling errors, and processing responses.

// We'll learn how to:

// Simulate an API call with asynchronous behavior.
// Handle loading states while waiting for a response.
// Handle errors in case the API fails.
// Plan
// Simulate an API request (using setTimeout to mock network latency).
// Add a loading indicator while the mock API is processing.
// Handle API success and failure scenarios.
// Example: Simulating Form Submission with API
// We will integrate API-like behavior into our form submission:


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

  const [isLoading, setIsLoading] = useState(false); // Handle loading state
  const [apiMessage, setApiMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

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

    if (Object.values(errors).some((error) => error)) {
      alert('Please fix the errors before submitting');
      return;
    }

    // Simulate an API request
    try {
      setIsLoading(true); // Show loader
      setApiMessage('');

      // Simulate network latency with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
      setApiMessage('Form submitted successfully!');
      console.log('Submitted Data:', formValues);
    } catch (error) {
      setIsLoading(false);
      setApiMessage('Failed to submit the form.');
    }
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {apiMessage && <p style={{ color: isLoading ? 'blue' : 'green' }}>{apiMessage}</p>}
    </form>
  );
}





// Explanation:
// Loading State

// jsx
// Copy code
// const [isLoading, setIsLoading] = useState(false);
// We introduce a loading state that indicates whether the form submission is in progress.
// Simulated API Call with setTimeout

// jsx
// Copy code
// await new Promise((resolve) => setTimeout(resolve, 2000));
// This simulates an asynchronous network request that takes 2 seconds.
// Show Loader & Handle Success

// jsx
// Copy code
// setIsLoading(true);
// setApiMessage('');
// Before making the simulated API call, we set the loading state to true and clear any previous messages.
// Handle Success

// jsx
// Copy code
// setIsLoading(false);
// setApiMessage('Form submitted successfully!');
// Once the simulated API resolves, loading stops, and the success message is shown.
// Handle Errors

// jsx
// Copy code
// setApiMessage('Failed to submit the form.');
// Simulate error handling by setting a failure message if an unexpected issue occurs.
// Dynamic Button State

// jsx
// Copy code
// disabled={isLoading}
// The submit button is disabled during submission to prevent multiple clicks.