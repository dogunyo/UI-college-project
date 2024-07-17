import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Create = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidInput = (input) => {
    return typeof input === 'string' && input.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidInput(data.username) || !isValidInput(data.email) || !isValidInput(data.password)) {
      setError('Please enter valid input in all fields');
      return;
    }

    // Clearing errors if all fields are valid
    setError('');

    // Example: Sending data to the server or performing further actions
    console.log('Form submitted successfully', data);
  };

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter Username"
            value={data.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Register
        </Button>

        {error && <p className="error">{error}</p>}
      </Form>
      <p>
      Already have an account? <Link to="/login" className="button-link">Login</Link>
      </p>

    </div>
  );
};

export default Create;