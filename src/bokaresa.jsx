//Komponent för vyn bokaresa. Importerar de olika komponenterna som ska renderas i vyn.  
import React from 'react';
import { CustomerDetails } from './customerdetails.jsx';
import { TripDetails } from './tripdetails.jsx';
import { Calender } from './calender.jsx';
import { Extras } from './extras.jsx';
import {ButtonsTwo} from './buttons2.jsx';
import {PicAndInfo} from "./picandinfo.jsx";
import { PinkHero } from "./pinkhero";
import {RoomCard} from "./roomcard.jsx"


export function BokaResa() {
 
  return (
    <div>
      <PinkHero />
      <h2 style={{ 
            fontSize: "2rem", 
            textTransform: "uppercase", 
            paddingBottom: "20px",
            paddingTop: "30px",
            textAlign: "center"
           }}>Boka resa
        </h2> {/* Vi valde att lägga style av våra h2, h3, h4, h5 och <p> inuti våra komponenter. 
        Stylingen kunnat läggas i css koden (för att få en renare kod), men då exempelvis paddingBottom, paddingTop och fontSize ofta skiljer sig åt 
        i vår alpplikation, valde vi i denna uppgift att låta de vara inuti komponenterna. */}
      <PicAndInfo/>
      <CustomerDetails />
       
      { /*stylar layouten så att Kalendern och Resedetaljer hamnar bredvid varandra samt avståendet till nästa komponenet i vyn */ }
      <div style={{
        display: 'flex',        
        justifyContent: 'space-between', 
        padding:"70px",
        }}> 

          
        <div style={{ flex: 1}}>  {/* Vi använde flex: 1 för att skapa en passande layout för vyn. Vi ville att kalendern och Resedetaljer skulle hamna bredvid varaandra och ta upp lika mycket av "platsen" på sidan */}
          <Calender />
        </div>
        <div style={{ flex: 1}}>
          <TripDetails />
        </div>
      </div>
      <RoomCard/>
      <Extras />
      <ButtonsTwo/>
    </div>
  );
}

export default BokaResa;
