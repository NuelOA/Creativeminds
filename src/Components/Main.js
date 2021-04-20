import React from 'react'
import lndbanner from '../Images/undraw_true.svg'
import FadeIn from 'react-fade-in';
import Content from '../Components/Content'
import Logo from '../Images/logo.png'
import $ from 'jquery'

class Home extends React.Component{
    
    componentDidMount=()=>{
        window.scrollTo(0, 0)
   }

  

    render(){
        return(
            <>
            <FadeIn>
          
              {/* <div className="admit">
                <marquee><i class="fa fa-star"></i>Admissions in progress<i class="fa fa-star"></i></marquee>
              </div> */}
             <header className="App-header">
        <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 id="lndintro"><b>We Are Creative Minds <br />
              Preschoo</b>l</h1>
              <br />
             <span id="caption"><span id="infant"><i class="fa fa-check-circle"></i>&nbsp;Infant</span>&nbsp;&nbsp;
              <span id="toddler"><i class="fa fa-check-circle"></i>&nbsp;Toddler</span>&nbsp;&nbsp;
               <span id="preschool"><i class="fa fa-check-circle"></i>&nbsp;Preschool</span> <br /> <span id="kindergarten"><i class="fa fa-check-circle"></i>&nbsp;Kindergarten</span> </span>
             <br />
             <a href="/#Programs"><button class="btn-1"><i class="fa fa-list">&nbsp;</i>Programs</button></a>
            </div>
            
            <div class="col-md-6">
              <img id="lndbanner"src={lndbanner} />
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