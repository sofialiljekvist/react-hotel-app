//Komponent i payment.jsx som visar sammanställningen av bokningen
//Här har vi återanvänt koden från komponenten confirmation.jsx och stylat den i app.css
import './App.css';
import { useParams } from 'react-router-dom';
import { getHotelData } from "./hoteldata.js";


export const Summery = ({ selectedValue }) => {
    console.log("received selected value in summery", selectedValue);

    const { hotelID } = useParams();
    const hotelArray = getHotelData(); 
    const hotel = hotelArray.find(hotel => hotel.hotelID=== Number(hotelID) );
  return (
        <div>
            <h2 style={{ 
                fontSize: "1.1rem", 
                textTransform: "uppercase", 
                paddingBottom: "20px",
                paddingTop: "30px",
                textAlign: "center"
                }}>Sammanställning
            </h2>
    
    
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
                            <li>Namn: {selectedValue.name}</li>
                            <li>E-post: {selectedValue.email}</li>
                            <li>Telefonnummer: {selectedValue.phone}</li>
                            </ul>
                        </tr>

                        <tr>
                            <td>Resedetaljer</td>
                            <ul>
                                <li>Hotell: { hotel.title}</li>
                                <li>Avreseort: {selectedValue.departure }</li>
                                <li>Antal personer: {selectedValue.persons }</li>
                                <li>Rumstyp: {selectedValue.roomType }</li>
                            <li>Antal rum: {selectedValue.rooms }</li>
                            </ul>
                        </tr>

                        <tr>
                            <td>Avresedatum</td>
                            <ul>
                                <li>{selectedValue.selectedDate?.toLocaleDateString()}</li>
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
                            <td style={{textTransform:"upperCase", fontWeight: "bold", paddingBottom: "60px"}}>Summa totalt:</td>
                            <ul>
                                <li style={{fontWeight: 'bold', color: 'black'}}>14.470 kronor</li>
                            </ul>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default Summery;