import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useSelector, useDispatch} from "react-redux";
import { addReview } from "./reviewsSlice";


function AddReviewForm( {brewery} ) {

    const [comment, setComment] = useState('')
    const reviews = useSelector(state => state.reviews)
    // console.log(reviews)

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        //find brewery if it's in the database
        //if not, create brewery in database
        //add review to brewery
        fetch("/breweries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(brewery),
        })
          .then((r) => r.json())
          .then((data) => {
            const brewery = data
            return fetch(`/breweries/${brewery.id}/reviews`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              //need to find best way to dynamically get user_id
              body: JSON.stringify({comment: comment, brewery_id: brewery.id, user_id: 1}),
            });
          })
          .then(r => r.json())
          .then(reviewData => {
            dispatch(addReview({id: reviewData.id, comment: reviewData.comment, brewery_id: reviewData.brewery.id, user_id: reviewData.user.id}))
            setComment('')
          })
    }

    function handleChange(e) {
        setComment(e.target.value)
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="textarea"
            name="comment"
            placeholder="Enter Review"
            onChange={handleChange}
            value={comment}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddReviewForm