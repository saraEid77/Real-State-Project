import React from 'react';
import {Switch ,Route, Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar ,NavDropdown ,Form ,FormControl , Button , NavItem} from 'react-bootstrap';
import home from './Home'

const Nav = () => {
  
    return (
        
      <div>
      <div>
        <Navbar>
          <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <NavItem eventkey={1} href="/">
                <Nav.Link className="nav-link" as={Link} to="/" >Home</Nav.Link>
              </NavItem>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* <div>
        <Switch>
          <Route exact path='/' component={home} />
          <Route render={function () {
            return <p>Not found</p>
          }} />
        </Switch>
      </div> */}
    </div>

        //     /* <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        //       <div class="flex items-center flex-shrink-0 mr-6">
        //          <span class="font-bold text-xl tracking-tight">Logo</span>
        //          <a href="/" class="block text-xs text-black lg:inline-block lg:mt-0  hover:text-teal-200 ml-3 pt-3">
        //                 How It Works ?
        //             </a>
        //       </div>
        //       <div class="block lg:hidden">
        //          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        //          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        //          </button>
        //       </div>
        //       <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        //          <div class="text-sm ">
        //             <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-black mr-4">
        //                 Function
        //             </a>
        //             <a href="/signIn" class="block mt-4 lg:inline-block lg:mt-0  hover:text-blue mr-4">
        //                 Sign In
        //             </a>
        //             <a href="/join" class="block mt-4 lg:inline-block lg:mt-0  hover:text-blue">
        //                 Join
        //             </a>
                    
        //          </div>
        //          <a href="#" class="inline-block text-sm mx-4 px-4 py-2 leading-none border rounded bg-blue text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        //        <div>

        //       </div>
        //     </div>
        // </nav>  */

           
   
    )
}

export default Nav
