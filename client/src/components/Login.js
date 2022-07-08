import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState('');
  const [showErrors, setShowErrors] = useState(true);

  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

//   console.log(user)

  let navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/login", {
  //       method: "POST"
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //       if (data.data.email) {
  //           console.log(data.data.email)
  //       }
  //       else {
  //           console.log("error", data)
  //       }
  //   })
  // }, [])

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
      body: JSON.stringify({user: form}),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((data) => {
          // console.log(data)
          // console.log("Welcome", data.data.email, "!!")
          dispatch(addUser(data.data))
          setForm({
            email: "",
            password: "",
          });
        });
        navigate(`/`);
      } else {
        r.json().then((error) => {
          setErrors("Incorrect username or password.");
          setShowErrors(true);
        });
      }
    });
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formBasicUsername">
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
        <div>
          {errors && showErrors ? 
            // errors.map((error) => {
            //     return (
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
          variant="success"
          type="submit"
          style={{ backgroundColor: "chocolate" }}
        >
          Log In
        </Button>
      </Form>

      <Container style={{ padding: "10px", marginLeft: "220px" }}>
        <h3>Don't have an account?</h3>
        <Button
          onClick={handleCreateAccount}
          variant="success"
          style={{ backgroundColor: "chocolate" }}
        >
          Create Account
        </Button>
      </Container>
    </Container>
  );
}

export default Login;
