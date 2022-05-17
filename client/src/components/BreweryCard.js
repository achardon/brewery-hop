import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReviewsContainer from './ReviewsContainer';

function BreweryCard( {brewery} ) {

  const [reviews, setReviews] = useState('')
  const [showReviews, setShowReviews] = useState(false)
  console.log(reviews)
  console.log(brewery.name)

  function address(brewery) {
    return `${brewery.street}, ${brewery.city}, ${brewery.state}`
  }

  function handleClick() {
    setShowReviews(!showReviews)
    fetch(`/breweries`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const selectedBrewery = data.find(b => b.name === brewery.name)
      console.log(selectedBrewery)
      console.log(selectedBrewery.reviews)
      if (selectedBrewery) {
        setReviews(selectedBrewery.reviews)
      }
    })
    }
  

  return (
    <Container style={{ padding: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{brewery.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {brewery.street ? address(brewery) : "No address available"}
          </Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Card.Link href={brewery.website_url}>Visit Website</Card.Link>
          <br />
          <Button variant="info" size="sm" onClick={handleClick}>
            {showReviews? "Hide Reviews" : "Read Reviews"}
          </Button>
          {showReviews ? <ReviewsContainer reviews={reviews} /> : null}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BreweryCard

