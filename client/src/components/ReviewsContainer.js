import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import AddReviewForm from './AddReviewForm';
import { useSelector, useDispatch } from 'react-redux';
import { addReview, removeAllReviews } from "./reviewsSlice";

function ReviewsContainer( {reviews, brewery} ) {
  const [addReview, setAddReview] = useState(false);

  const [breweryToUse, setBreweryToUse] = useState(brewery)

  useEffect(() => {
    fetch("/breweries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brewery),
    })
    .then(r => r.json())
    .then(data => {
      if (data !== brewery) {
        setBreweryToUse(data)
      }
    })
  }, [])

  const reviewsInRedux = useSelector((state) => state.reviews.filter(review => review.brewery_id === breweryToUse.id));

  const dispatch = useDispatch()

  function handleClick() {
    setAddReview(!addReview);
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{ borderStyle: "solid", marginTop: "10px", borderRadius: "5px" }}
      >
        {reviewsInRedux.length > 0 ? (
          reviewsInRedux.map((review) => {
            return (
              <Card.Text key={review.id}>
                {/* <div style={{ marginLeft: "10px" }}> */}
                <li style={{ marginLeft: "10px" }}>{review.comment}</li>
                {/* </div> */}
              </Card.Text>
            );
          })
        ) : (
          <p style={{ marginLeft: "10px" }}>No reviews available</p>
        )}
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button
          size="sm"
          onClick={handleClick}
          style={{ backgroundColor: "chocolate" }}
        >
          Add Review
        </Button>
        {addReview ? (
          <AddReviewForm reviews={reviews} brewery={brewery} />
        ) : null}
      </div>
    </div>
  );
}

export default ReviewsContainer;