import React from 'react'
import lndbanner from '../Images/undraw_true.svg'
import FadeIn from 'react-fade-in';
import Content from '../Components/Content'
import Smile from '../Images/smiling.gif'
import $ from 'jquery'


class Home extends React.Component{

  
    
    componentDidMount=()=>{
        window.scrollTo(0, 0)
   }

  

    render(){
        return(
            <>
            <FadeIn>
          
             
              
             <header className="App-header">
        <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
             
              <h1 id="lndintro1">Welcome To <img id="emoji"src={Smile} />
              <br />
              <b id="lndintro">Creative Minds <br />
              <span id="preschool">P</span><span id="white">r</span><span id="infant">e</span><span id="toddler">s</span><span id="infant">c</span><span id="kindergarten">h</span><span id="white">o<span id="white">o</span></span></b><span id="preschool">l</span></h1>
              <br />
             <span id="caption"><span id="infant"><i class="fa fa-check-circle"></i>&nbsp;Infant</span>&nbsp;&nbsp;
              <span id="toddler"><i class="fa fa-check-circle"></i>&nbsp;Toddler</span>&nbsp;&nbsp;
               <span id="preschool"><i class="fa fa-check-circle"></i>&nbsp;Preschool</span> <br /> <span id="kindergarten"><i class="fa fa-check-circle"></i>&nbsp;Kindergarten</span> </span>
             <br />
             <a href="/#Programs"><button class="btn"><i class="fa fa-list">&nbsp;</i>Programs</button></a>
            </div>
            
            <div class="col-md-6">
              <img  class="img-responsive"id="lndbanner"src={lndbanner} />
            </div>
          </div>
        </div>

        </div>
      </header>
                
 

      <Content />
      </FadeIn>
            </>
        )
    }
}

export default Home;