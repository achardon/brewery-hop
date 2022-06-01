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
  console.log(breweries)
  useEffect(() => {
    //need to only render wishlist breweries of user logged in
    fetch("/wishlist_breweries")
    .then(r => r.json())
    .then(data => setBreweries(data))
  }, [])

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Brewery Bucket List</h1>
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

