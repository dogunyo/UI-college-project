import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Import Form and Button from react-bootstrap
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    gender: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem('access_token');

    axios.post(
      'http://localhost:4000/addStudents',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        toast.success('New student added successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.error('An error occurred while adding the record.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="col-md-6 offset-md-3 addStudent">
      <h3 className="mytext"> Add Student</h3>
      <Form onSubmit={saveStudent} className="addStudentForm">
        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>Firstname:</Form.Label>
          <Form.Control
            type="input"
            required
            onChange={handleChange}
            name="firstname"
            placeholder="Enter Firstname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Lastname:</Form.Label>
          <Form.Control
            type="input"
            required
            onChange={handleChange}
            name="lastname"
            placeholder="Enter Lastname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Gender:</Form.Label>
          <Form.Select required onChange={handleChange} name="gender">
            <option value="">--Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Student
        </Button>

        <ToastContainer />
      </Form>
    </div>
  );
};

export default AddStudent;
