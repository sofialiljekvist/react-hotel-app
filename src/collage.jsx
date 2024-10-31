//Komponent som visar ett collage av bilder i readmore.jsx
//importerar en layout från react-bootstrap-biblioteket som syns i readmore.jsx. 
/*  Vi importerar bilderna här för att kunna "anropa" bilderna i Col nedan  */
import {Row, Col, Container} from 'react-bootstrap';
import { getHotel} from "./hoteldata";
import { useParams } from 'react-router-dom';

export function Collage() {
  const { hotelID } = useParams();
  const hotel = getHotel(Number(hotelID));
  const collagePairs = [];
  for (let i = 0; i < hotel.collage.length; i += 2) {
    collagePairs.push(hotel.collage.slice(i, i + 2));
  }
  return (
    <div style={{ paddingBottom: "50px" }}>
      <Container>
      {collagePairs.map((pair, index) => (
          <Row key={index} className="d-flex justify-content-center">
            {pair.map((image, imgIndex) => (
              <Col sm={6} key={imgIndex}>
                <img 
                  src={image} 
                  alt={`Collage bild ${imgIndex + 1}`} 
                  style={{ 
                    paddingTop: "20px",
                    height: "340px",
                    width: "100%",
                    marginBottom: "10px",
                  }} 
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
);
}

export default Collage;