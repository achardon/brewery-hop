import {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Breweries from "./Breweries";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home count={count} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/breweries" element={<Breweries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
