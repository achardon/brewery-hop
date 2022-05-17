import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import AddReviewForm from './AddReviewForm';

function ReviewsContainer( {reviews} ) {

  const [addReview, setAddReview] = useState(false)

  function handleClick() {
    console.log('add review clicked')
    setAddReview(!addReview)
  }

  return (
    <div>
      {reviews ? (
        reviews.map((review) => {
          return(
          <Card.Text>
              <li key={review.id}>{review.comment}</li>
          </Card.Text>)
        })
      ) : (
        <p>No reviews available</p>
      )}
      <Button size="sm" onClick={handleClick}>Add Review</Button>
      {addReview? <AddReviewForm reviews={reviews} /> : null}
    </div>
  );
}

export default ReviewsContainer;