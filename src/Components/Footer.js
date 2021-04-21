import React from 'react'
import Logo from '../Images/logo.png'
import FadeIn from 'react-fade-in';






class Footer extends React.Component{
    
     
    render(){
        return(
            <>
            <FadeIn>
               <div id="Contact" class="footer">
                   <div id="media">
                    

      </div>
                  <h4 class="display-5">Contact Us</h4> 
                  <hr />
                 <small><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;creativemindspskuu@gmail.com <br /> P.O.Box TN 1021 TESHIE</small><br />
                 <small><i class="fa fa-mobile fa-flip-horizontal" aria-hidden="true"></i> +233 50 313 7274 | +233 24 325 4762 | 030 2909 363</small> <br />
                 <br />
    
              
                     

                     <br />
                     <br />
                     <i>"We Teach The Way Each Child Can Learn"</i>
                     <br />
                     <br />

                         <hr />
                     <div class="copy">
                 <small>&#169;Copyright 2021 All rights reserved</small><br />
              
                 <small><img id="lfot"src={Logo}/> <b>Creative Minds Preschool</b></small>
                 </div>
               </div>
               </FadeIn>
            </>
        )
    }
}

export default Footer;