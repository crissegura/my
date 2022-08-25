import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from "./CardWidget";
import TarjetaProductos from "./ItemListContainer";

const NavBar=()=> {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home">FunkoPop!</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <a href="#" className="tienda" >Tienda</a>
                  <a href="#" className="buttonCarrito"> {Carrito} </a>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <TarjetaProductos />
    </>
  );
}

export default NavBar;