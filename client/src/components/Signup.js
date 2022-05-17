import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(true);

  let navigate = useNavigate();

  function handleSignIn() {
    navigate(`/log_in`);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
        navigate(`/`);
      } else {
        r.json().then((error) => setErrors(error.errors));
        setShowErrors(true);
      }
    });
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            value={form.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
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
          {errors && showErrors
            ? errors.map((error) => {
                return (
                  <Alert
                    variant="danger"
                    key={error}
                    onClose={() => setShowErrors(false)}
                    dismissible
                  >
                    <p>{error}</p>
                  </Alert>
                );
              })
            : null}
        </div>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
