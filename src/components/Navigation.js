import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem ,Container , Row, Col} from 'react-bootstrap';
import { Switch, Route, Link,NavLink} from 'react-router-dom';
import home from './Home'

export default class Navigation extends Component {
  render() {
    return (
      <div className="bigNavbar">
        <Container>
          {/* <Navbar className="navbar  ">
            <Navbar.Brand as={Link} to="/"  >Logo</Navbar.Brand>
                  <a href="/" className="pt-3 font-weight-lighter" style={{fontSize:"12px"}}>
                        How It Works ?
                  </a>
            <Navbar.Toggle aria-controls="/responsive-navbar-nav" />
            <Navbar.Collapse  id="responsive-navbar-nav">
              <Nav className="ml-auto" >
                    <NavLink exact to="/"
                      activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>home</NavLink>
                      <NavLink exact to="signIn"
                        activeStyle={{
                          fontWeight:"bold",
                          color: "#035798"
                        }}>Sign In</NavLink>
                    
                      <NavLink exact to="join"
                        // style={{ position:"absolute" , left:"-36px"}}
                        activeStyle={{
                          fontWeight:"bold",
                          color: "#035798"
                        }}>Join</NavLink>
                    
              </Nav>
              <Form inline>  
                <Button variant="primary">Post Project</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar> */}
            <Navbar expand="lg">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Home</Nav.Link>
                    <Nav.Link href="/signIn" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>Sign In</Nav.Link>
                    <Nav.Link href="/join" exact activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>join</Nav.Link>
                  </Nav>
                  <Form inline>
                     <Button variant="primary">Post Project</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
        </Container>
        <div>
          
        </div>
      </div>
    );
  }
}
