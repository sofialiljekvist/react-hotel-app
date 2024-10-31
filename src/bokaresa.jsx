//Komponent för vyn bokaresa. Importerar de olika komponenterna som ska renderas i vyn.  
import React, { useState } from 'react';
import { CustomerDetails } from './customerdetails.jsx';
import { TripDetails } from './tripdetails.jsx';
import { Calender } from './calender.jsx';
import { Extras } from './extras.jsx';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import { getHotelData } from "./hoteldata";
import {PicAndInfo} from "./picandinfo.jsx";
import { PinkHero } from "./pinkhero";
import {RoomCard} from "./roomcard.jsx";
import { useParams } from 'react-router-dom';



export function BokaResa() {
  const { hotelID } = useParams();
  const hotelArray = getHotelData();
  const hotel = hotelArray.find(hotel => hotel.hotelID === Number(hotelID));
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
        </h2> {/*Valde att lägga style av våra h2, h3, h4, h5 och <p> inuti våra komponenter. 
        Stylingen kunnat läggas i css koden (för att få en renare kod), men då exempelvis paddingBottom, paddingTop och fontSize ofta skiljer sig åt 
        i vår alpplikation, valde vi i denna uppgift att låta de vara inuti komponenterna. */}
      <PicAndInfo hotelID={hotelID} />
      <CustomerDetails />
       
      { /*stylar layouten så att Kalendern och Resedetaljer hamnar bredvid varandra samt avståendet till nästa komponenet i vyn */ }
      <div style={{
        display: 'flex',        
        justifyContent: 'space-between', 
        padding:"70px",
        }}> 

          
        <div style={{ flex: 1}}>  {/* Använde flex: 1 för att skapa en passande layout för vyn. Vi ville att kalendern och Resedetaljer skulle hamna bredvid varaandra och ta upp lika mycket av "platsen" på sidan */}
          <Calender />
        </div>
        <div style={{ flex: 1}}>
          <TripDetails />
        </div>
      </div>
      <RoomCard/>
      <Extras />

        <div className="d-flex justify-content-between mt-4 pb-5 mb-5">
                <Link to={"/"}> {/* Knappen "Avbryt" ska ta användaren till vyn "Startsidan"   */}
                    <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "100px"}}>Avbryt
                    </Button>
                </Link>
                <Link to={`/payment/${hotel.hotelID}`}> {/* Här säger vi att knappen "Boka" ska ta användaren till vyn "Boka resa"   */}
                    <Button  style={{ backgroundColor: '#2943CB', color: 'white', borderColor: "#2943CB",fontWeight: 'bold', width: '110px', marginRight: "100px" }}>Boka
                    </Button>
                </Link>
        </div>
    </div>
  );
}

export default BokaResa;
