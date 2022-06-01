import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import AddReviewForm from './AddReviewForm';
import { useSelector, useDispatch } from 'react-redux';
import { addReview, removeAllReviews } from "./reviewsSlice";

function ReviewsContainer( {reviews, brewery} ) {
  const [addReview, setAddReview] = useState(false);
  // console.log(reviews)

  //THIS WORKS NOW IN BUCKET LIST BUT NOT IN BREWERY SEARCH TAB because brewery being passed is from API not from database, so the brewery id is wrong
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
    <div>
    <div style={{ background: "gray", padding: "10px", borderRadius: "5px" }}>
      {reviewsInRedux.length > 0 ? (
        reviewsInRedux.map((review) => {
          return (
            <Card.Text key={review.id}>
              <div style={{padding: "5px"}}>
                <p>{review.comment}</p>
              </div>
            </Card.Text>
          );
        })
      ) : (
        <p>No reviews available</p>
      )}
    </div>
      <Button size="sm" onClick={handleClick}>
        Add Review
      </Button>
      {addReview ? <AddReviewForm reviews={reviews} brewery={brewery} /> : null}
    </div>
  );
}

export default ReviewsContainer;