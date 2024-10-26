//Komponent som visar ett collage av tre bilder i readmore.jsx
//importerar en layout från react-bootstrap-biblioteket som syns i readmore.jsx. 
/*  Vi importerar bilderna här för att kunna "anropa" bilderna i Col nedan  */
import {Row, Col, Container} from 'react-bootstrap';
import picture4 from "./bilder/segla.jpg"; 
import picture5 from "./bilder/strand.jpg";
import picture6 from "./bilder/rosa.jpg";


export function Collage() {
  return (
  <div style={{paddingBottom: "100px"}} >
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm="auto">
          <img src={picture4} alt="Bild på en segelbåt i Kroatien" />
        </Col>
        <Col sm={6}> 
          <img src={picture5} alt="Bild på en strand med turkost vatten"/>
          <img src={picture6} alt="Bild på en strand med turkost vatten och lila blommor"
            style={{
            paddingTop: "20px",
            height: "240px",
            width: "391px"}}
          />
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Collage;





