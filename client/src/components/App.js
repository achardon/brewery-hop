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
    <div className="App">
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
