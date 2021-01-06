import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter ,Route } from 'react-router-dom';

import './index.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import signIn from './components/signIn';
import join from './components/join';
import 'bootstrap/dist/css/bootstrap.css';
AOS.init();



function App() {
  return (
    <BrowserRouter>
    <div className="App">
       {/* <Navbar /> */}
       <Navigation />
          <Route exact path="/" component={home}></Route>
          <Route path="/signIn" component={signIn}></Route>
          <Route path="/join" component={join}></Route>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
