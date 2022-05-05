import React from 'react'
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";


function Home( {count} ) {

    const breweries = useSelector(state => state.breweries.entities)
    console.log(breweries)

  return (
    <Container>
      <h1>WELCOME TO THE BREWERY APP!</h1>
      <h1>Page Count: {count}</h1>
    </Container>
  );
}

export default Home