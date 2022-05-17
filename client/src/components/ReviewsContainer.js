import React from 'react'

function ReviewsContainer( {reviews} ) {
  return (
    <div>
      {reviews.count > 0 ? (
        reviews.map((review) => <p>{review}</p>)
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default ReviewsContainer;