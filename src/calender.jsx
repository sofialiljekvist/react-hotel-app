//Komponent som visar kalendern i bokaresa.jsx.
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; //importerar kalender från react-biblioteket//
import 'react-calendar/dist/Calendar.css'; // Importera styling för react kalendern


export function Calender({ onSelect }) {
    const [date, setDate] = useState(new Date()); // state för att hantera det valda datumet
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate); // Uppdaterar datumet när ett datum väljs.
        onSelect({ selectedDate }); // Skickar det valda datumet till app.js som hanterar valet och skickar det till payment så det kan skrivas ut i summery. 
    };

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
        <Calendar //Kalenderkomponenten från react-calendar-biblioteket
            onChange={handleDateChange} //kör funktionen handleDateChange.
            value={date} //sätter valt datum som valt värde
            style={{ width: "100%"}} 
        />
    </div>
)}