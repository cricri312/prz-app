import React, { Component } from 'react'
import '../css/Navbar.css'
import logo from '../image/logo.png'
import { Navbar, Nav } from 'react-bootstrap';
class Navigation extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand='lg' className="navbar">
        <Navbar.Brand href="/home"><img src={logo} alt="Logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav blue" style={{ backgroundColor: 'info', border: 1}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" >
            {/* <Nav.Link className="text-primary" href='/roadmap'>ROADMAP</Nav.Link>
            <Nav.Link className="prz-color" href='/team'>TEAM</Nav.Link>
            <Nav.Link className="prz-color" href='/about'>ABOUT</Nav.Link>
            <Nav.Link className="prz-color" href='/contact'>CONTACT</Nav.Link>
            <Nav.Link className="prz-color" href='/NFT'>NFT</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;