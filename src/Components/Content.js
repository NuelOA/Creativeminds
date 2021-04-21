import React from 'react'
import Infant from '../Images/undraw_toy_car.svg'
import Toddler from '../Images/undraw_doll.svg'
import Kindergarten from '../Images/undraw_children.svg'
import FadeIn from 'react-fade-in';
import {Link} from 'react-router-dom'
import Shape from '../Images/shape2.png'
import Shape3 from '../Images/shape3.png'
import kids1 from '../Images/IMG_4343.jpg'


class Content extends React.Component{
   
    
    componentDidMount=()=>{
        window.scrollTo(0, 0)
   }
   componentDidMount=()=>{
    let current_rotation = 0;

    document.querySelector(".rotate").addEventListener("load", function(){
        current_rotation += 365;
    document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
    });
    
   }

    render(){
        return(
            <div>
                <FadeIn>
                <div className="content">
                <div id="About"></div>
               
                <div class="container-fluid">

                <img class="rotate" src={Shape} />
                    <div class="container">
                        
                    <h4 class="display-5"> About Us</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                         <div class="container">
                             
                    <div class="row">
                    <div class="col-sm-4 ">
             <div className="Imagecard">      
                 </div>
             </div>
                
             <div class="col-sm-4 ">
             <div className="Imagecard2">   
                 </div>
             </div>



             <div class="col-sm-4 ">
             <div className="Imagecard3">              
                 </div>
             </div>


             </div>
             </div>


             
                <br />

                    <a href="#location"><button class="btn-1">Find Us</button></a>
                </div>
                </div>
                </div>

                <img class="rotate2" src={Shape3} />

             
                 <div id="Programs"class="content1">
                     <div class="container-fluid">
                         <div class="container">
             <h4 class="display-5">Our Programs</h4>
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
                          <img id="prog1"src={Infant}/>
                          <br />
                          <br />
                          <h2 id="infant">Infant</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                              <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Apply for admission</button></a>
                      </div>
                      </Link>
                     </div>


                     <div class="col-md-4">
                     <Link to="/Admission">
                      <div class="card2">
                          <img id="prog1"src={Toddler}/>
                          <br />
                          <br />
                          <h2 id="toddler">Toddler / Preschool</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                              <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Apply for admission</button></a>
                      </div>
                      </Link>
                     </div>





                     <div class="col-md-4">
                     <Link to="/Admission">
                      <div class="card3">
                          <img id="prog1"src={Kindergarten}/>
                          <br />
                          <br />
                          <h2 id="kindergarten">Kindergarten</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                              <a href="#"><button class="btn-2"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;Apply for admission</button></a>
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