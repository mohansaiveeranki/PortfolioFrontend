import React from "react";
import {Navbar as NavCom} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import "../index.css"

const Navbar = () => {
  return (
  
    <NavCom bg="dark" variant="dark" expand="lg" sticky="top">
       <div className="responsiveCon header">
        
        <NavCom.Brand href="#home" className="d-flex align-items-center justify-content-between gap-5">
          <img
            src="/photos/about/profile.jpg"   
            alt="Logo" 
            className="rounded-circle image_con"
          />
         <h1 className="font-weight-bold heading"> Portfolio</h1>
        </NavCom.Brand>

        <NavCom.Toggle aria-controls="basic-navbar-nav" />

      
        </div>
        <NavCom.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#home" className="mx-3"><h5>Home</h5></Nav.Link> 
            <Nav.Link href="#projects" className="mx-3"><h5>Projects</h5></Nav.Link>
          </Nav>          
        </NavCom.Collapse>
    </NavCom>   
  );
};

export default Navbar;

