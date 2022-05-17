import React from 'react'

function ReviewsContainer( {reviews} ) {
  return (
    <div>
      {reviews ? (
        reviews.map((review) => <p key={review.id}>{review.comment}</p>)
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default ReviewsContainer;