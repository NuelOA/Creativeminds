import React from 'react'
import lndbanner from '../Images/undraw_true.svg'
import FadeIn from 'react-fade-in';
import Content from '../Components/Content'

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
              <h1 id="lndintro">Creative Minds <br />
              Preschool</h1>
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