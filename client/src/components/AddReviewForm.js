import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddReviewForm( {brewery} ) {

    const [comment, setComment] = useState('')
    console.log(brewery)

    useEffect(() => {
          fetch("/breweries", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(brewery)
          })
            .then((r) => r.json())
            .then((data) => {
              console.log(data);
              
            });

    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
        
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