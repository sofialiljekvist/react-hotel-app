//Komponent för bild och info om resmålet som återanvänds både i bokaresa.jsx och payment.jsx.
//Importerar card, row och col från react-bootstrap
import { Card, Row, Col } from "react-bootstrap"; 
import React from "react";
import { getHotelData } from "./hoteldata.js";
import { useParams } from 'react-router-dom';

export const PicAndInfo = () => { 
  const { hotelID } = useParams();
  const hotelArray = getHotelData(); // Hämtar all hotelldata ur hoteldata.js

  // Hittar hotellet med det angivna ID:t med hjälp av find. Number talar om att ID:t som ska hämtas är ett nummer. 
  const hotel = hotelArray.find(hotel => hotel.hotelID === Number(hotelID));
  return (
    <div className="p-3 d-flex justify-content-center pb-5 mb-4"  >
      <Row>
        <Col >  
          <Card>
            <Card.Img style={{width: '320px', height: "180px" }} src={hotel.image} />
            <Card.Body style={{ backgroundColor: "#ffffff"}}>
              <div style={{ height: "150px" }}>
                <Card.Title>{hotel.title}</Card.Title>
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PicAndInfo;