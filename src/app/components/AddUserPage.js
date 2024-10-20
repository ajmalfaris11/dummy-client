import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [premiumMember, setPremiumMember] = useState(false);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <Card className="p-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                required
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Premium User"
                checked={premiumMember}
                onChange={(event) => setPremiumMember(event.target.checked)}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Add New User
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}
