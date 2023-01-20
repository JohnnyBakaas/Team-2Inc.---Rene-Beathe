const model = {
  app: {
    state: "homePage",
    curentUser: null,
  },

  inputs: {
    bookingData: {
      firstName: "",
      sirName: "",
      email: "",
      adress: "",
      zipCode: "",

      days: [],
    },

    loginData: {
      username: "",
      pasword: "",
    },

    shoppingFilters: [],

    registration: {
      firstName: "",
      sirName: "",
      userNam: "",
      email: "",
      pasword: "",
      adress: "",
      zipCode: "",
    },
  },

  //data
  portfolioArticles: [
    {
      title: "Mauertua barnehage",
      img: "ing/mauertua barnehage.png",
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
    {
      title: "Annen barnehage",
      img: "ing/annen barnehage.png",
      content: [
        { text: "i dette prosjektet..." },
        { img: "img/annen barnehage.png" },
        { text: "mer tekst og ting..." },
      ],
      articleId: 1,
    },
  ],
  storeArticles: [
    {
      title: "Kurs i mattematikk",
      img: "img/kurs i matteematikk.png",
      description: "dette er ett flott produkt..",
      category: ["Utdanningsmatreale", "Mattematikk"],
      storeId: 03456677,
      price: 24543,
    },
    {
      title: "Kurs i naturfag",
      img: "img/kurs i naturfag.png",
      description: "dette er ett flott produkt..",
      category: ["Utdanningsmatreale", "Naturfag"],
      storeId: 1,
      price: 24543,
    },
    {
      title: "Hettegenser",
      img: "img/hettegenser.png",
      description: "dette er ett flott produkt..",
      category: ["Hettegenser", "Klær"],
      colors: [{ text: "Svart", css: "black" }],
      storeId: 2,
      price: 3999,
    },
  ],

  users: [
    {
      name: "Heine",
      userId: 0,
      pasword: "hemmelig",
      //legg til resten
      shoppingCart: [],
    },
  ],

  orders: [
    {
      payed: 1000,
      userId: 0,
      storeIds: [0, 2],
      orderDate: "18.01.2023",
    },
  ],
  openDaysCalender: ["28.01.2023"],
};
