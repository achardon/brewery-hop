import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddReviewForm( {brewery} ) {

    const [comment, setComment] = useState('')
    console.log(brewery)

    // useEffect(() => {
    //       fetch("/breweries", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(brewery)
    //       })
    //         .then((r) => r.json())
    //         .then((data) => {
    //           console.log(data);
              
    //         });

    // }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
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
            console.log(brewery)
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
            console.log(reviewData)
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