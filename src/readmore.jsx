//Komponent för vyn readmore. Importerar de olika komponenterna som ska renderas i vyn. 
import './App.css';
import { Collage } from './collage.jsx';
import { ButtonsFour } from "./buttonsfour.jsx";
import { PinkHero } from "./pinkhero";
import { getHotelData } from './hoteldata.js';
import { useParams } from 'react-router-dom';

export const ReadMore = () => {
  const { hotelID } = useParams(); // Hämtar hotelID från URL
  const hotelArray = getHotelData(); // Hämtar all hotelldata ur hoteldata.js

  // Hittar hotellet med det angivna ID:t med hjälp av find. Number talar om att ID:t som ska hämtas är ett nummer. 
  const hotel = hotelArray.find(hotel => hotel.hotelID === Number(hotelID));

  return (
    <div style={{ marginBottom: '120px' }}> 
      <PinkHero />
      <h1 style={{ paddingLeft: "130px", paddingBottom: "20px", textAlign: "left", width: "90%" }}>
        {hotel.title} <br></br>{hotel.subTitle} {/*Hämtar title och subtitle för det specifika hotellet ur hoteldata.js */}
      </h1>
      {/*Map-metoden används för att gå igenom varje objekt i arrayen paragraph i hoteldata.js. För varje objekt returneras en ny div med en underrubrik och ett textstycke. Key-attributet tilldelas varje div med hjälp av arrayens index, vilket hjälper React att unikt identifiera och effektivt hantera varje element i listan vid rendering.*/}
      {hotel.paragraph.map((hotel, index) => ( 
      <div key={index} >
        <h2 style={{ fontSize: "1.5rem", 
            paddingLeft: "130px", 
            paddingBottom: "5px",
            paddingTop: "30px",
            textAlign: "left"}}>{hotel.subheading}</h2>
        <p style={{ 
            fontSize: "0.9rem", 
            paddingLeft: "130px",
            textAlign: "left",
            width: "90%"
           }}>{hotel.text}</p>
      </div>
      ))}
      <Collage />
      <ButtonsFour />
    </div>
  );
}

export default ReadMore;