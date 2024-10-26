//Komponent som visar bokningsbekräftelsen i sista steget. Består av en tabell där innehållet i tabellen presenteras i en lista. Tabellen och listan stylas i app.css.
import './App.css';

export function Confirmation() {
  return (


    <div>
        <h2 style={{ 
            fontSize: "1.5rem", 
            textTransform: "uppercase", 
            paddingBottom: "20px",
            paddingTop: "30px",
            textAlign: "center"
           }}>Bokningsbekräftelse
        </h2>
    
        <h3 style={{ 
            fontSize: "1rem", 
            paddingBottom: "20px",
            paddingTop: "5px",
            textAlign: "center",
            fontWeight: "bold"
           }}>Du har bokat och betalat din resa till Brac, Kroatien!
        </h3>

        <p style={{ 
            fontSize: "0.9rem", 
            paddingBottom: "30px",
            textAlign: "center",
            color: "rgb(125, 119, 119)"
           }}>Din bokningsbekräftelse skickas till din angivna mailadress.
        </p>
    
        <div className='d-flex justify-content-center'> 
   
            <table style={{
                    height: "500px",
                    width: "650px",        
                    marginBottom: '120px',
                    borderRadius: "20px",
                    backgroundColor: "#f1f1f1"
                    }}> 
                <tbody>
                    <tr>
                        <td>Beställare</td>    
                        <ul>
                            <li>Maria Svensson</li>
                            <li>maria.svensson@gmail.com</li>
                            <li>+46 79 32 54 588 </li>
                        </ul>
                    </tr>
                    <tr>
                        <td>Resedetaljer</td>
                        <ul>
                            <li>Villa Trullo</li>
                            <li>Lanvetter flygplats, Göteborg</li>
                            <li>5 st personer </li>
                            <li>2 st rum </li>
                        </ul>
                    </tr>
                    <tr>
                        <td>Avresedatum</td>
                        <ul>
                            <li>18 november 2024</li>
                        </ul>
                    </tr>
                    <tr>
                        <td>Tillval</td>
                        <ul>
                            <li>Transfer t/r: JA</li>
                            <li>Rum bredvid varandra: JA</li>
                        </ul>
                    </tr> 
                    <tr>
                        <td>Betalningsmetod</td>
                        <ul>
                            <li>Visa/MasterCard</li>
                        </ul>
                    </tr> 
                    <tr>
                        <td>Summa</td>
                        <ul>
                            <li>Hotell & flyg</li>
                            <li>5 personer x 2798:-</li>
                            <li>Tillval: Transfer 480:- </li>
                        </ul>
                    </tr> 
                    <tr>
                        <td style={{
                            textTransform:"upperCase", 
                            fontWeight: "bold", 
                            paddingBottom: "60px"}}>Summa totalt:
                        </td>
                        <ul>
                            <li style={{fontWeight: 'bold', color: 'black'}}>14.470 kronor</li>
                        </ul>
                    </tr>      
                    <tr>
                        <td></td>
                        
                        <ul> 
                            <a href= "" style={{textDecoration:"none"}}> 
                                <li style={{textAlign : "right", padding: "20px", color: "black"}}>
                                <i className="bi bi-printer"style={{ fontSize: '40px' }}></i> {/* skrivar-ikon från bootstrap bibliotek*/}
                                <p>Skriv ut din beställningsbekräftelse</p>
                            </li>
                            </a>
                        </ul>
                    </tr>
                </tbody> 
            </table>
        </div>
    </div>
);
}

export default Confirmation;