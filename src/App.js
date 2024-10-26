//importerar de olika komponenterna hotelcard, navbar, pinkhero, footer som ska renderas på startsidan . Sedan importeras routes och route för att göra applikationen mer interaktiv och tala om vart våra länkar ska leda till. 
//importer bootstrap-icons bibliotek för att kunna använda ikonerna för support (telefon) och logga in (person)//
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import {HotelCard} from "./hotelcard";
import { NavBar } from "./navbar";
import { PinkHero } from "./pinkhero";
import {Footer} from "./footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BokaResa from "./bokaresa"; 
import Payment from "./payment";
import Confirmation from "./confirmation";
import ReadMore from "./readmore";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <PinkHero />
                <HotelCard />
              </div>
            } 
          />
          <Route path="/bokaresa" element={<BokaResa />} /> {/* Tar användaren till Boka-vyn */}
          <Route path="/readmore" element={<ReadMore />} /> {/* Tar användaren till Läs mer-vyn */}
          <Route path="/payment" element={<Payment />}    /> {/* Tar användaren till Betalnings-vyn */}
          <Route path ="/confirmation" element={<Confirmation />}/> {/* Tar användaren till den sista vyn som är betalningsbekräftelsen */}
        </Routes>
        <Footer />
    </div>
     </Router>

     
  );
}

export default App;
