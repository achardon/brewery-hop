import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from "./breweriesSlice";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BreweryCard from './BreweryCard';

function BucketList() {

  // const breweries = useSelector((state) => state.breweries);
  
  const [breweries, setBreweries] = useState([])
  const [error, setError] = useState('')
  console.log(breweries)

  useEffect(() => {
    //need to only render wishlist breweries of user logged in
    fetch("/wishlist_breweries")
    .then(r => {
      if (r.ok) {
        r.json().then(data => setBreweries(data))
      }
      else {
        r.json().then(data => setError('You must be signed in to use this page.'))
      }
    })
  }, [])

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Brewery Bucket List</h1>
      <br/>
      <h3 style={{color: 'red'}}>{error}</h3>
      <div>
        <Col>
          <Row xs={1} md={3} className="g-4">
            {breweries? breweries.map(brewery => {
              return <BreweryCard key={brewery.id} brewery={brewery.brewery} />
            }) : null }
          </Row>
        </Col>

      </div>
    </Container>
  );
}

export default BucketList

