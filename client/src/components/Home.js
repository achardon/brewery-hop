import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from './breweriesSlice';
import Container from "react-bootstrap/Container"


function Home( ) {

    const breweries = useSelector(state => state.breweries)
    // console.log(breweries) <-- this throws an error... how is that possible??

    const dispatch = useDispatch()
    const user = useSelector(state => state.users)
    console.log(user)

    useEffect(() => {
      //this route currently just returns the current_user to test out login functionality
      fetch("/breweries")
      .then(r => r.json())
      .then(data => console.log(data))
    }, [])

    function handleLogOut() {
      //the error message you're getting is for port 4000 but it should be a fetch request to the backend at 3000, but also it's still correctly logging the user out.
      fetch("/logout", {
        method: "DELETE"
      })
      .then(data => console.log(data))
    }
  //   return (
  //   <>
  //       {/* <img
  //         src="https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg"
  //         alt="beer"
  //         // height="700"
  //         width="100%"
  //       /> */}
  //     <Container style={{ backgroundImage: `url("https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', height: "800px" }} >
  //       <h1 style={{ padding: "0px", textAlign: "left", color: "white" }}>WELCOME TO THE BREWERY HOP</h1>
  //       {/* <p>{breweries[0]}</p> */}
  //       {/* <h5>Page Count: {count}</h5> */}
  //     </Container>
  //   </>
  // );

  return (
    <Container
      style={{
        backgroundImage: `url("https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "800px",
      }}
    >
      <h1 style={{ padding: "0px", textAlign: "left", color: "white" }}>
        WELCOME TO THE BREWERY HOP
      </h1>
      {/* <p>{breweries[0]}</p> */}
      {/* <h5>Page Count: {count}</h5> */}
      <button onClick={handleLogOut}>Log Out</button>
    </Container>
  );


}

export default Home