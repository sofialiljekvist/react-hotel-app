//Komponent för bild och info om resmålet som återanvänds både i bokaresa.jsx och payment.jsx.
//Importerar card, row och col från react-bootstrap
import { Card, Row, Col } from "react-bootstrap"; 
import React from "react";
import { getHotelData } from "./hoteldata.js";

export const PicAndInfo = () => { 
  const hotelArray = getHotelData(); // hämtar data från hoteldata.js. 
  const hotel = hotelArray[0]; // hämtar det första hotellet eftersom vi bara vill visa Villa Trullo här

  return (
    <div className="p-3 d-flex justify-content-center pb-5 mb-4"  >
      <Row>
        <Col >  
          <Card>
            <Card.Img style={{width: '320px', height: "180px" }} src={hotel.image} />
            <Card.Body style={{ backgroundColor: "#ffffff"}}>
              <div style={{ height: "70px" }}>
                <Card.Title>{hotel.title}</Card.Title>
                <Card.Text style={{ textAlign: "left" }}>{hotel.discription}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PicAndInfo;