import React, { useState } from 'react';
import BreweryCard from './BreweryCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";



function Breweries() {
    
    const [search, setSearch] = useState("")
    const [breweries, setBreweries] = useState("")
    
    const breweriesToDisplay = breweries ? breweries.map((brewery) => <BreweryCard key={brewery.id} brewery={brewery} /> ) : null;
    
    function handleChange(e) {
        setSearch(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setBreweries("")
        const city = search.toLowerCase()
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
        .then(r => r.json())
        .then(data => {
            setBreweries(data)
        })
    }
    
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWNoYXJkb24iLCJhIjoiY2wyeXZpaTlxMTlmdTNsbXZyMjZwMG56dCJ9.S92MJmwdJN1au1usa41_Aw";
    // const map = new mapboxgl.Map({
    //   container: "root", // container ID
    //   style: "mapbox://styles/mapbox/streets-v11", // style URL
    //   center: [-74.5, 40], // starting position [lng, lat]
    //   zoom: 9, // starting zoom
    // });

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Search Breweries By City</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <h1>Results</h1>
      <div className="d-flex flex-wrap">
        <Container>
          <Col>
            <Row xs={1} md={3} className="g-4">
              {breweriesToDisplay}
            </Row>
          </Col>
        </Container>
      </div>
    </Container>
  );
}

export default Breweries;