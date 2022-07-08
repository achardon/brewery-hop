import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from './breweriesSlice';
import Container from "react-bootstrap/Container"
import { addUser } from "./usersSlice";



function Home( ) {

    const breweries = useSelector(state => state.breweries)
    // console.log(breweries) <-- this throws an error... how is that possible??

    const dispatch = useDispatch()
    const user = useSelector(state => state.users)

  return (
    <Container
      // style={{
      //   backgroundImage: `url("https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg")`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100%",
      //   height: "800px",
      // }}
    >
      <h1 style={{ padding: "80px", textAlign: "left", color: "black" }}>
        WELCOME TO THE BREWERY HOP
      </h1>
      {/* <p>{breweries[0]}</p> */}
      {/* <h5>Page Count: {count}</h5> */}
    </Container>
  );


}

export default Home