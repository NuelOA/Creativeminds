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
  })
  }
   render() {
     return (
       <>
         
<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
  <a class="navbar-brand" href="/"><img id="logo"src={Logo}/></a>
  <button class="navbar-toggler" type="button" data-trigger="#main_nav">
    <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
  </button>
  <div class="navbar-collapse" id="main_nav">
    <div class="offcanvas-header mt-3">  
      <button class="btn-close float-right"></button>
      <a href="/#"><h5 class="py-2 text-white"><img id="logo"src={Logo}/></h5></a>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li>
      <li class="nav-item"><Link class="nav-link" to="/Content"> About </Link></li>
      <li class="nav-item"><a class="nav-link" href="/#Programs"> Programs </a></li>
      <li class="nav-item"><Link class="nav-link" to="/Admission"> Admission </Link></li>
      <li class="nav-item"><a class="nav-link" href="/#Contact"> Contact </a></li>

    </ul>
  </div> 
</nav>
       </>
     )
   }
}
export default Navbar;