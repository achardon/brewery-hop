import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
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
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation