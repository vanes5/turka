import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="/home">Turkáló</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/termekek">Termékek</Nav.Link>
              <Nav.Link href="/profil">Profil</Nav.Link>
              <Nav.Link href="/kosar">Kosár</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}