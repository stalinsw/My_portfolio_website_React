import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand className="nav-container d-flex justify-content-end p-2 px-4 fs-3" as={Link} to="/"><b>S</b>TALI<b>N.</b></Navbar.Brand>
        <Nav className="navbar-section d-flex justify-content-end fs-6">
          <Nav.Link className="nav-links me-3" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="nav-links me-3" as={Link} to="/about">About</Nav.Link>
          <Nav.Link className="nav-links me-3" as={Link} to="/projects">Projects</Nav.Link>
          <a href="https://drive.google.com/file/d/1MjljoWzg2ZL_qdayjuz4bS785-a0YnIH/view?usp=sharing">
          <Button className="me-3" variant="dark">Download Resume</Button>
          </a>
        </Nav>
      </Navbar>
      <main>
        {children}
      </main>
    </div>
  );
};
export default Layout;
