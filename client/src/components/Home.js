import React from 'react'
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container"


function Home( {count} ) {

    const breweries = useSelector(state => state.breweries.entities)
    console.log(breweries)

  return (
    <Container style={{ padding: "40px" }}>
      <h1 style={{ padding: "10px" }}>WELCOME TO THE BREWERY HOP!</h1>
      <img
        src="https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg"
        alt="beer"
        height="600"
      />
      {/* <h5>Page Count: {count}</h5> */}
    </Container>
  );
}

export default Home