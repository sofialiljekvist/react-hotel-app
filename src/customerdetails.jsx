//Komponent för formuläret där användaren fyller i sina personuppgifter i bokaresa.
//Importerar formulär fån react-boostrap biblioteket
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function CustomerDetails({ onSelect }) {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Uppdatera customerData och skicka till App.js via onSelect
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Skicka uppdaterad data till App.js
    onSelect(customerData);
  };
  
    return (
  <div style={{
      display: 'flex',            // Stylar layouten
      justifyContent: 'center',   
      alignItems: "center", 
      flexDirection: 'column'
      }}>
      <h2 style={{ 
          fontSize: "1.1rem", 
          textTransform: "uppercase", 
          paddingBottom: "20px",
          }}>
          Beställare
      </h2>
      <Form style={{
          backgroundColor: "#f1f1f1",
          height: "300px",
          width: "820px",
          padding: "20px",          
          borderRadius: "8px",      
        
        }}> {/*React-bootstrap-kod. Det vi ändrat är labels och placeholder-texten.*/}
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width: "750px" }}>
          <Form.Label>Fullständigt namn *</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Emma Lindgren" 
            name="name"
            value={customerData.name}
            onChange={handleInputChange} />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{width: "750px" }}>  
          <Form.Label>E-post *</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="emma.lindgren@gmail.com" 
            name="email"
            value={customerData.email}
            onChange={handleInputChange} />
        </Form.Group>
        
        <Form.Group className="mb-5 pb-5" controlId="exampleForm.ControlInput3" style={{width: "750px" }}>
          <Form.Label>Telefonnummer *</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="+46 xx xx xx xxx"   
            name="phone"
            value={customerData.phone}
            onChange={handleInputChange}/>  
        </Form.Group>
      </Form>
  </div>  
)}