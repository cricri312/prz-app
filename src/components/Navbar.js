import React, { Component } from 'react'
import '../css/Navbar.css'
import logo from '../image/logo.webp'
import { Navbar, Nav } from 'react-bootstrap';
class Navigation extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand='lg' className="navbar">
        <Navbar.Brand href="/"><img src={logo} alt="Logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav blue" style={{ backgroundColor: 'info', border: 1 }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link className="text-dark " href='/monitoring'>MONITORING</Nav.Link>
            {/* <Nav.Link className="text-dark " href='/mqtt'>MQTT</Nav.Link> */}
            {/* <Nav.Link className="text-dark" href='/chart'>CHART</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;