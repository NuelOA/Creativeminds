import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import Logo from '../Images/logo.png'


class Navbar extends React.Component{
  componentDidMount(){
    $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });
  

  // close button 
  $(".btn-close").click(function(e){
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  }); 

  $(".nav-link").click(function(e){
    $(".navbar-collapse").removeClass("show");
  });

  }
   render() {
     return (
       <>
         
<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
  <a class="navbar-brand" href="/"><img id="logo"src={Logo}/> &nbsp;<span id="navtitle">Creative Minds</span> </a>
  <button class="navbar-toggler" type="button" data-trigger="#main_nav">
    <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
  </button>
  <div class="navbar-collapse justify-content-end" id="main_nav">
    <div class="offcanvas-header mt-3">  
    <button class="btn-close"> </button>
      <a href="/"><h5 class="py-2 text-white"></h5></a>
    </div>
    <ul class="navbar-nav">
      <div class="spacer"></div>
      <li class="nav-item active"> <a class="nav-link" href="/"> <i class="fa fa-home "aria-hidden="true"></i> <span class="item-label">Home</span> </a> </li>
      <li class="nav-item"><a class="nav-link" href="/#About"> &nbsp;<i class="fa fa-info "aria-hidden="true"></i><span class="item-label"> &nbsp;About</span> </a></li>
      <li class="nav-item"><a class="nav-link" href="/#Programs"> <i class="fa fa-book "aria-hidden="true"></i><span class="item-label"> Programs</span></a></li>
      <li class="nav-item"><Link class="nav-link" to="/Admission"> <i class="fa fa-graduation-cap "aria-hidden="true"></i><span class="item-label">Admission</span> </Link></li>
      <li class="nav-item"><a class="nav-link" href="/#Contact"><i class="fa fa-phone fa-flip-horizontal"aria-hidden="true"></i><span class="item-label"> Contact Us</span> </a></li>

    

     
    </ul>
  </div> 
</nav>
       </>
     )
   }
}
export default Navbar;