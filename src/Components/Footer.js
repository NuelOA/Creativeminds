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
                  <h4 class="display-4">Contact Us</h4> 
                 <small><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;example@gmail.com</small><br />
                 <small><i class="fa fa-phone" aria-hidden="true"></i> +233 568 5524 528</small> <br />
                 <small><i class="fa fa-map-marker" aria-hidden="true"></i> Location </small>
                 </div>

                     

                     <div class="copy">
                 <small>&#169;Copyright 2021 All rights reserved</small><br />
                 <br/>
                 <small><img id="lfot"src={Logo}/> <b>Creative Minds Preschool</b></small>
                 </div>
               </div>
               </FadeIn>
            </>
        )
    }
}

export default Footer;