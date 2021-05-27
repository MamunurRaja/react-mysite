
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import './App.css';
import {Link} from 'react-router-dom';
import { useState} from "react";

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    return ( 
        <> <div>
           <Navbar className="color-nav" expand="lg" fixed="top" expanded={expanded}>
                 <Navbar.Brand className="navText" href="#home">MAMUNUR RAJA</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <Link className="navText" to="/" onClick={() => setExpanded(false)}>HOME</Link>
                          <Link  className="navText" to="/skill"  onClick={() => setExpanded(false)} >SKILL</Link>
                          <Link  className="navText" to="/education"  onClick={() => setExpanded(false)}>EDUCATION</Link>
                          {/* <Nav.Link className="navText" href="#link">CONTACT</Nav.Link> */}
                      </Nav>
                      </Navbar.Collapse>
                  </Navbar>
             </div>
        </>
     );
}
 
export default NavigationBar;