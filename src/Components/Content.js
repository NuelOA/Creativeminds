import React from 'react'
import Infant from '../Images/undraw_toy_car.svg'
import Toddler from '../Images/undraw_doll.svg'
import Kindergarten from '../Images/undraw_children.svg'
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom'
import Shape from '../Images/shape2.png'
import Shape3 from '../Images/shape3.png'
import Showcase1 from '../Images/landingHeadmobile.jpeg'
import Showcase2 from '../Images/showcase4.jpg'
import Showcase3 from '../Images/showcase1.jpeg'
import Showcase4 from '../Images/landingHead2.jpeg'
import Showcase5 from '../Images/showcase3.jpg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



class Content extends React.Component {


  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  componentDidMount = () => {
    let current_rotation = 0;

    document.querySelector(".rotate").addEventListener("load", function () {
      current_rotation += 365;
      document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
    });


  }

  render() {
    return (
      <div>
        <FadeIn>
          <div className="content">
            <div id="About"></div>

            <div class="container-fluid">

              <div class="container">
                <center> <img class="rotate" src={Shape} /></center>

                <h4 class="display-5"> About Us</h4>
                <hr id="hr1" />
                <div class="row">
                  <div class="col-md-6">
                    <p>Our most important task is to make the preschool safe, educational and fun-filled for all children in the preschool. It is important to us that you as a parent feel safe in leaving your child to our competent educators and that we have an open and good collaboration with you as a parent.
                      We attach great importance to the educational environment and together with the children create environments that inspire play, learning and development for each child. We have a rich selection of materials that are easily accessible to children which encourages play and learning
                      Every week we go out into the garden so that the children can experience nature and have the opportunity to take part in natural phenomena, animals and plants in its natural environment
                      We also invest in being part of a sustainable development by sorting waste with the children, participating in ‘Clean Ghana’ in our own small way and taking responsibility for our common environment.

                      We spend time outdoors often and invest a lot in offering the children different types of physical activity to develop the children's motor skills and establish a positive approach to exercise.
                      Interculturality
                      We are a multicultural preschool and we have an intercultural approach. This means that different cultures interact, complement and enrich each other. We have a well-resourced library at the preschool with some books in the children's mother tongue that our multilingual staff read to the children. The objective is to familiarise children with literature from many different cultures
                      The staff's language skills are also used to support communication with the children. We see interculturality in our preschool as an asset in education.
                    </p>
                    <button class="btn-1"><i class="fa fa-more"></i> View more</button>
                  </div>

                  <div class="col-md-6">

                    <div className="slide-container">
                      <Fade>
                        <div className="each-fade">
                          <div className="image-container">
                            <img id="show" src={Showcase1} />
                          </div>

                        </div>
                        <div className="each-fade">
                          <div className="image-container">
                            <img id="show" src={Showcase2} />
                          </div>

                        </div>

                        <div className="each-fade">
                          <div className="image-container">
                            <img id="show" src={Showcase4} />
                          </div>

                        </div>

                        <div className="each-fade">
                          <div className="image-container">
                            <img id="show" src={Showcase5} />
                          </div>

                        </div>

                        <div className="each-fade">
                          <div className="image-container">
                            <img id="show" src={Showcase3} />
                          </div>

                        </div>
                      </Fade>
                    </div>

                  </div>

                </div>

                <div class="container">
                  <h4 class="display-5" id="activities"> Activities</h4>
                  <center><hr id="hr1" /></center>
                  <div class="row">
                    <div class="col-sm-4 ">
                      <div className="Imagecard">
                      </div>
                      <br />
                      < p class="display-6" style={{ color: 'rgb(177, 62, 62)' }}>Class Hours</p>
                      <p>Active class hours take place for students to improve acadamic performance</p>
                    </div>

                    <div class="col-sm-4 ">
                      <div className="portrait">
                      </div>
                      < p class="display-6" style={{ color: 'rgb(7, 146, 60)' }}>Creative Projects</p>
                      <p>Projects are assigned to students to get their hands busy, learning by doing make students smart.</p>
                    </div>



                    <div class="col-sm-4 ">
                      <div className="Imagecard3">
                      </div>
                      <br />
                      < p class="display-6" style={{ color: 'rgb(12, 100, 182)' }}>Class Rooms</p>
                      <p>Our class rooms are designed for a good learning experience</p>
                    </div>


                  </div>
                </div>


                {/* <a href="#location"><button class="btn-1"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Find Us</button></a> */}
              </div>
            </div>
          </div>

          <img class="rotate2" src={Shape3} />


          <div id="Programs" class="content1">
            <div class="container-fluid">
              <div class="container">
                <h4 class="display-5">Our Programs</h4>
                <center>
                  <hr id="hr1" />
                </center>
                <p>Lorem Ipsum is simply dummy text  but also It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  but also It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with </p>
              </div>
            </div>
            <div class="container-fluid">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <Link to="/Admission">
                      <div class="card1">
                        <img id="prog1" src={Infant} />
                        <br />
                        <br />
                        <h2 id="infant">Infant</h2>
                        <p>Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. </p>
                        <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Enroll</button></a>
                      </div>
                    </Link>
                  </div>


                  <div class="col-md-4">
                    <Link to="/Admission">
                      <div class="card2">
                        <img id="prog1" src={Toddler} />
                        <br />
                        <br />
                        <h2 id="toddler">Toddler</h2>
                        <p>Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. </p>
                        <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Enroll</button></a>
                      </div>
                    </Link>
                  </div>



                  <div class="col-md-4">
                    <Link to="/Admission">
                      <div class="card3">
                        <img id="prog1" src={Kindergarten} />
                        <br />
                        <br />
                        <h2 id="kindergarten">Preschool</h2>
                        <p>Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. </p>
                        <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Enroll</button></a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>






        </FadeIn>

      </div>
    )
  }
}

export default Content