import React from 'react'
import { Card, Table } from 'react-bootstrap'

export default function ViewUserPage() {
  return <Card>
    <Table>
      <tbody>
        <tr>
          <td>User ID</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>ajmal</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>ajmal@gmail.com</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>22</td>
        </tr>
        <tr>
          <td>Premium User</td>
          <td>Yes</td>
        </tr>
      </tbody>

    </Table>
  </Card>
}
