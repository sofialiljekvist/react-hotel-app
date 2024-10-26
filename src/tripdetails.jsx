//Komponent för formuläret där användaren väljer flygplats och antal personer. Koden återanvänds från customerdetails men med färre form groups och med Form.select för att ge drop-down-menyer i stället för form.control.
//Importerar formulär fån react-boostrap biblioteket
import Form from 'react-bootstrap/Form';

export function TripDetails() {

    return (
    <div style={{
        display: 'flex',           
        justifyContent: 'center',   
        alignItems: "center", 
        flexDirection: 'column'
        }}>
        <h2 style={{ 
            fontSize: "1.1rem", 
            textTransform: "uppercase", 
            paddingBottom: "20px",
            paddingTop: "30px"
         
           }}>Resedetaljer
        </h2>
        
    {/*Kod från react-bootstrap*/}
      <Form style={{
          backgroundColor: "#f1f1f1",
          height: "250px",
          width: "600px",
          padding: "20px",          
          borderRadius: "8px",      
          marginBottom: '20px'
          }}>
    
        <Form.Group>  
          <Form.Label>Avreseort</Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3" controlId="exampleForm.ControlInput1" style={{width: "550px" }}>
    
            <option>Välj din flygplats</option>
            <option value="1">Landvetter,Göteborg</option>
            <option value="2">Kastrup,Köpenhamn</option>
            <option value="3">Arlanda,Stockholm</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Antal personer </Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3" controlId="exampleForm.ControlInput1" style={{width: "550px" }}>
            <option>-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>   
)};