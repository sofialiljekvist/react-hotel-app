//Komponent för knappen Avbryt i payment.jsx. Importerar Button från react-bootstrap-biblioteket. Importerar Link för att kunna länka knapparna till komponenterna readmore och bokaresa. 
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function ButtonsThree() {
    return (
      <div>
            <div className="d-flex justify-content-between mt-4 pb-5 mb-5">
            <Link to={"/"}>
                <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "100px"}}>Avbryt
                </Button>
            </Link>
            </div>
        </div>
  
    );
  }
  
  export default ButtonsThree;
  