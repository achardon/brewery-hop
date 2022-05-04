import React from 'react'
import Container from "@mui/material/Container";


function Home( {count} ) {
  return (
    <Container>
      <h1>WELCOME TO THE BREWERY APP!</h1>
      <h1>Page Count: {count}</h1>
    </Container>
  );
}

export default Home