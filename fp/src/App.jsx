import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home.jsx";
import About from "./About.jsx";
import History from "./History.jsx";
import Gallery from "./Gallery.jsx";
import Resources from "./Resources.jsx";
import Navbar from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import './App.css'
import Navigation from "./Navbar.jsx";

function App (){

  return (

    <Router>
      <Navigation></Navigation>
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
