//Komponent för vår huvudnavigation. Länkarna är inaktiva men när man klickar på loggan kommer man till startsidan.  
//importerar navbar, naviggation, logga och länkning
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import mylogo from "./bilder/mylogo.jpg";
import { Link } from "react-router-dom";


export const NavBar = () => 
{
  return(
    <Navbar style={{ backgroundColor: '#ffffff' }} expand="lg" className="d-flex">
      <Link to= "/">
        <img src={mylogo} style={{ height: "60px" }} alt="Logo" />
      </Link>
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="#action1">Hem</Nav.Link>
        <Nav.Link href="#action2">Hotell</Nav.Link>
        <Nav.Link href="#action3">Destination</Nav.Link>
        <a href= "" style={{textDecoration:"none", color:"black"}}>
          <i className="bi bi-telephone" style={{ fontSize: '22px', marginLeft: '10px' }}></i>
        </a>
        <i className="bi bi-dash" style={{ transform: 'rotate(90deg)' }}></i>
        <a href= "" style={{textDecoration:"none", color:"black"}}>
          <i class="bi bi-person" style={{ fontSize: '24px', marginLeft: '10px' }}></i>
        </a>
      </Nav>
    </Navbar>
  );
}







