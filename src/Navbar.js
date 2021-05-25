
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import './App.css';

const NavigationBar = () => {
    return ( 
        <> <div>
           <Navbar className="color-nav" expand="lg" fixed="top">
                 <Navbar.Brand className="navText" href="#home">MAMUNUR RAJA</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <Nav.Link className="navText" href="#home">Home</Nav.Link>
                          <Nav.Link className="navText" href="#link">Link</Nav.Link>
                      </Nav>
                      </Navbar.Collapse>
                  </Navbar>
             </div>
        </>
     );
}
 
export default NavigationBar;