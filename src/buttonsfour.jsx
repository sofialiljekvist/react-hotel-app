//Komponent för knapparna i readmore.jsx. Importerar Button från react-bootstrap-biblioteket. Importerar Link för att kunna länka knapparna till komponenterna startsidan och bokaresa. 
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function ButtonsFour() {
    return (
      <div>
            <div className="d-flex justify-content-between mt-4 pb-5 mb-5">
            <Link to={"/"}> {/* Här säger vi att knappen "Tillbaka" ska ta användaren till vyn "Startsida"   */}
            <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "100px"}}>Tillbaka
                </Button>
            </Link> 
            <Link to={"/bokaresa"}> {/* Här säger vi att knappen "Boka" ska ta användaren till vyn "Boka resa"   */}
            <Button style={{ backgroundColor: '#2943CB', color: 'white', borderColor: "#2943CB",fontWeight: 'bold', width: '110px', marginRight: "100px" }}>Boka
                </Button>
            </Link>
             
            </div>
        </div>
  
    );
  }
  
  export default ButtonsFour;
  