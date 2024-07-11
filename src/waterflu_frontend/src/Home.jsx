import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";
import {Container, Nav, Navbar, Col, Row} from "react-bootstrap";

export const Home = () => {
    useEffect(() => {
        getUsers()
    }, [])
    
    const bnd = useRestActor("backend");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await bnd.get("/users");
            console.log(res.data)
            setUsers(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }
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
        <Container>
            <Row>
                <Col>
                <h1 className='titulo'>WATER FLU</h1>
                <p>aqui van los datos del controlador</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;