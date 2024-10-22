import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListUserPage() {
  const [data, setData] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:8000/users");
      setData(response.data);
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>USER ID</th>
          <th>USER NAME</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((user, index) => (
            <tr key={index}> {/* Key prop on the <tr> */}
              <td>{user.id}</td> {/* Use curly braces to access variables */}
              <td>{user.name}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <Button variant="primary" size="sm">View</Button>
                </Link>
                {" "}
                <Link to={`/users/${user.id}/edit`}>
                  <Button variant="info" size="sm">Edit</Button>
                </Link>
                {" "}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}
