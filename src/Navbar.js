
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import './App.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return ( 
        <> <div>
           <Navbar className="color-nav" expand="lg" fixed="top">
                 <Navbar.Brand className="navText" href="#home">MAMUNUR RAJA</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <Nav.Link className="navText" href="#home"><Link to="/">HOME</Link></Nav.Link>
                          <Nav.Link className="navText" href="#link"><Link to="/skill">SKILL</Link></Nav.Link>
                          <Nav.Link className="navText" href="#link"><Link to="/education">EDUCATION</Link></Nav.Link>
                          {/* <Nav.Link className="navText" href="#link">CONTACT</Nav.Link> */}
                      </Nav>
                      </Navbar.Collapse>
                  </Navbar>
             </div>
        </>
     );
}
 
export default NavigationBar;