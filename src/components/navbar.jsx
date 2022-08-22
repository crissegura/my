import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar=()=> {
  return (
    <header>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">FunkoPop!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Tienda</Nav.Link>
                <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  );
}

