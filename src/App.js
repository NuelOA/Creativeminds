
import './App.css';
import Navbar from '../src/Components/Navbar'
import Home from './Components/Main'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Admission from './Components/Admission'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Admin from './Components/Admin'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>

        <Router>
          <Navbar />


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Admission" component={Admission} />
            <Route path="/Content" component={Content} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/About" component={About} />
            <Route path="/Admin" component={Admin} />
          </Switch>
        </Router>



        <Footer />
        <div id="pop"></div>
        <a href="https://api.whatsapp.com/send?phone=233560411541" class="whatsapp_float" target="_blank"><i class="fab fa-whatsapp whatsapp-icon" aria-hidden="true"></i></a>




      </>
    )
  }
}

export default App;



