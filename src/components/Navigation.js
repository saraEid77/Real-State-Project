import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem ,Container} from 'react-bootstrap';
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
                {/* <NavItem eventkey={1} href="/"> */}
                  {/* <Nav.Link exact activeClassName="active" as={Link} to="/" >Home</Nav.Link> */}
                  <NavLink exact to="/"
                    activeStyle={{
                      fontWeight:"bold",
                      color: "#035798"
                    }}>home</NavLink>
                {/* </NavItem> */}
                {/* <NavItem eventkey={2} href="/signIn"> */}
                  {/* <Nav.Link exact activeClassName="active" as={Link} to="/signIn" >Sign In </Nav.Link> */}
                  <NavLink exact to="signIn"
                    activeStyle={{
                      fontWeight:"bold",
                      color: "#035798"
                    }}>Sign In</NavLink>
                {/* </NavItem>
                <NavItem eventkey={3} href="/join"> */}
                  {/* <Nav.Link exact activeClassName="active" as={Link} to="/join" >Join</Nav.Link> */}
                  <NavLink exact to="join"
                    activeStyle={{
                      fontWeight:"bold",
                      color: "#035798"
                    }}>Join</NavLink>
                {/* </NavItem> */}
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
