import React from 'react'
import Logo from '../Images/logo.png'
import FadeIn from 'react-fade-in';



class Footer extends React.Component {
    componentDidMount() {
        let today = new Date();
        let yyyy = today.getFullYear();
        document.getElementById("year").innerHTML = yyyy;

    };



    render() {
        return (
            <>
                <FadeIn>

                    <div id="Contact" class="footer">
                        {/* <div id="media">
                    

      </div> */}
                        <h4 class="display-7">Contact Us</h4>
                        <hr />
                        <small> P.O.Box TN 1021 TESHIE <br /><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;creativemindspskuu@gmail.com </small><br />
                        <small><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true"></i><i class="fa fa-mobile"></i>&nbsp; +233 50 313 7274 | +233 24 325 4762 | 030 2909 363</small> <br />

                        <br />




                        <br />
                        <br />
                        <i>"We Teach The Way Each Child Can Learn"</i>
                        <br />
                        <br />

                        <hr />
                        <div class="copy">
                            <small>&#169; Copyright <span id="year"></span> All rights reserved</small><br />

                            <small><img id="lfot" src={Logo} /> <b>Creative Minds Preschool</b></small>
                            <i class="fa fa-twitter"></i>
                        </div>
                    </div>


                    <div class="marqbar">
                        <marquee behavior='scroll' direction='left' scrollamount='3'>	&#9734; Admission in progress &#9734;</marquee>
                    </div>
                </FadeIn>
            </>
        )
    }
}

export default Footer;