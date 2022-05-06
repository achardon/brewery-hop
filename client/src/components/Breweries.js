import React, { useState } from 'react'
import BreweryCard from './BreweryCard';
import Container from 'react-bootstrap/Container'

function Breweries() {

    const [search, setSearch] = useState("")
    const [breweries, setBreweries] = useState("")

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

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Search Breweries By City</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" name="search" value={search} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
        <br/>
        <br/>
      <h1>Results</h1>
      <div>{breweries? breweries.map(brewery => {
          return (
              <BreweryCard key={brewery.id} brewery={brewery}/>
            // <li key={brewery.id}>
            //   <a href={brewery.website_url}>{brewery.name}</a>
            // </li>
          );
        }
      ) : null }
      </div>
    </Container>
  );
}

export default Breweries;