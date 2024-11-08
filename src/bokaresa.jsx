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

export function BokaResa({onSelect}) {
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
        </h2>
      <PicAndInfo hotelID={hotelID} />
      <CustomerDetails onSelect={onSelect} />
       
      <div style={{
        display: 'flex',        
        justifyContent: 'space-between', 
        padding:"70px",
        }}> 

        <div style={{ flex: 1}}>  
          <Calender onSelect={onSelect}/>
        </div>
        <div style={{ flex: 1}}>
          <TripDetails onSelect={onSelect} />
        </div>
      </div>
      <RoomCard onSelect={onSelect} />
      <Extras />

      <div className="d-flex justify-content-between mt-4 pb-5 mb-5">
          <Link to={"/"}>
              <Button style={{ backgroundColor: '#F6E39F', color: 'black',borderColor:"#F6E39F", width: '110px', marginLeft: "100px"}}>Avbryt
              </Button>
          </Link>
          <Link to={`/payment/${hotelID} ` }>
              <Button  style={{ backgroundColor: '#2943CB', color: 'white', borderColor: "#2943CB",fontWeight: 'bold', width: '110px', marginRight: "100px" }}>Boka
              </Button>
          </Link>
      </div>
    </div>
  );
}

export default BokaResa;