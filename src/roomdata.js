//Ger all information som ska visas för varje rumstyp. 
//Importerar bilderna för varje rumstyp
import room1 from "./bilder/single.jpg";
import room2 from "./bilder/dubble.jpeg";
import room3 from "./bilder/family.jpeg";


export function getRoomData(){
    return roomData;
}

const roomData=[{ //Ett objekt som representerar en rumstyp.
  roomID: 1,
  title: "Dubbelrum",
  subTitle: "Villa Trullo",
  image: room2,
  price: "2987",
  description: [ //en lista med info om rumstypen
    "Rökning ej tillåten",
    "180 cm kingsize säng",
    "30 m2 stort rum",
    "Frukost ingår"
  ]
},

{
  roomID: 2,
  title: "Singelrum",
  subTitle: "Villa Trullo",
  image: room1,
  price: "1277",
  description: [
    "Rökning ej tillåten",
    "Hårtork",
    "120 cm säng",
    "Frukost ingår"  
  ]
},

{
  roomID: 3,
  title: "Familjerum",
  subTitle: "Villa Trullo",
  image: room3,
  price: "7678",
  description: [
    "Rökning ej tillåten",
    "Plats för 5 personer",
    "45 m2 stort rum",
    "Frukost ingår"
  ]
},
]
