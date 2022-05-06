import React from 'react'
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";


function Home( {count} ) {

    const breweries = useSelector(state => state.breweries.entities)
    console.log(breweries)

  return (
    <Container maxWidth="lg" align="center" >
      <h1>WELCOME TO THE BREWERY APP!</h1>
      <img
        src="http://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg"
        alt="beer"
        height="600"
      />
      <h5>Page Count: {count}</h5>
    </Container>
  );
}

export default Home