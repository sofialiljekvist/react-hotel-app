//Ger all information som ska visas för varje hotell. 
import picture1 from "./bilder/segla.jpg";
import picture2 from "./bilder/cykel.jpeg";
import picture3 from "./bilder/vin2.jpg";
import picture4 from "./bilder/vandra.jpg";
import picture5 from "./bilder/hero.jpg";
import picture6 from "./bilder/trad.jpeg";



export function getHotelData(){
    return hotelData;
}

const hotelData=[{ //Ett objekt som representerar ett hotell. 
    hotelID: 1,
    title: "Villa Trullo",
    subTitle: "Brac, Kroatien",
    image: picture1,
    price: "2798",
    discription: "Barnvänligt hotell med närhet till stranden och roliga familjeäventyr"
   
    
},

{
hotelID: 2,
title: "Hotell Trikolo",
subTitle: "Hvar, Kroatien",
image: picture2,
price: "4295",
discription: "Ett barnvänligt hotell med stor pool"
 
},

{
  hotelID: 3,
  title: "Plaza Migioni",
  subTitle: "Brac, Kroatien",
  image: picture3,
  price: "6198",
  discription: "Ett barnvänligt hotell med stor pool"
  
  },

  {
    hotelID: 4,
    title: "Mountain Ross",
    subTitle: "Zagreb, Kroatien",
    image: picture4,
    price: "2498",
    discription: "Ett barnvänligt hotell med stor pool"
   
    },

    {
      hotelID: 5,
      title: "Hotell Vimpolia",
      subTitle: "Makarska, Kroatien",
      image: picture5,
      price: "5795",
      discription: "Ett barnvänligt hotell med stor pool"
      
      },

      {
        hotelID: 6,
        title: "Villa Bella",
        subTitle: "Zadar, Kroatien",
        image: picture6,
        price: "7398",
        discription: "Ett barnvänligt hotell med stor pool"
         
        },
]
