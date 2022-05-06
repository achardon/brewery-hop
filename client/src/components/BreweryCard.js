import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

function BreweryCard( {brewery} ) {
  return (
    <Container style={{ padding: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{brewery.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {brewery.street}, {brewery.city}, {brewery.state}
          </Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Card.Link href={brewery.website_url}>Visit Website</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BreweryCard

