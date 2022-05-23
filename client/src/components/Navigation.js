import React, {useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./usersSlice";



function Navigation() {

  let navigate = useNavigate()

  // const [user, setUser] = useState('')
  const userArray = useSelector((state) => state.users);
  const user = userArray[0]

  console.log(user)

  const dispatch = useDispatch()


  // useEffect(() => {
  //   fetch("/login", {
  //     method: "POST",
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (data.data.email) {
  //         setUser(data.data.email);
  //       } else {
  //         console.log("error", data);
  //       }
  //     });
  //   }, []);


  function handleLogIn() {
    navigate(`/log_in`)
  }

  function handleLogOut() {
    console.log("log out");
    dispatch(removeUser(user))
    //the error message you're getting is for port 4000 but it should be a fetch request to the backend at 3000, but also it's still correctly logging the user out.

    fetch("/logout", {
      method: "DELETE",
    })
    .then((data) => console.log(data))
    .then(console.log('test'))
    // how to logout with devise?
  }

  return (
    <>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="/">Brewery Hop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="breweries">Breweries</Nav.Link>
            <Nav.Link href="bucket_list">Bucket List</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            {user ? (
              <Navbar.Text>
                Signed in as: <a href="#login">{user.email}</a>
              </Navbar.Text>
            ) : null}
            <div style={{ padding: "10px" }}>
              {user ? (
                <Button variant="success" onClick={handleLogOut}>
                  Log Out
                </Button>
              ) : (
                <Button variant="success" onClick={handleLogIn}>
                  Log In
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation