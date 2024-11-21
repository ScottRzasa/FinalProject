import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function History(){

    const events = [
        { date: '1937', title: 'Volkswagen Founded', description: 'Volkswagen is founded in Germany with the goal of creating affordable cars for the public.', image: 'Volkswagen images/B2023CW01723_web_1600.jpg' },
        { date: '1938', title: 'Volkswagen Beetle', description: 'The first Beetle is produced, a design that would become one of the best-selling cars of all time.', image: 'Volkswagen images/9e69813c-8530-476b-9ddd-23f8a9c5b574.jpg' },
        { date: '1974', title: 'Volkswagen Golf Introduced', description: 'Volkswagen releases the Golf, a new hatchback model that quickly gains popularity.', image: 'Volkswagen images/01.jpg' },
        { date: '1976', title: 'Golf GTI Launched', description: 'The high-performance GTI variant of the Golf is introduced, changing the hot hatch market forever.', image: 'Volkswagen images/3853-GolfMkIGTI-1024x768.jpg' },
        { date: '2013', title: 'World Rally Dominance', description: 'Volkswagen enters the World Rally Championship with the Polo R WRC and dominates the competition for four straight years.', image: 'Volkswagen images/SI201504270105_news.webp' },
        { date: '2019', title: 'Volkswagen I.D. R', description: 'The all-electric Volkswagen I.D. R sets a new record at Pikes Peak, signaling Volkswagen’s move toward electric performance.', image: 'Volkswagen images/DB2019AL01638_web_1600.jpg' },
      ];

    return(
        <section id="history" className="container my-5">
            <h2>History of Volkswagen</h2>
            {events.map((event, index) => (
              <div className="row my-4" key={index}>
                <div className="col-md-4">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="col-md-8">
                  <h3>{event.date} - {event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </section>
    )


}

export default History