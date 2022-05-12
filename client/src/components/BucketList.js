import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from "./breweriesSlice";
import Container from 'react-bootstrap/Container'

function BucketList() {

  const breweries = useSelector((state) => state.breweries);

  // console.log(breweries)

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addBrewery("Five Threads"));
    console.log(breweries)
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Brewery Bucket List</h1>
      <button onClick={handleClick}>Add Brewery</button>
      <div>
        {breweries? breweries.map(brewery => {
          return <li key={brewery.id}>{brewery.name}</li>
        }) : null }
      </div>
    </Container>
  );
}

export default BucketList