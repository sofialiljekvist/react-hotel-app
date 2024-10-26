import React from "react";
//Komponent som visar våra kort med de olika rumstyperna. Datan för varje rum är hårdkodad i roomdata.js och hämtas med hjälp av funktionen getRoomData. Koden från hotelcard har återanvänts men ändrats för att hämta info från roomdata i stället. Knapparna i hotelcard är ersatta med en drop-downmeny och description visas i en punktlista.
import {getRoomData} from "./roomdata.js";
//Importerar card, row, col och form från react-bootstrap biblioteket
import {Card, Row, Col, Form} from "react-bootstrap";  

export const RoomCard = () => { 
  const roomArray = getRoomData(); //roomArray innehåller all data från roomdata.js. 

  return (
    <div className="p-5" style={{
        marginBottom: "20px"
        }}>
        <h2 style={{
          fontSize: "1.1rem",
          textTransform: "uppercase",
          paddingBottom: "20px",
          textAlign:"center"
          }}>
          Välj rumstyp och antal rum
        </h2>
      <Row>
        {roomArray.map((room) => (   //Itererar över varje rum i listan roomArray och visar img, title, subtitle, description och text för varje hotell.
        <Col md="4" sm="6" xl="4" className="p-3">  
          <Card>
            <Card.Img style={{ height: "200px" }} src={room.image} />
            <Card.Body style={{
              backgroundColor: "#f1f1f1"
              }}>
            <div style={{height: "230px"}}> 
              <Card.Title>{room.title}</Card.Title>
              <Card.Subtitle className="text-muted text-wrap" style={{
                fontSize: "0.9rem"
                }}>{room.subTitle}</Card.Subtitle> 
                <ul >{/*Iterera över varje punkt i listan som är kodad under description i roomdata.js */}
                  {room.description.map((item, index) => (
                  <li style= {{
                    color:"black", 
                    listStyle: "disc",
                    fontSize: "0.8rem"}}key={index}>{item}
                  </li> 
                    ))}
                </ul>
              <Card.Text style={{textAlign : "right", fontWeight: "bold"}}>Pris från {room.price} per person</Card.Text>
            </div>


          {/*Kod från react-bootstrap biblioteket*/}
         
          <Form style= {{ display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
            <Form.Label>Antal rum</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3" controlId="exampleForm.ControlInput1" style={{
            width: "80px"
            }}>
            <option>-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </Form>
       
          </Card.Body>
          </Card>
        </Col>
))}
      </Row>
    </div>
  )
}
