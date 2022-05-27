import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import AddReviewForm from './AddReviewForm';

function ReviewsContainer( {reviews, brewery} ) {

  const [addReview, setAddReview] = useState(false)

  function handleClick() {
    console.log('add review clicked')
    setAddReview(!addReview)
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <Card.Text key={review.id}>
              <li>{review.comment}</li>
            </Card.Text>
          );
        })
      ) : (
        <p>No reviews available</p>
      )}
      <Button size="sm" onClick={handleClick}>Add Review</Button>
      {addReview? <AddReviewForm reviews={reviews} brewery={brewery}/> : null}
    </div>
  );
}

export default ReviewsContainer;