import React from "react";
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import History from "./History.jsx";
import Gallery from "./Gallery.jsx";
import Resources from "./Resources.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import './App.css'

function App(){

  return (
      <Router>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
        <Footer></Footer>
      </Router>
    

  )
}

export default App