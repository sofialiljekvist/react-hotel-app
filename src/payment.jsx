//Komponent för vyn payment. Importerar de olika komponenterna som ska renderas i vyn. 
import React from 'react';
import { PicAndInfo } from "./picandinfo.jsx";
import { Summery } from "./summery.jsx";
import {PaymentDetails} from "./paymentdetails.jsx";
import {ButtonsThree} from "./buttonsthree.jsx";
import {CardDetails} from "./carddetails.jsx";
import { PinkHero } from "./pinkhero";
import { useParams } from 'react-router-dom';

export function Payment() {
  const { hotelID } = useParams();

  return (
    <div>
      <PinkHero />
      <h2 style={{ 
            fontSize: "1.5rem", 
            textTransform: "uppercase", 
            paddingBottom: "20px",
            paddingTop: "30px",
            textAlign: "center"
           }}>Bokningsdetaljer & Betalning
        </h2>
        {/*Renderar komponenterna PinkHero, PicAndInfo, Summery, PaymentDetails, CardDetails och ButtonsThree*/}
      <PicAndInfo hotelID={hotelID} />
      <Summery />
      <PaymentDetails/>
      <CardDetails/>
      <ButtonsThree/>
    </div>
  );
}

export default Payment;