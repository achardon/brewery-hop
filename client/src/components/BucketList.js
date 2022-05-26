import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBrewery } from "./breweriesSlice";
import Container from 'react-bootstrap/Container';
import BreweryCard from './BreweryCard';

function BucketList() {

  // const breweries = useSelector((state) => state.breweries);

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    fetch("/wishlist_breweries")
    .then(r => r.json())
    .then(data => setBreweries(data))
  })

  // console.log(breweries)

  // const dispatch = useDispatch();

  function handleClick() {
    // dispatch(addBrewery("Five Threads"));
    // console.log(breweries)
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Brewery Bucket List</h1>
      <button onClick={handleClick}>Add Brewery</button>
      <div>
        {breweries? breweries.map(brewery => {
          // return <li key={brewery.id}>{brewery.name}</li>
          return <BreweryCard key={brewery.id} brewery={brewery.brewery} />
        }) : null }
      </div>
    </Container>
  );
}

export default BucketList