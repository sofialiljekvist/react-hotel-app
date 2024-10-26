//Komponent som visar kalendern i bokaresa.jsx.
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; //importerar kalender från react-biblioteket//
import 'react-calendar/dist/Calendar.css'; // Importera styling för react kalendern


export function Calender() {
      const [date, setDate] = useState(new Date()); // Kod från react-biblioteket.
    return (

    <div style={{
        display: 'flex',            // Stylar layouten för diven som innehåller kalendern.
        justifyContent: 'center',   
        alignItems: "center", 
        flexDirection: 'column', 
        margin: "20px",
        }}>
        <h2 style={{
            fontSize: "1.1rem",
            textTransform: "uppercase",
            paddingBottom: "20px",
            paddingTop: "30px"
            }}>
            Välj datum
        </h2>
        <Calendar //Kod från react-biblioteket
            onChange={setDate}
            value={date}
            style={{ width: "100%"}} 
        />
    </div>
)}