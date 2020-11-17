import React from 'react';
import { Nav, Navbar, NavLink, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import resume from '../images/Resume.pdf';

class Navigation extends React.Component {


    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">HOME</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink as={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/projects">Portfolio</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavLink href={resume} target="_blank">Resume</NavLink>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      )
    }
  }
  
export default Navigation

