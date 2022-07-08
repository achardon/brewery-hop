import {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";
import Breweries from "./Breweries";
import BucketList from "./BucketList";
import Login from "./Login";
import Signup from "./Signup";


function App() {

  return (
    <div
      className="App"
      style={{ 
        backgroundColor: "sienna",
        // backgroundImage: `url("https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg")`,
        backgroundImage: `url("https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/Beer-flight.jpg?quality=82&strip=1")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "1000px",
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search_breweries" element={<Breweries />}></Route>
        <Route path="/bucket_list" element={<BucketList />}></Route>
        <Route path="/log_in" element={<Login />}></Route>
        <Route path="/sign_up" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
