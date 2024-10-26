//Komponent som visar våra kort med hotellen. Datan för varje hotell är hårdkodad i hoteldata.js och hämtas med hjälp av funktionen getHotelData.
//Importerar kolumn, rader och layout för cards från react-bootstrap biblioteket.
import {Card, Row, Col} from "react-bootstrap"; 
import React from "react";
import { getHotelData } from "./hoteldata";
import {Buttons} from "./buttons.jsx";

export const HotelCard = () => { 
  const hotelArray = getHotelData(); //hotelArray innehåller all data från hotelData-filen. 
  return (
    <div className="p-5" style={{
        marginBottom: "200px"
        }}>
      <h1 className="d-flex justify-content-center">Våra populära resmål</h1>
    
    {/*Kod från react-bootstrap*/ }
    <Row>
        {hotelArray.map((hotel) => ( //går igenom varje hotell i listan och visar img, title, subtitle och text för varje hotell.  
       
       <Col md="4" sm="6" xl="4" className="p-3">  
          <Card>
            <Card.Img style={{ height: "200px" }} src={hotel.image} />
            <Card.Body style={{
              backgroundColor: "#f1f1f1"
              }}>
            <div style={{height: "100px"}}>
              <Card.Title>{hotel.title}</Card.Title>
              <Card.Subtitle className="text-muted text-wrap mb-3 pb-3">{hotel.subTitle}</Card.Subtitle> 
              <Card.Text style={{textAlign : "right", fontWeight: "bold"}}>Pris från {hotel.price} per person</Card.Text>
            </div>
           <Buttons/> {/*Renderar knapparna i buttons.jsx*/ }
          </Card.Body>
          </Card>
        </Col>
))}
      </Row>
    </div>
  )
}
