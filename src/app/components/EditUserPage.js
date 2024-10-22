import { Card, Form, Button } from 'react-bootstrap';

export default function EditUserPage() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <Card className="p-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Age" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Premium User" />
            </Form.Group>

            <Button variant="info" type="submit">
              Save
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

