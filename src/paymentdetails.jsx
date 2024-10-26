//Komponent för de olika betalningsalternativen.
//Importerar formulär från react-bootstrap-bibliotek.
import Form from 'react-bootstrap/Form';


export function PaymentDetails() {
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
            }}>
            Betalning
      </h2>
          
      <p style={{color: "darkgrey"}}>Välj vilken betalningsmetod du önskar betala din resa med</p>
        
        {/*Kod från react-bootstrap där vi ändrat label*/}  
      <Form className='p-4' style={{
          backgroundColor: "#F1F1F1", 
          borderRadius: '8px', 
          border: 'solid, thin, lightgrey', 
          height: "280px",
          width: "650px",
          padding: "20px",          
          marginBottom: '100px'
          }}>
          <Form.Label></Form.Label>
            {['radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
              <Form.Check style ={{padding:"10px", paddingLeft: "100px"}}
                type={type}
                id={`default-${type}`}
                label="Betala med kort"
              />
              <Form.Check style ={{padding:"10px", paddingLeft: "100px"}}
                  type={type}
                  label="Betala med Klarna"
                  id={`default-${type}`}
              />
              <Form.Check style ={{padding:"10px", paddingLeft: "100px"}}
                  type={type}
                  label="Betala med Swish"
                  id={`default-${type}`}
              />
              <Form.Check style ={{padding:"10px", paddingLeft: "100px"}}
                  type={type}
                  label="Betala på resmålet"
                  id={`default-${type}`}
              />
            </div>
              ))}
        </Form>
    </div>
  );
}

        export default PaymentDetails;