////Komponent för vyn readmore. Importerar de olika komponenterna som ska renderas i vyn. 
import './App.css';
import { Collage } from './collage.jsx';
import {ButtonsFour} from "./buttonsfour.jsx";
import { PinkHero } from "./pinkhero";

export function ReadMore() {
  return (
    <div style={{       
        marginBottom: '120px',
        }}> 
        <PinkHero />
        {/*Stylar h2 här istället för i css-filen, då vi använder h2 på olika ställen genom hela applikationen med olika styling */}
        <h2 style={{ 
            fontSize: "1.5rem", 
            textTransform: "uppercase", 
            paddingBottom: "50px",
            paddingTop: "30px",
            textAlign: "center"
           }}>Läs mer om resmålet
        
        </h2>
    
        <h3>Villa Trullo, Brac, Kroatien
        </h3>

        <h4>Familjevänligt vid stranden
        </h4>
        {/*Stylar p för varje stycke i stället för i css eftersom vi vill ha olika styling på våra olika p-element. */}
        <p style={{ 
            fontSize: "0.9rem", 
            paddingBottom: "30px",
            paddingLeft: "130px",
            paddingBottom: "15px",
            textAlign: "left",
            width: "90%"
           }}>Villa Trullo ligger precis vid Brac. 
           Hotellet passar både stora och små gäster och har ett rymligt poolområde,
            vattenrutschkana och spa-avdelning.  Om du vill se dig omkring i omgivningarna kan du promenera till Boriks 
            småbåtshamn som ligger i närheten. 
        </p>

        <h4>Välj mellan pool och strand
        </h4>

        <p style={{ 
            fontSize: "0.9rem", 
            paddingBottom: "30px",
            paddingLeft: "130px",
            paddingBottom: "15px",
            textAlign: "left",
            width: "90%"
           }}>Precis nedanför poolområdet ligger Borik-stranden med 
           sitt kristallklara vatten. Stranden knyts samman med hotellet
            via ett grönområde. Här kan du koppla av hela dagen, och när du behöver
             något svalkande att dricka kan du beställa något gott i poolbaren.
        </p>
    
        <h4>Familjevänligt med vattenrutchkana
        </h4>

        <p style={{ 
            fontSize: "0.9rem", 
            paddingLeft: "130px",
            paddingBottom: "50px",
            textAlign: "left",
            width: "90%"
           }}>På Villa Trullo bor du bekvämt med barn,
            det finns lekutrymmen både inomhus och utomhus. Vid poolen finns det
             även en vattenrutschkana och hotellet har en internationell barnklubb. 
           Spaavdelning och inomhuspool. Efter en lång dag i solen kan du koppla av
            på hotellets rymliga spaavdelning med pool, bastu och jacuzzi. 
            Spaavdelningen välkomnar gäster över 18 år och för extra avkoppling finns det spabehandlingar. 
            Behandlingarna är inspirerade av Adriatiska havet och den närliggande naturen, bland annat kan 
            du välja en ansiktsmask med havssaltkristaller.
        </p>
    
        <p style={{ 
            fontSize: "1.2rem", 
            fontWeight: "bold",
            paddingRight: "100px",
            paddingBottom: "100px",
            textAlign: "right",
           }}>Pris 2798kr/person
        </p>
        
        <Collage />
        <ButtonsFour/>
        {/*Renderar komponenterna PinkHero, Collage, ButtonsFour */}
       
    </div>   
  );
}

export default ReadMore;