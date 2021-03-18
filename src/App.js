import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import megSitting from './Meg2018-5.jpg';
import celticKnot from './celtic-knot.png';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Resume } from './Components/Resume/Resume';
import { Contact } from './Components/Contact/Contact';
import { Gallery } from './Components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to ='/resume'>Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <img className='page-image' src={megSitting} alt='pic of Meg sitting'/>
      <img className='celtic-knot' src={celticKnot} alt='celtic knot'/>
      <header className='app-header'>
        <h1>Meg Harkins</h1>
      </header>
      <footer className='app-footer'>
      <a href="https://codyevins.herokuapp.com/"><p>Developed by Cody Evins</p></a>
      </footer>
    </div>
  );
}

export default App;
