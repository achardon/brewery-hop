import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from './breweriesSlice';
import Container from "react-bootstrap/Container"


function Home( {count} ) {

    const breweries = useSelector(state => state.breweries)
    // console.log(breweries) <-- this throws an error... how is that possible??

    const dispatch = useDispatch()

    return (
    <Container style={{ padding: "40px" }}>
      <h1 style={{ padding: "10px" }}>WELCOME TO THE BREWERY HOP!</h1>
      {/* <p>{breweries[0]}</p> */}
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