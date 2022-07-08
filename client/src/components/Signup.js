import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./usersSlice";


function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState('');
  const [showErrors, setShowErrors] = useState(true);

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleSignIn() {
    navigate(`/log_in`);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {user: form} ),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => dispatch(addUser(data.data)));
        navigate(`/`);
      } else {
        r.json().then((error) => {
          setErrors(error.status.message)
          console.log(error.status.message)
          setShowErrors(true)
        })
      }
    });
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={form.email}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-50"
          controlId="formBasicPasswordConfirmation"
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={form.password_confirmation}
          />
        </Form.Group>

        <div>
          {errors && showErrors ? 
            // errors.map((error) => {
                // return (
                  <Alert
                    variant="danger"
                    key={errors}
                    onClose={() => setShowErrors(false)}
                    dismissible
                  >
                    <p>{errors}</p>
                  </Alert>
                // );
              // })
            : null}
        </div>

        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "chocolate" }}
        >
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
