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
      <p>
        This is an app that allows you to find a brewery anywhere you go! Go to
        the 'Search Breweries' tab to enter a city where you would like to find
        breweries. Once you search a city, you will see a list of all the
        breweries in that city, as well as pins on the map to show you where
        they are. To use the 'Bucket List' feature, or to leave a review for a
        brewery, you need to create an account. Once signed in, you can add
        breweries to your bucket list, you can view your breweries in the
        'Bucket List' tab, and you can leave a review for any brewery you have
        been to.
      </p>
      <p>
        To use the 'Bucket List' feature, or to leave a review for a brewery,
        you need to create an account. Once signed in, you can add breweries to
        your bucket list, you can view your breweries in the 'Bucket List' tab,
        and you can leave a review for any brewery you have been to.
      </p>
      <p>Happy brewery hopping!</p>
      <Button variant="success" onClick={handleClick}>
        {showBeer ? "Thanks!" : "A beer please!"}
      </Button>{" "}
      <br />
      <br />
      {showBeer ? (
        <img
          src="http://www.brewbound.com/wp-content/uploads/2017/03/yard-house-beer-pour.jpg"
          alt="beer"
        />
      ) : null}
    </Container>
  );
}

export default About