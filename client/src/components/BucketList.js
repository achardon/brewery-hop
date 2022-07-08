import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from "./breweriesSlice";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BucketBreweryCard from './BucketBreweryCard';
import { addWish, removeWish } from "./wishesSlice";

function BucketList() {

  // const breweries = useSelector((state) => state.breweries);
  // text about having to be signed in

  const [breweries, setBreweries] = useState([])
  const [error, setError] = useState('')
  console.log(breweries)

  const wishesInRedux = useSelector((state) => state.wishes)
  console.log(wishesInRedux)

  const dispatch = useDispatch();

  useEffect(() => {
    //need to only render wishlist breweries of user logged in
    fetch("/wishlist_breweries")
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setBreweries(data)
          data.map(wish => {
            console.log(wish)
            dispatch(addWish(wish))
          })
        })
      }
      else {
        r.json().then(data => setError('You must be signed in to use this page.'))
      }
    })
  }, [])

  function removeFromBucketlist(wish) {
    console.log('removed in bucketlist')
    dispatch(removeWish(wish))
    console.log(wishesInRedux)
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1 style={{color: "cornsilk"}}>Brewery Bucket List</h1>
      <br />
      <h3 style={{ color: "red" }}>{error}</h3>
      <div>
        <Col>
          <Row xs={1} md={3} className="g-4">
            {breweries.length > 0 ? (
              wishesInRedux.map((brewery) => {
                return (
                  <BucketBreweryCard key={brewery.id} brewery={brewery.brewery} wishlistBrewery={brewery} removeFromBucketlist={removeFromBucketlist} />
                );
              })
            ) : (
              <p>You have no breweries on your bucket list!</p>
            )}
          </Row>
        </Col>
      </div>
    </Container>
  );
}

export default BucketList

