import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery(){

    const images = [
        { src: 'Volkswagen images/1973_Volkswagen_Beetle,_Bangor,_ME_IMG_2532.JPG', caption: '1973 Volkswagen Beetle' },
        { src: 'Volkswagen images/70e65c9769410daa53b2ec6fcc50accf.jpg', caption: 'Volkswagen Scirocco GTR' },
        { src: 'Volkswagen images/2013-03-05_Geneva_Motor_Show_7961.JPG', caption: 'Volkswagen Polo R WRC' },
        { src: 'Volkswagen images/Volkswagen-ID.7-2024.jpg', caption: 'Volkswagen ID.7' },
      ];
      
    return(
        <section id="gallery" className="container my-5">
        <h2>Gallery</h2>
        <div className="row">
          {images.map((img, index) => (
            <div className="col-md-3" key={index}>
              <img src={img.src} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))}
        </div>
      </section>
    )


}

export default Gallery