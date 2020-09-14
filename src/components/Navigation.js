import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem ,Container , Row, Col} from 'react-bootstrap';
import { Switch, Route, Link,NavLink} from 'react-router-dom';
import home from './Home'

export default class Navigation extends Component {
  render() {
    return (
      <div className="bigNavbar">
        <Container>
          <Navbar className="navbar">
            <Navbar.Brand as={Link} to="/"  >Logo</Navbar.Brand>
            <a href="/" className="pt-3 font-weight-lighter" style={{fontSize:"12px"}}>
                        How It Works ?
                  </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  id="responsive-navbar-nav">
              <Nav className="ml-auto" >
                <Row>
                  <Col xs={12}  md={3}>
                    <NavLink exact to="/"
                      activeStyle={{
                        fontWeight:"bold",
                        color: "#035798"
                      }}>home</NavLink>
                   </Col>
                   <Col xs={12}  md={5}>
                      <NavLink exact to="signIn"
                        activeStyle={{
                          fontWeight:"bold",
                          color: "#035798"
                        }}>Sign In</NavLink>
                    </Col>
                    <Col xs={12} md={3} >
                      <NavLink exact to="join"
                        // style={{ position:"absolute" , left:"-36px"}}
                        activeStyle={{
                          fontWeight:"bold",
                          color: "#035798"
                        }}>Join</NavLink>
                    </Col>
                 </Row>
              </Nav>
              <Form inline>  
                <Button variant="primary">Post Project</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <div>
          {/* <Switch>
            <Route exact path='/' component={home} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch> */}
        </div>
      </div>
    );
  }
}
