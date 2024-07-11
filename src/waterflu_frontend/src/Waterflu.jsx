import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Nav, Navbar, Col, Row} from "react-bootstrap";

export const Waterflu = ()=> {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Water">About us</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    <br/>
    <h1>Aqui ba la descripcion de nuestro proyecto</h1>
    </>
  );
}

export default Waterflu;