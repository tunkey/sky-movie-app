import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';

const SiteHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="The Movie DB" width="167" height="35" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">The Movie DB App</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default SiteHeader;
