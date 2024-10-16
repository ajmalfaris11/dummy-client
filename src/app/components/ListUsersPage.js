import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListUserPage() {
  return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Alex</td>
      
        <td>

          <Link to={"/users/"}>
            <Button variant="primary" size="sm" >View</Button>
          </Link>
          {" "}
          <Link to={"/users/edit"}>
            <Button variant="primary" size="sm" >Edit</Button>
          </Link>
          {" "}
          <Link>
            <Button variant="danger" size="sm" >Delete</Button>
          </Link>

        </td>
      </tr>
    </tbody>
  </Table>
}
