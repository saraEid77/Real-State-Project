import React ,{ useState , useEffect} from 'react';
import {Link }  from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap'

function Navbar() {


    return (
       
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="nav-link"> Logo </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to={'/'} className="nav-link"> Home </Link>
                </li>
                <li class="nav-item">
                <Link to={'/signIn'} className="nav-link">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/join'} className="nav-link">About</Link>
                </li>
              </ul>
   
  </div>
</nav>



      
    )
}

export default Navbar
