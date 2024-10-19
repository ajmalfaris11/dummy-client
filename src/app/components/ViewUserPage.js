import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export default function ViewUserPage() {
  const {userId} = useParams();
  const [user, setUser] = useState(undefined);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:8000/users/${userId}`);
      setUser(response.data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return <Card>
    <Table>
      <tbody>
        <tr>
          <td>User ID</td>
          <td>{userId}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>Premium User</td>
          <td>{
            user.premiumMember? "yes" : "No"}</td>
        </tr>
      </tbody>

    </Table>
  </Card>
}

