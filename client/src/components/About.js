import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function About() {
    const [showBeer, setShowBeer] = useState(false)

    function handleClick() {
        setShowBeer(!showBeer)
    }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>About</h1>
      <p>This is an app that allows you to find a brewery anywhere you go!</p>
      <Button variant="success" onClick={handleClick}>{showBeer? "Thanks!" : "A beer please!" }</Button>{" "}
      <br/>
      <br/>
      {showBeer?
      <img
        src="http://www.brewbound.com/wp-content/uploads/2017/03/yard-house-beer-pour.jpg"
        alt="beer"
      /> : null }
    </Container>
  );
}

export default About