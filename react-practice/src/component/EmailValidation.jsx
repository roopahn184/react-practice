import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setValidEmail(emailPattern.test(inputEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Make an API request to validate the email
      const response = await axios.post('YOUR_API_ENDPOINT', { email });
      
      // Check the response from the API for validation
      if (response.data.isValid) {
        // Handle success (e.g., show a success message)
        alert('Email is valid!');
      } else {
        // Handle validation error (e.g., show an error message)
        alert('Email is not valid!');
      }
    } catch (error) {
      // Handle API request error
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="App">
      <h1>Email Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
      {validEmail ? (
        <p className="valid">Valid email address</p>
      ) : (
        <p className="invalid">Invalid email address</p>
      )}
    </div>
  );
}

export default App;
