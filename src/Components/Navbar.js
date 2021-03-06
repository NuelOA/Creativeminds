import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Logo from '../Images/logo.png'


class Navbar extends React.Component {
  componentDidMount() {
    $("[data-trigger]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
    });


    // close button 
    $(".mdiv,.md, #mdiv").click(function (e) {
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
    });

    $(".nav-link").click(function (e) {
      $(".navbar-collapse").removeClass("show");
    });

  }
  render() {
    return (
      <>

        <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
          <a class="navbar-brand" href="/"><img id="logo" src={Logo} /> &nbsp;<span id="navtitle">Creative Minds</span> </a>
          <button class="navbar-toggler" type="button" data-trigger="#main_nav">
            <span class="navbar-toggler-icon">
              <span id="bar"></span>
              <span id="bar2"></span>
              <span id="bar3"></span>
            </span>
          </button>
          <div class="navbar-collapse justify-content-end" id="main_nav">
            <div class="offcanvas-header mt-3">
              <div id="mdiv">
                <div class="mdiv">
                  <div class="md"></div>
                </div>
              </div>
              <a href="/"><h5 class="py-2 "></h5></a>
            </div>
            <ul class="navbar-nav">
              <div class="spacer"></div>
              <li class="nav-item active"> <a class="nav-link" href="/"> <i class="fa fa-home " aria-hidden="true"></i> <span class="item-label">Home</span> </a> </li>
              <li class="nav-item"><Link class="nav-link" to="/About"> &nbsp;<i class="fa fa-info " aria-hidden="true"></i><span class="item-label"> &nbsp;About</span></Link></li>
              <li class="nav-item"><a class="nav-link" href="/#Programs"> <i class="fa fa-book " aria-hidden="true"></i><span class="item-label"> Programs</span></a></li>
              <li class="nav-item"><Link class="nav-link" to="/Admission"> <i class="fa fa-graduation-cap " aria-hidden="true"></i><span class="item-label"> Admission</span> </Link></li>
              {/* <li class="nav-item"><a class="nav-link" href="/Tour"><i class="fa fa-picture-o" aria-hidden="true"></i><span class="item-label"> Gallery </span> </a></li> */}
              <li class="nav-item"><a class="nav-link" href="/#Contact"><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true"></i><span class="item-label"> Contact </span> </a></li>
              <li class="nav-item" ><Link class="nav-link" to="/Admin"><i class="fa fa-user" aria-hidden="true"></i><span class="item-label" id="admin"> Login </span> </Link></li>
              {/* <li class="nav-item" ><a class="nav-link" href="https://formspree.io/login"><i class="fa fa-user" aria-hidden="true"></i><span class="item-label" id="admin"> Admin </span> </a></li> */}



            </ul>
          </div>
        </nav>
      </>
    )
  }
}
export default Navbar;