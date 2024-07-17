import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetMyStudents = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetching data from the server using axios
    axios.get('http://localhost:4000/getAllStudents')
      .then(res => {
        setRecords(res.data); // Set the retrieved data to state
      })
      .catch(err => {
        console.error('Error fetching student records:', err);
        // Handle errors as needed
      });
  }, []);

  return (
    <div className='table-responsive'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Actions</th> {/* Added header for actions */}
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.firstname}</td>
              <td>{r.lastname}</td>
              <td>{r.gender}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id={`dropdown-${i}`} size="sm">
                    Perform Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* Adjusted Link to use correct syntax */}
                    <Link to={`/UpdateStudent/${r._id}`} className="dropdown-item">
                      Edit student
                    </Link>
                    
                    
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetMyStudents;
