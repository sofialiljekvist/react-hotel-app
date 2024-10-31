//importerar de olika komponenterna hotelcard, navbar, pinkhero, footer som ska renderas på startsidan . Sedan importeras routes och route för att göra applikationen mer interaktiv och tala om vart våra länkar ska leda till. 
//importer bootstrap-icons bibliotek för att kunna använda ikonerna för support (telefon) och logga in (person)//
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { NavBar } from "./navbar";
import { Main } from "./main";
import {Footer} from "./footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BokaResa from "./bokaresa"; 
import Payment from "./payment";
import Confirmation from "./confirmation";
import ReadMore from "./readmore";


function App() {
  return (
    <Router basename="/react-hotel-app">
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/bokaresa/:hotelID" element={<BokaResa />} /> {/* Tar användaren till Boka-vyn med det specifika hotellets picandinfo*/}
            <Route path="/readmore/:hotelID" element={<ReadMore />} />
            {/* Tar användaren till Läs mer-vyn för det valda hotellet*/}
          <Route path="/payment/:hotelID" element={<Payment />}    /> {/* Tar användaren till Betalnings-vyn */}
          <Route path ="/confirmation" element={<Confirmation />}/> {/* Tar användaren till den sista vyn som är betalningsbekräftelsen */}
        </Routes>
        <Footer />
    </div>
     </Router>

     
  );
}

export default App;
