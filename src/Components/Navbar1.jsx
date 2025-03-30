import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar1 = () => {
  return (
  
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
       
        <Navbar.Brand href="#home" className="d-flex align-items-center justify-content-between gap-5">
          <img
            src="/photos/about/profile.jpg"   
            alt="Logo"
            width="100"  
            height="100" 
            
            className="d-flex align-top me-2  rounded-circle gap-5 justify-content-between"
          />
         <h1 className="font-weight-bold"> Portfolio</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#home" className="mx-3"><h5>Home</h5></Nav.Link> 
            <Nav.Link href="#projects" className="mx-3"><h5>Projects</h5></Nav.Link>
          </Nav>          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>   
  );
};

export default Navbar1;

