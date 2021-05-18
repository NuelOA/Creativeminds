import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar'
import Home from './Components/Main'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Admission from './Components/Admission'
import {
  BrowserRouter as Router,
  Switch,
  Route,

}from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  render() {
    return (
      <>
     
      <Router>
      <Navbar />


        <Switch>
       <Route exact path="/"component={Home} />
       <Route path="/Admission"component={Admission}/>
       <Route path="/Content"component={Content} />
       
        </Switch>
        </Router>

             <h2 class="display-3" id="location">Location</h2>
             <center>
                            <hr id="hr1" />
                            </center>
            
        {/* <Map/> */}
        <div>
                 <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.7596235470273!2d-0.1397846852331759!3d5.74770599583449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79d357b755f5%3A0x267e9e2153d4b750!2sCreative%20Minds!5e0!3m2!1sen!2sgh!4v1618931852485!5m2!1sen!2sgh" 
                 ></iframe>
                     </div>

        <Footer />
        

      
        
      </>
    )
  }
}

  export default App;
    
   

