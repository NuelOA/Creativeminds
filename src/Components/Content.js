import React from 'react'
import Infant from '../Images/undraw_toy_car.svg'
import Toddler from '../Images/undraw_doll.svg'
import Kindergarten from '../Images/undraw_children.svg'
import FadeIn from 'react-fade-in';
import {Link} from 'react-router-dom'

class Content extends React.Component{
   
    
    componentDidMount=()=>{
        window.scrollTo(0, 0)
   }

    render(){
        return(
            <div>
                <FadeIn>
                <div id="About"></div>
               
                <div class="container-fluid">
                <div className="content">
                    <div class="container">
                    <h4 class="display-5">About Us</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                </div>
                </div>
                </div>



             
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
                      <div class="card">
                          <img id="prog1"src={Infant}/>
                          <br />
                          <br />
                          <h2 id="infant">Infant</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                      </div>
                      </Link>
                     </div>


                     <div class="col-md-4">
                      <div class="card">
                          <img id="prog1"src={Toddler}/>
                          <br />
                          <br />
                          <h2 id="toddler">Toddler / Preschool</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                      </div>
                     </div>





                     <div class="col-md-4">
                      <div class="card">
                          <img id="prog1"src={Kindergarten}/>
                          <br />
                          <br />
                          <h2 id="kindergarten">Kindergarten</h2>
                          <p>Lorem Ipsum is simply dummy text of 
                              the printing and typesetting industry. </p>
                      </div>
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