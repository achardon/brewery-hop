import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(true);

  let navigate = useNavigate();

  function handleCreateAccount() {
    navigate(`/sign_up`);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          setForm({
            username: "",
            password: "",
          });
        });
        navigate(`/`);
      } else {
        r.json().then((error) => {
          setErrors([error.error]);
          setShowErrors(true);
        });
      }
    });
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Login</h1>

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
        <Button variant="success" type="submit">
          Log In
        </Button>
      </Form>

      <Container style={{ padding: "40px" }} className="text-center">
        <h3 style={{ padding: "10px" }}>Don't have an account?</h3>
        <Button onClick={handleCreateAccount} variant="info">
          Create Account
        </Button>
      </Container>
    </Container>
  );
}

export default Login;
