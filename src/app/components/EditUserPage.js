import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'; // this hook using for navigate the page


export default function EditUserPage() {
  const navigate = useNavigate();
  const {userId} = useParams();

 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [premiumMember, setPremiumMember] = useState(false);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:8000/users/${userId}`);

      
    const user = response.data;
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
    setPremiumMember(user.premiumMember);

    };

    fetchUser();
  }, [userId]);

  const updateUser = async (event) => {
    event.preventDefault();
    await axios.patch(
      `http://localhost:8000/users/${userId}`,
      {
        name: name,
        email: email,
        age: parseInt(age),
        premiumMember: premiumMember
      }
    );

    navigate(`/users/${userId}`); // navigate to the user page


  }


  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <Card className="p-4">
          <Form onSubmit={updateUser}>
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

            <Button variant="info" type="submit">
              Save
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

