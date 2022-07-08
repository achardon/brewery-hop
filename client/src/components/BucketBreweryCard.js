import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReviewsContainer from "./ReviewsContainer";
import { useSelector, useDispatch } from "react-redux";
import { addReview, removeAllReviews } from "./reviewsSlice";
import { addWish, removeWish } from "./wishesSlice";

function BucketBreweryCard({ brewery, wishlistBrewery, removeFromBucketlist }) {
  const [reviews, setReviews] = useState("");
  const [showReviews, setShowReviews] = useState(false);
  const [errors, setErrors] = useState("");
  const [isBucketItem, setIsBucketItem] = useState(false);
  const [currentBrewery, setCurrentBrewery] = useState(null);

  const reviewsInRedux = useSelector((state) => state.reviews);

  const wishesInRedux = useSelector((state) => state.wishes)

  const dispatch = useDispatch();

  console.log(wishlistBrewery.id)
  console.log(wishlistBrewery)

  function address(brewery) {
    return `${brewery.street}, ${brewery.city}, ${brewery.state}`;
  }

  useEffect(() => {
    fetch(`/brewery_exists?name=${brewery.name}`)
      .then((r) => r.json())
      .then((data) => setCurrentBrewery(data));
  }, []);
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

//   console.log(currentBrewery);

  function handleReviews() {
    setShowReviews(!showReviews);
    setErrors("");
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

  function handleCheck() {
    console.log("remove", wishlistBrewery);
    fetch(`/wishlist_breweries/${wishlistBrewery.id}`, {
      method: "DELETE"
    })
    //need to update state!!
    .then(data => {
        console.log(wishlistBrewery)
        removeFromBucketlist(wishlistBrewery)
    }
    )
  }

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
          <Button
            variant="info"
            size="sm"
            onClick={handleReviews}
            style={{ backgroundColor: "cornsilk" }}
          >
            {showReviews ? "Hide Reviews" : "Read Reviews"}
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={handleCheck}
            style={{
              marginLeft: 85,
              padding: "10px",
              backgroundColor: "chocolate",
            }}
          >
            ✔
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

export default BucketBreweryCard;

//To enter heart emoji: control+command+space
