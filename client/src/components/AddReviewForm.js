import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddReviewForm() {

    const [comment, setComment] = useState('')

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