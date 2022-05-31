import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import AddReviewForm from './AddReviewForm';
import { useSelector, useDispatch } from 'react-redux';
import { addReview, removeAllReviews } from "./reviewsSlice";

function ReviewsContainer( {reviews, brewery} ) {
  const [addReview, setAddReview] = useState(false);
  // console.log(reviews)

  const reviewsInRedux = useSelector((state) => state.reviews.filter(review => review.brewery_id === brewery.id));
  // console.log(reviewsInRedux);

  const dispatch = useDispatch()

  useEffect(() => {
  }, [])
  


  function handleClick() {
    console.log("add review clicked");
    setAddReview(!addReview);
  }

  return (
    <div>
      {reviewsInRedux.length > 0 ? (
        reviewsInRedux.map((review) => {
          return (
            <Card.Text key={review.id}>
              <li>{review.comment}</li>
            </Card.Text>
          );
        })
      ) : (
        <p>No reviews available</p>
      )}
      <Button size="sm" onClick={handleClick}>
        Add Review
      </Button>
      {addReview ? <AddReviewForm reviews={reviews} brewery={brewery} /> : null}
    </div>
  );
}

export default ReviewsContainer;