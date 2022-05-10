import React, { useState, useRef, useEffect } from 'react';
import BreweryCard from './BreweryCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


//move map to separate component??


function Breweries() {
  const [search, setSearch] = useState("");
  const [breweries, setBreweries] = useState("");

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-72.6);
  const [lat, setLat] = useState(42.85);
  const [zoom, setZoom] = useState(9);

  const coordinatesGeocoder = [-80, 20]

//   console.log(lng);
//   console.log(lat);

//   const geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl,
//   });

  //   const marker = new mapboxgl.Marker() // initialize a new marker
  //     .setLngLat([-72, 42]) // Marker [lng, lat] coordinates
  //     .addTo(map); // Add the marker to the map
  
  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      }).addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );
    });
    
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });


  function setCoordinates(city) {
    //use mapbox's geocoding API to fetch coordinates of search city
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data.features[0].center);
        setLng(data.features[0].center[0]);
        setLat(data.features[0].center[1]);
        updateMap();
      });
  }

  function updateMap() {

    map.current( () => {
        setLng(lng);
        setLat(lat);
        setZoom(map.current.getZoom().toFixed(2));
    });

  }

  const breweriesToDisplay = breweries
    ? breweries.map((brewery) => (
        <BreweryCard key={brewery.id} brewery={brewery} />
      ))
    : null;

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBreweries("");
    const city = search.toLowerCase();
    setCoordinates(city);
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((r) => r.json())
      .then((data) => {
        setBreweries(data);
      });
  }

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
      <div style={{ padding: "20px" }}>
        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "400px" }}
        />
      </div>
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