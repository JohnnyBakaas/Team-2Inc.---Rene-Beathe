"use strict";

const model = {
  app: {
    state: "homePage",
    currentUser: 1,
    article: {
      title: "Mauertua barnehage",
      img: "img/mauertua barnehage.png",
      content: [
        { text: "i dette prosjektet..." }, // if(text) => sett inn i p
        { img: "img/mauertua barnehage.png" }, // if(img) => sett inn img
        { text: "mer tekst og ting..." },
        { text: "mer tekst og ting..." },
        { text: "mer tekst og ting..." },
        { img: "img/mauertua barnehage.png" },
      ],

      articleId: 0,
    },
  },

  inputs: {
    bookingData: {
      fullName: "",
      email: "",
      address: "",
      zipCode: "",

      days: [],
    },

    login: {
      name: "",
      password: "",
    },

    course_checkout: {
      fname: "",
      lname: "",
      address: "",
      email: "",
      city: "",
      zip: "",
      country: "",
    },

    shoppingFilter: "",
    shoppingColor: "",

    registration: {
      fillMandatory: "",
      firstName: "",
      surName: "",
      userName: "",
      email: "",
      password: "",
      address: "",
      zipCode: "",
    },

    currentArticle: 0, //articleId

    currentCourseArticle: 0, //courseArticleId

    currentMonthDelta: 0, //for booking side
  },

  //data
  portfolioArticles: [
    {
      title: "Bygg kreativt med papp-rør i barnehagen",
      img: "!portfolio/img/konstruksjon oversikt.JPG",
      content: [
        {
          text: "Byggeaktiviteter er en flott måte å engasjere barn i læring og utforsking av realfag. En av de beste materialene for å bygge kreativt er papp-rør. Dette rimelige og tilgjengelige materialet kan brukes på mange måter, fra å lage strukturer og broer til å utforske geometri og matematikk. Her er noen ideer for å få i gang en morsom og lærerik byggeaktivitet i barnehagen ved hjelp av papp-rør.",
        },

        {
          text: "Papp-rør kan brukes til å bygge forskjellige strukturer og broer. Barna kan få muligheten til å eksperimentere med forskjellige byggemetoder og finne ut hva som fungerer best. De kan lære om geometri og fysikk ved å prøve å finne den beste måten å støtte vekten av broen på, samt hvordan man kan øke styrken til strukturen.",
        },
        {
          text: "Papp-rør kommer i forskjellige størrelser og former, som gir en flott mulighet til å utforske geometri og matematikk. Ved å sortere rørene etter størrelse og form, kan barna lære om grunnleggende konsepter som størrelse, form og sammenligning. De kan også prøve å lage mønstre eller kombinere rørene for å skape nye former og størrelser.",
        },
        { img: "!portfolio/img/konstruksjon matrealer.JPG" },
        {
          text: "Bygging med papp-rør kan også gi muligheter for samarbeid og utforskning. Barna kan jobbe sammen i grupper for å bygge større strukturer eller broer. De kan prøve å finne ut hvordan de kan lage en struktur som er høyere, sterkere eller mer stabil. Ved å jobbe sammen kan de lære om samarbeid og kommunikasjon, samtidig som de utvikler sine ferdigheter i realfag.I konklusjonen kan det påpekes at byggeaktiviteter med papp-rør er en flott måte å lære om realfag på en morsom og kreativ måte. Ved å bruke papp-rør kan barna utforske geometri, fysikk og matematikk på en praktisk og engasjerende måte. Det gir også muligheter for samarbeid og kreativ utfoldelse. Prøv å inkludere denne byggeaktiviteten i barnehagen for å engasjere barna i læring på en mors",
        },
      ],

      articleId: 0,
    },
    {
      title: "Havets skatter - å lage leker av pinner og plast fra havet",
      img: "!portfolio/img/pinner.JPG",
      content: [
        {
          text: "I barnehagen er det alltid viktig å finne nye og spennende måter å engasjere barna på. Å lage leker av naturlige materialer kan være både morsomt og lærerikt for barna. En kreativ måte å gjøre dette på, er å bruke pinner og plast som kommer fra havet for å lage unike og interessante leker.",
        },
        { img: "!portfolio/img/plastikk fra havet.JPG" },
        {
          text: "Stranden er en flott kilde til materialer for å lage leker. Pinner som er funnet på stranden kan brukes til å lage alt fra sverd og stav til hus og figurer. Barna kan bruke sin fantasi og kreativitet for å lage unike leker som er inspirert av naturen. De kan også lære om forskjellige typer tre og hva de kan brukes til.",
        },
        {
          text: "I tillegg til pinner kan også plast som kommer fra havet brukes til å lage leker. Plast som er funnet på stranden eller i havet kan vaskes og brukes til å lage morsomme og fargerike leker. Barna kan lære om resirkulering og hvor viktig det er å ta vare på miljøet. De kan også bruke sin fantasi til å lage nye og spennende leker som er laget av materialer som ellers ville ha blitt kastet.",
        },
        {
          text: "I konklusjonen kan det påpekes at å lage leker av pinner og plast fra havet er en flott måte å engasjere barna i læring og kreativ utfoldelse. De kan lære om naturmaterialer og resirkulering, samtidig som de har det gøy med å lage unike og personlige leker. Prøv å inkludere denne aktiviteten i barnehagen for å gi barna en spennende og meningsfull opplevelse.",
        },
      ],
      articleId: 1,
    },
  ],

  courseStore: [
    {
      title: "Måling",
      img: "img/pinne dyr.JPG",
      courseId: 0,
      price: 9600,
      description: `
      Matematikken i opplegget er måling. Vi lager et måleredskap 
      av naturmaterialer og plastikk som vi finner på stranden 
      eller i sjøen. Måleredskapet kan brukes til både direkte- 
      og indirekte måling og projisert lek. Vi lager «pinnevenner»! 
      Barna velger en pinne de vil lage pinnevennen av. Pinnevennen målet 
      10 cm. Dette måler vi med målebånd, setter merke og sager. 
      Pinnevennen får hår, nese og/eller hodeplagg av plastikk vi 
      har sanket, vasket og sortert. Vi tegner på øyne. Munn får 
      ikke pinnevennen. Det er fordi det er vi som er pinnevennens 
      stemme og humør. Matematikk er overalt i alt vi gjør og 
      pinnevennene kan være nøkkelen til god matematikkforståelse.
      `,
    },
    {
      title: "Bygge en mur",
      img: "img/flaske vegg.JPG",
      courseId: 1,
      price: 9600,
      description: `
      Naturfag som er lett å relatere til. I dette kurset lærer 
      jeg deg hvordan du tar klassen med på å bygge en mur med 
      gjenstander vi finner i naturen. Vi starter med å finne 
      passende steiner og flasker som vi kan bruke til å lage 
      fundamentet for muren. Deretter bygger vi muren lag for 
      lag, og lærer om forskjellige teknikker og materialer vi 
      kan bruke for å sikre at muren blir stabil og holdbar. Vi 
      diskuterer også hvordan vi kan bruke disse teknikkene til 
      å bygge andre strukturer i naturen, som steingjerder, 
      trapper og hagebenker. Dette kurset gir elevene en dyp 
      forståelse av naturfag og håndverk, samtidig som de får 
      være kreative og utforske naturen på en ny og spennende måte.
      `,
    },
  ],

  // merchStore
  storeArticles: [
    {
      title: "Blomstrete kjole",
      img: "!ecommerce/img/Blomstrete kjole.jpg",
      description:
        "En vakker blomstrete kjole som passer til enhver anledning.",
      category: ["Kjoler", "Klær"],
      colors: [
        { text: "Rød", css: "red" },
        { text: "Blå", css: "blue" },
        { text: "Grønn", css: "green" },
      ],
      articleId: 1,
      price: 6999,
    },

    {
      title: "Hettegenser",
      img: "!ecommerce/img/Harlem-hettegenser-gra.jpg",
      description: "dette er ett flott produkt..",
      category: ["Hettegenser", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Rød", css: "red" },
      ],
      articleId: 2,
      price: 3999,
    },
    {
      title: "Sko",
      img: "!ecommerce/img/sko.JPG",
      description: "dette er ett flott produkt..",
      category: ["Sko", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Rød", css: "red" },
      ],
      articleId: 3,
      price: 6000,
    },
    {
      title: "Hjemmelaget Choco Kake",
      img: "!ecommerce/img/Choco Kake.jpg",
      description: "dette er ett flott produkt..",
      category: ["Kake", "Matt"],

      articleId: 4,
      price: 4550,
    },
    {
      title: "Brownies",
      img: "!ecommerce/img/Brownies.JPG",
      description: "dette er ett flott produkt..",
      category: ["Kake", "Matt"],

      articleId: 5,
      price: 4550,
    },
    {
      title: "Realfag Juice",
      img: "!ecommerce/img/Realfag Juic.jpg",
      description: "dette er ett flott produkt..",
      category: ["Drikke", "Matt"],
      colors: [
        { text: "Grøn", css: "Green" },
        { text: "Gul", css: "#f8ff00" },
        { text: "Rød", css: "Red" },
      ],
      articleId: 6,
      price: 1500,
    },
    {
      title: "T-skjorte",
      img: "!ecommerce/img/T-skjorte.jpg",
      description: "En komfortabel og stilfull t-skjorte i bomull.",
      category: ["T-skjorter", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Hvit", css: "white" },
        { text: "Gul", css: "yellow" },
      ],
      articleId: 7,
      price: 2999,
    },
    ,
    {
      title: "Støvler",
      img: "!ecommerce/img/Støvler.JPG",
      description: "Vanntette støvler i gummi med godt grep.",
      category: ["Skotøy"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Grønn", css: "green" },
        { text: "Blå", css: "blue" },
      ],
      articleId: 9,
      price: 8999,
    },
    {
      title: "Vindjakke",
      img: "!ecommerce/img/Vindjakke.jpg",
      description:
        "En lett og pustende vindjakke som beskytter mot vind og regn.",
      category: ["Jakker", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Rød", css: "red" },
        { text: "Gul", css: "yellow" },
      ],
      articleId: 10,
      price: 4999,
    },
  ],

  users: [
    {
      name: "User",
      lastName: "Usersen",
      username: "User",
      userId: 1,
      password: "user",
      mail: "user@uesr.com",
      address: "User Will",
      zipcode: "3870",
      shoppingCart: [],
      storeOrders: [
        {
          orderDate: "18.01.2023",
          orderNum: 0,
          articleIds: [
            {
              articleId: 1,
              color: ["Rød", "red"],
              quantity: 1,
            },
          ],
          totalPrice: 1000,
        },
      ],
      courseShoppingCart: [],
      courseOrders: [],
    },
  ],

  bookingOrders: [
    {
      days: ["14.2.2023", "17.2.2023", "20.1.2023", "15.1.2024", "24.12.2022"],
    },
    {
      days: ["14.3.2023", "17.3.2023", "20.3.2023", "15.3.2023", "24.3.2023"],
    },
    {
      days: ["4.3.2023", "12.3.2023", "20.3.2023", "19.3.2023", "24.3.2023"],
    },
    {
      days: ["3.4.2023", "6.4.2023", "9.4.2023", "12.4.2023", "15.4.2023"],
    },
    {
      days: ["5.5.2023", "10.5.2023", "15.5.2023", "20.5.2023", "25.5.2023"],
    },
    {
      days: ["5.6.2023", "8.6.2023", "12.6.2023", "18.6.2023"],
    },
    {
      days: ["1.7.2023", "5.7.2023", "9.7.2023", "13.7.2023"],
    },
    {
      days: ["21.8.2023", "25.8.2023", "29.8.2023", "2.9.2023"],
    },
    {
      days: ["11.10.2023", "15.10.2023", "19.10.2023", "23.10.2023"],
    },
  ],
};
