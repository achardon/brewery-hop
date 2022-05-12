import React, { useState, useRef, useEffect } from 'react';
import BreweryCard from './BreweryCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Breweries() {
  const [search, setSearch] = useState("");
  const [breweries, setBreweries] = useState("");
  const [newSearch, setNewSearch] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-72.5579);
  const [lat, setLat] = useState(42.8509);
  const [zoom, setZoom] = useState(12);
  // const coordinatesGeocoder = [-80, 20];

  // const marker = new mapboxgl.Marker().setLngLat([-72, 42]);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // console.log(map.current)
    const marker = new mapboxgl.Marker({color: 'black'}).setLngLat([lng, lat]).addTo(map.current);
    // marker.addTo(map.current)
    // include the below code to add a search bar to the map
    // .addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //   })
    // );
  }, [newSearch]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // const geojson = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-77.032, 38.913],
  //       },
  //       properties: {
  //         title: "Mapbox",
  //         description: "Washington, D.C.",
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-122.414, 37.776],
  //       },
  //       properties: {
  //         title: "Mapbox",
  //         description: "San Francisco, California",
  //       },
  //     },
  //   ],
  // };

  // // add markers to map
  // for (const feature of geojson.features) {
  //   // create a HTML element for each feature
  //   const el = document.createElement("div");
  //   el.className = "marker";

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
  //   // .addTo(map);
  // }

  function setCoordinates(city) {
    //use mapbox's geocoding API to fetch coordinates of search city
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((r) => r.json())
      .then((data) => {
        //set long and lat for search city so that map displays correct location
        setLng(data.features[0].center[0]);
        setLat(data.features[0].center[1]);
      });
  }

  function addBreweryMarkers(data) {
    data.map(brewery => {
      fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${brewery.name}.json?proximity=${lng},${lat}&access_token=${mapboxgl.accessToken}`
      )
      .then(r => r.json())
      .then(data => {
        console.log(data)
        new mapboxgl.Marker()
          .setLngLat([data.features[0].center[0], data.features[0].center[1]])
          .addTo(map.current);
      })

    })
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
        //change newSearch variable to trigger re-loading of new map with new coordinates
        setNewSearch(!newSearch);
        addBreweryMarkers(data)
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