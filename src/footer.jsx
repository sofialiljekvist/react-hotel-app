//Komponent för vår footer. Länkarna ärinaktiva men genom att klicka på loggan kommer man till startsidan.  
//Importerar navbar,navigation, logga och länkning startsida via loggan
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import mylogo from "./bilder/mylogo.jpg";
import {Link} from "react-router-dom";


export const Footer = () => 
{

return(
  <Navbar style={{ backgroundColor: '#f8f9fa' }} expand="lg" className="d-flex" fixed="bottom">
      <Link to ="/">
        <img src={mylogo} style={{ height: "20px" }} alt="Logo" />
      </Link>
      <Nav
        className="mx-auto my-2 my-lg-0 justify-content-center"
        style={{ maxHeight: '100px', textDecoration: 'underline' }}
        navbarScroll>
        <Nav.Link href="#action1">Hem</Nav.Link>
        <Nav.Link href="#action2">Hotell</Nav.Link>
        <Nav.Link href="#action3">Destination</Nav.Link>
      </Nav>
      <div style={{ fontWeight : 'bold', textDecoration : 'none' }}>    
        <Nav.Link href="#action4"> Kontakta oss</Nav.Link>
      </div>   
    </Navbar>
  );
}