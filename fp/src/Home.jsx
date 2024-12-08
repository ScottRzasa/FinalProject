import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){

    return(
        <>
        <section className="conatiner my-5" id="home">
            <div className="row">
                <div className="col-md-6">
                    <h1>Welcome to Volkswagen</h1>
                    <p>Discover the legacy of Volkswagen, a brand that has shaped automotive history
                        with iconic cars like the Beetle, Golf, and their performance in motorsport
                        events worldwide.</p>
                </div>
                <div className="col-md-6">
                    <img src="Volkswagen images/DSC-0069.avif" alt="Volkswagen Rally Car" />
                </div>
            </div>
            </section>

        </>
    )


}

export default Home