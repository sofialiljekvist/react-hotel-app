//Komponent som visar våra kort med hotellen. Datan för varje hotell är hårdkodad i hoteldata.js och hämtas med hjälp av funktionen getHotelData.
//Importerar kolumn, rader och layout för cards från react-bootstrap biblioteket.
import {Button} from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap"; 
import React from "react";
import { getHotelData } from "./hoteldata";
import { Link } from "react-router-dom";

export const HotelCard = () => { 
  const hotelArray = getHotelData(); // hotelArray innehåller all data från hotelData-filen. 
  return (
    <div className="p-5" style={{ marginBottom: "200px" }}>
      <h1 className="d-flex justify-content-center">Våra populära resmål</h1>
      <Row>
        {hotelArray.map((hotel) => ( // går igenom varje hotell i listan och visar img, title, subtitle och text för varje hotell.  
          <Col key={hotel.hotelID} md="4" sm="6" xl="4" className="p-3">  
            <Card >
              <Card.Img style={{ height: "200px"}} src={hotel.image} />
              <Card.Body style={{ backgroundColor: "#f1f1f1" }}>
                <div style={{ height: "200px" }}>
                  <Card.Title>{hotel.title}</Card.Title>
                  <Card.Subtitle className="text-muted text-wrap">{hotel.subTitle}</Card.Subtitle> 
                  <ul>
                    {hotel.description.map((item, index) => (
                      <li 
                        key={index} 
                        style={{
                          color: "black", 
                          listStyle: "disc",
                          fontSize: "0.8rem"
                        }}>
                        {item}
                      </li> 
                    ))}
                  </ul>
                  <Card.Text style={{ textAlign: "right", fontWeight: "bold" }}>
                    Pris från {hotel.price} per person
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/readmore/${hotel.hotelID}`}>
                  <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "10px"}}>Läs mer
                  </Button>
                  </Link>
                  <Link to={`/bokaresa/${hotel.hotelID}`}>
                  <Button style={{ backgroundColor: '#2943CB', color: 'white', borderColor: "#2943CB",fontWeight: 'bold', width: '110px', marginRight: "10px" }}>Boka
                  </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

