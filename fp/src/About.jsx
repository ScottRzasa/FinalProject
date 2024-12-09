import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){

    return(
        <section className="container my-5" id="about">
        <h2>About Volkswagen</h2>
            <div className="row">
                <div className="col-md-5">
                    <img src="Volkswagen images/17_sd_is.jpg" alt="Volkswagen Golf GTI"/>
                    <img src="Volkswagen images/3871-455876885553e57ad72d02.jpg" alt="Volkswagen Polo R WRC" />
                    <img src="Volkswagen images/DB2019AL01638_web_1600.jpg" alt="Volkswagen ID.R" />
                </div>
                <div className="col-md-7">
                    <p>Founded in 1937, Volkswagen has grown into one of the most recognizable brands in
                        the world, known for innovation and performance.  Volkswagen's early success was 
                        found with the Beetle, a cultural icon, which became one of the best-selling cars 
                        of all time. Over the decades, the company has expanded its lineup to include a 
                        diverse range of vehicles, from compact hatchbacks to luxury sedans and SUVs, while 
                        maintaining a reputation for innovation and quality engineering. Today Volkswagen 
                        remains a favorite among car enthusiasts for its customization potential and its
                        library of classics.</p>
                    <p>Volkswagen has made a significant impact on the world of motorsports, showcasing its 
                        engineering prowess and innovative spirit on the global stage. The brand's involvement 
                        spans a variety of disciplines, from rally racing to touring car championships, 
                        earning a reputation for performance and reliability. Notably, Volkswagen dominated 
                        the World Rally Championship from 2013 to 2016, with its Polo R WRC achieving 
                        multiple titles and solidifying its legacy in rally racing.</p>
                    <p>Beyond traditional motorsports, Volkswagen has embraced the future with its electric 
                        ID.R, setting records at prestigious events like the Pikes Peak International Hill Climb 
                        and the Nürburgring Nordschleife. These achievements highlight Volkswagen’s commitment 
                        to pushing technological boundaries, using motorsports as a platform for innovation and excellence.</p>
                    <p>Volkswagen's classic cars hold a special place in automotive history, celebrated for their 
                        timeless design, reliability, and cultural impact. The iconic Volkswagen Beetle, introduced 
                        in the 1930s, became a symbol of affordability and individuality, evolving into one of the 
                        best-selling cars of all time. Equally legendary is the Volkswagen Type 2, commonly known 
                        as the Microbus or Kombi, which became synonymous with the counterculture movement of the 
                        1960s and remains a beloved icon of freedom and adventure.</p>
                    <p>Other classics, like the Golf Mk1 GTI, introduced in the 1970s, revolutionized the hot hatch 
                        market with its sporty performance and practicality. These vehicles not only defined eras 
                        but also laid the foundation for Volkswagen’s enduring legacy, blending engineering 
                        excellence with designs that resonate across generations.</p>
                </div>
            </div>
        </section>
    )


}

export default About