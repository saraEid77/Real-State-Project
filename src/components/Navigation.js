import React, { Component } from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import Logo from '../assets/images/call-to-action-logo.png';
import { FaSearch ,FaBars} from 'react-icons/fa';


export default class Navigation extends Component {
  render() {
    return (
      <div className="bigNavbar">
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={Logo} alt="img"></img></Navbar.Brand>
                {/* <Navbar.Toggle  style={{color:"#f00"}} aria-controls="basic-navbar-nav" /> */}
                <Navbar.Toggle style={{color:"#71B100"}} aria-controls="basic-navbar-nav"> <FaBars /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" style={{backgroundColor:"#71B100"}}exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Home</Nav.Link>
                    <Nav.Link href="/signIn" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>About Us</Nav.Link>
                    <Nav.Link href="/join" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Our Agents</Nav.Link>
                      <Nav.Link href="/join" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Properties</Nav.Link>
                      <Nav.Link href="/join" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Gallery</Nav.Link>
                      <Nav.Link href="/join" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Contact Us</Nav.Link>
                      <Nav.Link><FaSearch /></Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Navbar>
        </Container>
        <div>

        </div>
      </div>
    );
  }
}
