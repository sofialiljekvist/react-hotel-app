// Komponent för knapparna i hotelcard som visas på startsidan. Importerar Button från react-bootstrap-biblioteket. 
// Importerar Link för att kunna länka knapparna till komponenterna readmore och bokaresa. 
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


export function Buttons() {
    return (
      <div>
            <div className="d-flex justify-content-between mt-4 mb-3 pb-2">
                <Link to={"/readmore/"}>  {/* Här säger vi att knappen "Läs mer" ska ta användaren till vyn "Läs mer"   */}
                    <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "10px"}}>Läs mer
                    </Button>
                </Link>
                <Link to={"/bokaresa/"}> {/* Här säger vi att knappen "Boka" ska ta användaren till vyn "Boka resa"   */}
                    <Button style={{ backgroundColor: '#2943CB', color: 'white', borderColor: "#2943CB",fontWeight: 'bold', width: '110px', marginRight: "10px" }}>Boka
                    </Button>
                </Link>
            </div>
        </div>
    );
  }
  
  export default Buttons;
  

  
    