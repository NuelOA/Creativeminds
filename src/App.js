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
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Navbar />


        <Switch>
       <Route exact path="/"component={Home} />
       <Route path="/Content"component={Content} />
       <Route path="/Admission" component={Admission}/>
        </Switch>

       
        <Footer />
        </Router>

        

   
      
      </div>
  );
}

export default App;
