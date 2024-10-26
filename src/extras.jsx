//Komponent för Tillvalsrutan i bokaresa.jsx. 
//Importerar formulär fån react-boostrap biblioteket
import Form from 'react-bootstrap/Form';

export function Extras() {
  
  return (
  <div style={{
    display: 'flex',            
    justifyContent: 'center',   
    alignItems: "center", 
    flexDirection: 'column',
    margin: "20px",
    paddingBottom: "50px", 
    }}>
      
   <h2 style={{
        fontSize: "1.1rem",
        textTransform: "uppercase",
        paddingBottom: "20px",
        paddingTop: "30px"
        }}>
      Tillval
    </h2>
 {/*React-bootstrap kod*/}
    <Form className='p-4' style={{backgroundColor: "#F1F1F1", borderRadius: '8px', border: 'solid, thin, lightgrey'}}>
      <Form.Label>Önskas transfer t/r (480:-)</Form.Label>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label="Ja"
          />
          <Form.Check
            type={type}
            label="Nej"
            id={`default-${type}`}
          />
      </div>
      ))}
 
 {/*React-bootstrap kod*/}
      <Form.Label>Önskas rum bredvid varandra? (0:-)</Form.Label>
        {['checkbox'].map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Check // prettier-ignore
          type={type}
          id={`default-${type}`}
          label="Ja"
        />

        <Form.Check
          type={type}
          label="Nej"
          id={`default-${type}`}
        />
      </div>
      ))}
    </Form>
  </div>
);
}




export default Extras;