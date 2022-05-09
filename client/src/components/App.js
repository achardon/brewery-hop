import {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";
import Breweries from "./Breweries";
import BucketList from "./BucketList";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home count={count} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/breweries" element={<Breweries />}></Route>
        <Route path="/bucket_list" element={<BucketList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
