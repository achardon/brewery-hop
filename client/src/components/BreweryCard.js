import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReviewsContainer from './ReviewsContainer';

function BreweryCard( {brewery} ) {

  const [reviews, setReviews] = useState('')
  const [showReviews, setShowReviews] = useState(false)
    // console.log(reviews)
    // console.log(brewery.name)
  
  

  function address(brewery) {
    return `${brewery.street}, ${brewery.city}, ${brewery.state}`
  }

  function handleReviews() {
    setShowReviews(!showReviews)
    fetch(`/breweries`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const selectedBrewery = data.find(b => b.name === brewery.name)
      console.log(selectedBrewery)
      // console.log(selectedBrewery.reviews)
      if (selectedBrewery) {
        setReviews(selectedBrewery.reviews)
      }
    })
    }

  function handleBucketList() {
    console.log('bucket list!', brewery.name)
    fetch("/wishlist_breweries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: brewery.name, address: `${brewery.street}, ${brewery.city}, ${brewery.state}`, gps_coords: [brewery.longitude, brewery.latitude], website: brewery.website_url, user_id: 1})
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <Container style={{ padding: "10px" }}>
      <Card bg="warning" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{brewery.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {brewery.street ? address(brewery) : "No address available"}
          </Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Card.Link href={brewery.website_url} style={{ marginTop: 100 }}>
            Visit Website
          </Card.Link>
          <br />
          <Button variant="info" size="sm" onClick={handleReviews}>
            {showReviews ? "Hide Reviews" : "Read Reviews"}
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={handleBucketList}
            style={{ marginLeft: 85, padding: "10px" }}
          >
            {" "}
            💛{" "}
          </Button>

          {showReviews ? <ReviewsContainer reviews={reviews} /> : null}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BreweryCard

//To enter heart emoji: control+command+space