//Ger all information som ska visas för varje hotell. 

export function getHotelData(){
    return hotelData;
}

export function getHotel(hotelID) {
  return hotelData.find(hotel => hotel.hotelID === Number(hotelID)); // Säkerställer att hotelID till nummer
}


const hotelData=[{ //Ett objekt som representerar ett hotell. 
    hotelID: 1,
    title: "Villa Trullo",
    subTitle: "Brac, Kroatien",
    image: "https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_1280.jpg",
    price: "2798",
    description: [
      "Perfekt för familjen",
      "Nära till pool och strand",
      "Roliga äventyr"
    ],
    paragraph: [
      {subheading:"Familjevänligt vid stranden",
       text: "Villa Trullo ligger precis vid Brac. Hotellet passar både stora och små gäster och har ett rymligt poolområde, vattenrutschkana och spa-avdelning.  Om du vill se dig omkring i omgivningarna kan du promenera till Boriks småbåtshamn som ligger i närheten."
      },
      {subheading:"Välj mellan pool och strand",
       text: "Precis nedanför poolområdet ligger Borik-stranden med sitt kristallklara vatten. Stranden knyts samman med hotellet via ett grönområde. Här kan du koppla av hela dagen, och när du behöver något svalkande att dricka kan du beställa något gott i poolbaren."
       },
       {subheading: "Något för alla",
        text: "På Falkensteiner Club Funimation Borik bor du bekvämt med barn, det finns lekutrymmen både inomhus och utomhus. Vid poolen finns det även en vattenrutschkana och hotellet har en internationell barnklubb. Spaavdelning och inomhuspool. Efter en lång dag i solen kan du koppla av på hotellets rymliga spaavdelning med pool, bastu och jacuzzi. Spaavdelningen välkomnar gäster över 18 år och för extra avkoppling finns det spabehandlingar. Behandlingarna är inspirerade av Adriatiska havet och den närliggande naturen, bland annat kan du välja en ansiktsmask med havssaltkristaller."}
       ], 
    collage: ["https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_1280.jpg", 
      "https://cdn.pixabay.com/photo/2019/04/29/18/42/trogir-4166786_1280.jpg",
      "https://images.pexels.com/photos/191741/pexels-photo-191741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    ]
    
},

{
hotelID: 2,
title: "Hotell Trikolo",
subTitle: "Hvar, Kroatien",
image: "https://images.pexels.com/photos/14036446/pexels-photo-14036446.jpeg",
price: "8295",
description: [
  "All inclusive",
  "Stort poolområde",
  "Passar hela familjen"
],
paragraph: [
  {
    subheading: "Familjevänligt boende nära natur och strand",
    text: "Hotell Trikolo ligger på den vackra ön Hvar och erbjuder ett idealiskt boende för familjer. Här kan stora som små njuta av ett generöst poolområde, perfekt för lata dagar vid poolkanten. Hotellet ligger nära stranden, vilket gör det enkelt att växla mellan havsbad och pool."
  },
  {
    subheading: "Välj mellan pool och strand",
    text: "Precis nedanför hotellområdet sträcker sig en sandstrand med klart, blått vatten. Gäster kan njuta av den rofyllda atmosfären och ta en svalkande drink i baren vid poolområdet efter ett uppfriskande dopp i havet."
  },
  {
    subheading: "Aktiviteter för alla åldrar",
    text: "Med aktiviteter både vid poolen och inom hotellet erbjuder Hotell Trikolo något för alla åldrar. Det finns lekplatser, barnklubb och områden för vuxen avkoppling. Här kan ni njuta av en härlig vistelse i en idyllisk miljö där allt ingår, från god mat till spännande aktiviteter och avkopplande faciliteter."
  }
],
collage: ["https://images.pexels.com/photos/768158/pexels-photo-768158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1247523/pexels-photo-1247523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/25309964/pexels-photo-25309964/free-photo-of-hav-strand-semester-sommar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]
},

{
  hotelID: 3,
  title: "Plaza Migioni",
  subTitle: "Brac, Kroatien",
  image: "https://cdn.pixabay.com/photo/2016/08/01/08/23/swiss-1560616_1280.jpg",
  price: "6198",
  description: [ 
    "Perfekt för par",
    "Vingårdar med provningar",
    "Havsnära"
  ],
  paragraph: [
    {
      subheading: "En romantisk oas vid havet",
      text: "Plaza Migioni ligger på den idylliska ön Brac, och med sitt vackra läge nära havet är hotellet perfekt för par. Här kan ni njuta av rofyllda dagar tillsammans, där naturens skönhet möter en avslappnad atmosfär."
    },
    {
      subheading: "Utforska vingårdar och smaka på det lokala vinet",
      text: "Hotellet ligger nära flera av Bracs mest kända vingårdar, där ni kan delta i vinprovningar och upptäcka de lokala smakerna. Dessa vinupplevelser ger er möjlighet att smaka på regionens specialiteter och njuta av natursköna omgivningar."
    },
    {
      subheading: "Havsnära och naturskönt",
      text: "Plaza Migionis närhet till havet gör det enkelt att ta sig ner för ett dopp eller en promenad längs stranden. Det lugna tempot och de vackra omgivningarna erbjuder en perfekt inramning för en romantisk semester, där varje stund kan avnjutas i harmoni med naturen."
    }
  ],
  collage: [
     "https://cdn.pixabay.com/photo/2016/08/01/08/23/swiss-1560616_1280.jpg",
     "https://images.pexels.com/photos/20219116/pexels-photo-20219116/free-photo-of-bergen-man-semester-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2440529/pexels-photo-2440529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]
  },

  {
    hotelID: 4,
    title: "Mountain Ross",
    subTitle: "Zagreb, Kroatien",
    image: "https://images.pexels.com/photos/3768738/pexels-photo-3768738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "2498",
    description: [ 
      "Boende i bergen",
      "Guidade turer",
      "Äventyr"
    ],
    paragraph: [
      {
        subheading: "Boende i bergen ",
        text: "Mountain Ross ligger mitt i de storslagna bergen utanför Zagreb och erbjuder en unik möjlighet att bo nära naturen. Här väntar en fridfull miljö och en chans att uppleva Kroatiens vilda sida, med utsikt över bergen och omgivande landskap."
      },
      {
        subheading: "Äventyr och naturupplevelser",
        text: "För de äventyrslystna finns här gott om aktiviteter. Mountain Ross erbjuder allt från vandringar till mountainbike, så att du kan utforska bergen på nära håll. Hotellet är en perfekt utgångspunkt för dig som vill ha en aktiv och minnesvärd semester."
      },
      {
        subheading: "Upptäck bergen med guidade turer",
        text: "För att få ut det mesta av din vistelse kan du följa med på hotellets guidade turer, ledda av kunniga guider som visar dig de mest spektakulära platserna i området. Detta är ett utmärkt sätt att få inblick i både den lokala naturen och historien bakom bergens magi."
      }
    ],
    collage: [
      "https://cdn.pixabay.com/photo/2022/01/19/00/36/sea-6948569_1280.jpg",
      "https://images.pexels.com/photos/3768738/pexels-photo-3768738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://cdn.pixabay.com/photo/2023/09/25/10/46/krka-8274679_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg"
    ]
    },

    {
      hotelID: 5,
      title: "Hotell Vimpolia",
      subTitle: "Makarska, Kroatien",
      image: "https://images.pexels.com/photos/3678182/pexels-photo-3678182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "6795",
      description: [ 
        "Bo på privat strand",
        "Tillgång till egen båt",
        "Charmigt och rustikt"
      ],
      paragraph: [
        {
          subheading: "Charmigt boende vid stranden",
          text: "Hotell Vimpolia ligger idylliskt beläget i Makarska. Här bor du på en privat strand där du kan njuta av sol och hav i en lugn och avkopplande miljö. Med sin rustika charm erbjuder hotellet en unik atmosfär som får dig att känna dig som hemma."
        },
        {
          subheading: "Tillgång till egen båt",
          text: "Som gäst på Hotell Vimpolia har du tillgång till en egen båt, vilket ger dig friheten att utforska de vackra omgivningarna på ditt eget sätt. Ta en tur till närliggande öar, dyk i det kristallklara vattnet eller bara njut av en stilla dag på havet."
        },
        {
          subheading: "En perfekt plats för avkoppling",
          text: "Hotellet kombinerar rustik elegans med moderna bekvämligheter, vilket gör det till den perfekta platsen för en avkopplande semester. Oavsett om du vill koppla av på stranden, utforska kusten med båt eller bara njuta av den vackra naturen, är Hotell Vimpolia det självklara valet för din nästa semester."
        }
      ],
      collage: [
        "https://images.pexels.com/photos/3678182/pexels-photo-3678182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://cdn.pixabay.com/photo/2018/05/02/17/22/beach-3369140_1280.jpg",
        "https://cdn.pixabay.com/photo/2012/03/01/01/11/boat-20047_1280.jpg",
      ]
      },

      {
        hotelID: 6,
        title: "Villa Bella",
        subTitle: "Zadar, Kroatien",
        image: "https://images.pexels.com/photos/28907972/pexels-photo-28907972/free-photo-of-flygfoto-over-dubrovniks-historiska-gamla-stad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: "7398",
        description: [
          "Nära till staden",
          "Upptäck kulturen",
          "Restauranger"
        ],
        paragraph: [
          {
            subheading: "Centralt beläget nära Zadar",
            text: "Villa Bella ligger i hjärtat av Zadar, vilket gör det enkelt att utforska stadens rika kultur och historia. Med kort avstånd till centrala attraktioner kan du njuta av allt staden har att erbjuda, från historiska monument till moderna konstgallerier."
          },
          {
            subheading: "Kulturella upplevelser",
            text: "Upptäck den unika kulturen i Zadar med dess medeltida gränder, vackra torg och livliga marknader. Ta del av stadens traditioner och evenemang."
          },
          {
            subheading: "Njut av lokal mat",
            text: "Villa Bella är omgiven av ett brett utbud av restauranger, där du kan smaka på det bästa av kroatisk och medelhavsmat. Oavsett om du föredrar en romantisk middag eller en livlig lunch med vänner, kommer du att hitta något som passar din smak i närheten av hotellet."
          }
        ],
        collage: [
          "https://images.pexels.com/photos/28907972/pexels-photo-28907972/free-photo-of-flygfoto-over-dubrovniks-historiska-gamla-stad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/16298848/pexels-photo-16298848/free-photo-of-kyrkan-saint-donatus-tower-i-zadar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://cdn.pixabay.com/photo/2017/10/29/15/39/croatia-2900001_1280.jpg",
          "https://images.pexels.com/photos/4580112/pexels-photo-4580112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]
        },
]

export default hotelData;
