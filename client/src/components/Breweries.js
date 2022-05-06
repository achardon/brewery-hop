import React, { useState } from 'react'
import { Container } from '@mui/material';

function Breweries() {

    const [search, setSearch] = useState("")
    const [breweries, setBreweries] = useState("")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setBreweries("")
        console.log(search)
        const city = search.toLowerCase()
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
        .then(r => r.json())
        .then(data => {
            setBreweries(data)
        })
    }

  return (
    <Container maxWidth="lg">
      <h1>Search Breweries By City</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" name="search" value={search} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h1>Results</h1>
      <div>{breweries? breweries.map(brewery => {
          return (
            <li key={brewery.id}>
              <a href={brewery.website_url}>{brewery.name}</a>
            </li>
          );
        }
      ) : null }
      </div>
    </Container>
  );
}

export default Breweries;