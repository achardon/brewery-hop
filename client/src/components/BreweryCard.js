import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReviewsContainer from './ReviewsContainer';
import { useSelector, useDispatch } from "react-redux";
import { addReview, removeAllReviews } from './reviewsSlice';


function BreweryCard( {brewery} ) {

  const [reviews, setReviews] = useState('')
  const [showReviews, setShowReviews] = useState(false)
  const [errors, setErrors] = useState('')
  const [isBucketItem, setIsBucketItem] = useState(false)
  // const [currentBrewery, setCurrentBrewery] = useState(null)
  
  const reviewsInRedux = useSelector((state) => state.reviews);

  const dispatch = useDispatch()

  function address(brewery) {
    return `${brewery.street}, ${brewery.city}, ${brewery.state}`
  }

  // useEffect(() => {
  //   fetch(`/brewery_exists?name=${brewery.name}`)
  //   .then(r => r.json())
  //   .then(data => setCurrentBrewery(data))
  // }, [])
  // is it smart to do this as a useEffect? this is calling a lot requests before even wanting to look at the reviews...
  // useEffect(() => {
  //   fetch("/breweries")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       const selectedBrewery = data.find((b) => b.name === brewery.name);
  //       if (selectedBrewery) {
  //         setReviews(selectedBrewery.reviews);
  //         selectedBrewery.reviews.map((review) => {
  //           dispatch(addReview(review));
  //           //to refresh redux state, use removeAllReviews above
  //           // dispatch(removeAllReviews());
  //           })
  //         }
  //     });
  // }, [])

  function handleReviews() {
    setShowReviews(!showReviews)
    setErrors('')
    fetch("/breweries")
      .then((r) => r.json())
      .then((data) => {
        const selectedBrewery = data.find((b) => b.name === brewery.name);
        if (selectedBrewery) {
          setReviews(selectedBrewery.reviews);
          selectedBrewery.reviews.map((review) => {
            dispatch(addReview(review));
            //to refresh redux state, use removeAllReviews above
            // dispatch(removeAllReviews());
          });
        }
      });

    //need to make brewery id dynamic after figuring out how to get id from database (not from API!)
    // fetch(`/breweries/7/reviews`)
    // fetch("/breweries")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data);
    //     const selectedBrewery = data.find((b) => b.name === brewery.name);
    //     console.log(selectedBrewery);
    //     // console.log(selectedBrewery.reviews)
    //     if (selectedBrewery) {
    //       setReviews(selectedBrewery.reviews);
    //       selectedBrewery.reviews.map(review => {
    //         dispatch(addReview(review))
    //       })
    //     }
    //   });
    }

  function handleBucketList() {
    fetch("/wishlist_breweries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: brewery.name, street: brewery.street, city: brewery.city, state: brewery.state, longitude: brewery.longitude, latitude: brewery.latitude, website_url: brewery.website_url})
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
        })
      }
      else {
        r.json().then(setErrors('Oops! You must be signed in to use this feature.'))
      }
    })
    //should this navigate to Bucket List page?
  }
  
  //Need to change brewery card so that if it is a wishlist item it doesn't show the heart, or maybe it has the option of removing it? Also if a brewery is already on the wishlist it should not be added again.

  return (
    <Container style={{ padding: "10px" }}>
      <Card bg="warning" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{brewery.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {brewery.street ? address(brewery) : "No address available"}
          </Card.Subtitle>
          <Card.Link href={brewery.website_url} style={{ marginTop: 100 }}>
            Visit Website
          </Card.Link>
          <br />
          <Button variant="info" size="sm" onClick={handleReviews} style={{backgroundColor: "cornsilk"}}>
            {showReviews ? "Hide Reviews" : "Read Reviews"}
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={handleBucketList}
            style={{
              marginLeft: 85,
              padding: "10px",
              backgroundColor: "chocolate",
            }}
          >
            💛
          </Button>
          <h6 style={{ color: "blue" }}>{errors ? errors : null}</h6>
          {showReviews ? (
            <ReviewsContainer
              // reviews={reviewsInRedux.filter(review => review.brewery_id === brewery.id)}
              // reviews={reviews}
              brewery={brewery}
            />
          ) : null}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BreweryCard

//To enter heart emoji: control+command+space