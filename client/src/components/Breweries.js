import React, { useState, useRef, useEffect } from 'react';
import BreweryCard from './BreweryCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mapboxgl from "mapbox-gl";
import Button from 'react-bootstrap/esm/Button';
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
  const [zoom, setZoom] = useState(9);
  // const coordinatesGeocoder = [-80, 20];
  // const marker = new mapboxgl.Marker().setLngLat([-72, 42]);

  useEffect(() => {
    if (map.current) return; // initialize map only once 
    console.log('useEffect running again')
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // console.log(map.current)
    // const marker = new mapboxgl.Marker({color: 'black'}).setLngLat([lng, lat]).addTo(map.current);
    // marker.addTo(map.current)
    // include the below code to add a search bar to the map
    // .addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //   })
    // );
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  function setCoordinates(city, breweryData) {
    //use mapbox's geocoding API to fetch coordinates of search city
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((r) => r.json())
      .then((data) => {
        //set long and lat for search city so that map displays correct location
        const longitude = data.features[0].center[0]
        const latitude = data.features[0].center[1];
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [longitude, latitude],
          zoom: zoom,
        });
        setLng(longitude);
        setLat(latitude);
        addBreweryMarkers(breweryData, longitude, latitude);
      });
      setNewSearch(!newSearch); //very crucial where this lives as this is the dependency variable for the useEffect to render a new map
  }

  function addBreweryMarkers(data, longitude, latitude) {
    //there is some CSS for markers in index.css
    data.map(brewery => {
      if (brewery.longitude && brewery.latitude) {
          // console.log(typeof(brewery.longitude))
          // console.log(typeof(parseFloat(brewery.longitude)))
          // console.log(
          //   [parseFloat(brewery.longitude),
          //   parseFloat(brewery.latitude)]
          // );
          // console.log(brewery.name, 'long, lat')
          // console.log(brewery);
        const marker = new mapboxgl.Marker()
          .setLngLat([
            parseFloat(brewery.longitude),
            parseFloat(brewery.latitude),
          ])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<h3>${brewery.name}</h3>`
              )
          )
          .addTo(map.current);
          //maybe use this to then highlight the brewery card??
          marker.getElement().addEventListener("click", () => console.log(brewery.id))
      }
      else if (brewery.street) {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${brewery.street},${brewery.city}.json?proximity=${longitude},${latitude}&access_token=${mapboxgl.accessToken}`
        )
        .then(r => r.json())
        .then(data => {
          new mapboxgl.Marker()
            .setLngLat([data.features[0].center[0], data.features[0].center[1]])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${brewery.name}</h3><p></p>`
                )
            )
            .addTo(map.current);
        })
      }
      else {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${brewery.name}.json?proximity=${longitude},${latitude}&access_token=${mapboxgl.accessToken}`
        )
        .then(r => r.json())
        .then(data => {
          // console.log(data)
          new mapboxgl.Marker()
            .setLngLat([data.features[0].center[0], data.features[0].center[1]])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${brewery.name}</h3><p></p>`
                )
            )
            .addTo(map.current);
        })
      }
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
    // setNewSearch(!newSearch);
    const city = search.toLowerCase();
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then((r) => r.json())
    .then((data) => {
      setCoordinates(city, data);
      setBreweries(data);
      //change newSearch variable to trigger re-loading of new map with new coordinates
    });
  }

  return (
    <>
      <div style={{ padding: "0px" }}>
        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "600px" }}
        />
      </div>
      <form onSubmit={handleSubmit} style={{padding: "10px", textAlign: "center"}}>
        <label>
          Search Breweries by City:
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    {/* <Container style={{ padding: "10px" }}> */}
      {/* <h1>Search Breweries By City</h1> */}
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
    {/* </Container> */}
  </>
  )
}

export default Breweries;