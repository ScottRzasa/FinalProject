import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){

    return(
        <>
        <section className="conatiner my-5" id="home">
            <div className="row">
                <div className="col-md-6">
                    <h1>Welcome to Volkswagen</h1>
                    <p>Discover the legacy of Volkswagen, a brand that has signified its place in automotive history.
                        With the creation of iconic cars such as the Beetle, Golf, Jetta, and an extensive collection
                        of other vehicles, Volkswagen has made itself a household name.
                    </p>
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