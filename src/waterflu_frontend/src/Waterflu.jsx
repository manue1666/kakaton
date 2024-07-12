import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Nav, Navbar, Col, Row} from "react-bootstrap";
import Logo from "./Logo.png";

export const Waterflu = ()=> {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light"> 
    <img src={Logo} className='Logotipo'/>
        <Container>
  
          <Navbar.Brand href="/" className='ola'>Water flu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Water">About us</Nav.Link>
             <Nav.Link href="https://identity.ic0.app/">Internet identity</Nav.Link>

          </Nav>
        </Container>
    </Navbar>
    <br/>
    <h1>Nuestro Proposito</h1> 
    <p>Water Flu busca reducir el desperdicio de agua potable además de prevenir enfermedades respiratorias causadas por moho. También busca evitar daños costosos y pérdida de valor en la propiedad.</p>
    <h1>Que es Water Flu</h1>
    <p>Water Flu es un proyecto enfocado en un dispositivo que detecta filtraciones de humedad para la detección temprana de fugas internas</p>
    <br/>
    <p>Consta de un dispositivo que se conecta vía Bluetooth a una aplicación web, ya sea móvil u ordenador.
      <br/> Dicha aplicación se encontrará en nuestra página web, desarrollada con la librería de AZLE de ICP.</p>
    </>
  );
}

export default Waterflu;