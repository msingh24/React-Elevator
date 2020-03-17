import React from 'react'
import '../styles/menu.css'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../img/SitePics/logo.png'

const Menu = () => {
  return (
          
    <Navbar expand="sm" className="menu">
    <NavLink className="link" id="brand" to="/"><img src={logo} alt="logo" className="logo" /></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="indiv-links lead">
        <Nav.Link><NavLink className="link" to="/">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink className="link" to="/about">About</NavLink></Nav.Link>
        <Nav.Link><NavLink className="link" to="/services">Services</NavLink></Nav.Link>
        <Nav.Link><NavLink className="link" to="/portfolio">Portfolio</NavLink></Nav.Link>
        <Nav.Link><NavLink className="link" to="/contact">Contact</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  
          
         )
        }


export default withRouter(Menu)