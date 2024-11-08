//importerar de olika komponenterna hotelcard, navbar, pinkhero, footer som ska renderas på startsidan . Sedan importeras routes och route för att göra applikationen mer interaktiv och tala om vart våra länkar ska leda till. 
//importer bootstrap-icons bibliotek för att kunna använda ikonerna för support (telefon) och logga in (person)//
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { useState } from 'react';
import { NavBar } from "./navbar";
import { Main } from "./main";
import {Footer} from "./footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './scrollTo';
import BokaResa from "./bokaresa"; 
import Payment from "./payment";
import Confirmation from "./confirmation";
import ReadMore from "./readmore";



function App() {
  const [selectedValue, setSelectedValue] = useState({ departure: '', persons: '', roomType: '', rooms: '', selectedDate: null });

  // Funktion för att uppdatera valt värde
  const handleSelectedValue = (details) => {
    setSelectedValue((prevDetails) => ({
      ...prevDetails,
      ...details
    }));
  };

  return (
    <Router basename="/react-hotel-app">
       <ScrollToTop />
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/bokaresa/:hotelID" element={<BokaResa onSelect={handleSelectedValue} />} /> {/* I komponenten bokaresa väljs/inmatas ett värde som skickas hit till app.js där det sedan hanteras i funktionen handleSelectedValue*/}
            <Route path="/readmore/:hotelID" element={<ReadMore />} />
            {/* Tar användaren till Läs mer-vyn för det valda hotellet*/}
          <Route path="/payment/:hotelID/" element={<Payment selectedValue={selectedValue} />}    /> {/* Här skickas det hanterade värdet till komponenten payment där det valda värdet visas */}
          <Route path ="/confirmation" element={<Confirmation />}/> {/* Tar användaren till den sista vyn som är betalningsbekräftelsen */}
        </Routes>
        <Footer />
    </div>
     </Router>
  );
}

export default App;
