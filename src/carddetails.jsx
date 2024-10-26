//Komponent för att fylla i kortuppgifter och betala i payment.jsx
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit"; //Kod från mdb-react-biblioteket. /*  Det vi gjort på denna komponent är att justera och anpassa inmatningsfälten så att de överensstämmer med vår prototyp.  */}
import {Link} from "react-router-dom";

export function CardDetails() {
    return (
    
    <MDBContainer
      className="py-5"
      fluid >
    
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">

                <h3>Betalningsdetaljer</h3>
                <h6>Fyll i dina betalningsuppgifter</h6>
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
              </div>

              <MDBInput
                label="Namn på kortinnehavare"
                id="form3"
                type="text"
                size="lg"
                placeholder="Emma Lindgren"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Kortnummer"
                    id="form4"
                    type="text"
                    size="lg"
                    placeholder="1234 5678 1234 5678"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="text"
                    size="lg"
                    placeholder="MM/YY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <Link to={"/confirmation/"}> <MDBBtn color="primary" size="lg" block>
                Betala
              </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}




export default CardDetails;