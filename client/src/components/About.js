import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function About() {
    const [showBeer, setShowBeer] = useState(false)

    function handleClick() {
        setShowBeer(!showBeer)
    }

  return (
    <Container style={{ padding: "40px", color: "white", fontWeight: "bold"}}>
      <h1 style={{color: "chocolate"}}>About</h1>
      <p style={{color: "cornsilk"}}>
        This app allows you to find a brewery anywhere you go! Go to
        the 'Search Breweries' tab to enter any city in the U.S. Once you search a city, you will see a list of all the breweries in that city, as well as pins on the map to show you where
        they are. To use the 'Bucket List' feature, or to leave a review for a
        brewery, you need to create an account. Once signed in, you can add
        breweries to your bucket list, you can view your breweries in the
        'Bucket List' tab, and you can leave a review for any brewery you have
        been to.
      </p>
  
      <h2 style={{padding: "40px", color: "brown", marginLeft: "150px"}}>Happy brewery hopping!</h2>
      {/* <Button variant="success" onClick={handleClick} >
        {showBeer ? "Thanks!" : "A beer please!"}
      </Button>{" "} */}
      {/* <br />
      <br />
      {showBeer ? (
        <img
          src="http://www.brewbound.com/wp-content/uploads/2017/03/yard-house-beer-pour.jpg"
          alt="beer"
        />
      ) : null} */}
    </Container>
  );
}

export default About