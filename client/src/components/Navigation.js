import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


function Navigation() {

  let navigate = useNavigate()

  const [user, setUser] = useState('')

  function handleLogIn() {
    navigate(`/log_in`)
  }

  function handleLogOut() {
    console.log('log out')
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
                Signed in as: <a href="#login">{user.username}</a>
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