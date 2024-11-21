import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){

    return(
        <><section className="container my-5" id="about">
        <h2>About Volkswagen</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="Volkswagen images/17_sd_is.jpg" alt="Volkswagen Golf GTI" />
                </div>
                <div className="col-md-8">
                    <p>Founded in 1937, Volkswagen has grown into one of the most recognizable brands in
                        the world, known for innovation and performance. The Beetle is a cultural icon, while
                        the Golf, especially in its GTI variant, remains a favorite among car enthusiasts for
                        its agility and tuning potential.</p>
                    <p>Volkswagen's cars are not just for the everyday consumer—they have also made a mark
                        in motorsports. Their rally cars, especially the Polo R WRC, have dominated the World
                        Rally Championship, winning four consecutive titles from 2013 to 2016.</p>
                    <p>Beyond rally racing, Volkswagen models like the Golf GTI and R have become cornerstones
                        in the tuning community. These cars are beloved for their balance of power, handling, and
                        aftermarket upgrade potential, making them popular for both street and track performance.</p>
                </div>
            </div>
            </section></>
    )


}

export default About