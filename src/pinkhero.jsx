//Komponent som inkluderar rosa bakgrundsfärg och sökfält. Återkommer i flera vyer.
import React from "react";
//Importerar knapp och formcontrol från react-bootstrap
import {Button, FormControl} from "react-bootstrap";

export const PinkHero = () => 
{

   {/*Kod från react-bootstrap*/}
return(
    <div style={{ backgroundColor: '#9E6464', height: '220px', marginBottom: "50px" }} expand="lg" className="d-flex justify-content-center align-items-center">  
      <FormControl
        type="search"
        placeholder="Vart vill du åka?"
        className="m-2"
        aria-label="Sök"
        style={{ maxWidth: '300px' }}
      />
      <Button  style={{ backgroundColor: '#F6E39F', color: 'black', borderColor: '#9E6464' }} 
        variant="outline-success">Sök
      </Button>
    </div>
  );
}