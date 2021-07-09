import React from 'react';
import Showcase1 from '../Images/landingHeadmobile.jpeg'
import Showcase2 from '../Images/showcase4.jpg'
import Showcase3 from '../Images/showcase1.jpeg'
import Showcase4 from '../Images/landingHead2.jpeg'
import Showcase5 from '../Images/showcase3.jpg'
import Showcase6 from '../Images/showcase5.jpeg'


const Gallery = () => {
    return (
        <>
            <header className="App-header2">
                <div class="container-fluid">
                    <h1 id="gallery">Gallery</h1>
                </div>
                <center>
                    <a href="#photos"><i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                </center>
            </header>


            <div class="photos-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img id="photos" src={Showcase1} />
                        </div>

                        <div class="col-md-4">
                            <img id="photos-style" src={Showcase2} />
                        </div>


                        <div class="col-md-4">
                            <img id="photos" src={Showcase3} />
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-4">
                            <img id="photos-style" src={Showcase4} />
                        </div>

                        <div class="col-md-4">
                            <img id="photos" src={Showcase5} />
                        </div>


                        <div class="col-md-4">
                            <img id="photos-style" src={Showcase6} />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )

}

export default Gallery