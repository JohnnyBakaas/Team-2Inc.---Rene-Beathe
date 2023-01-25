"use strict";

const model = {
  app: {
    state: "homePage",
    currentUser: 1,
    article: {
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

    shoppingFilter: "",

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
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Utdanningsmateriale", "Matematikk"],
      articleId: 0,
      price: 24543,
    },
    {
      title: "Kurs i naturfag",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Utdanningsmateriale", "Naturfag"],
      articleId: 1,
      price: 24543,
    },
    {
      title: "Hettegenser",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Hettegenser", "Klær"],
      colors: [{ text: "Svart", css: "black" }],
      articleId: 2,
      price: 3999,
    },
  ],

  users: [
    {
      name: "Heine",
      lastName: "Pizzason",
      username: "HeinePizzason",
      userId: 0,
      password: "hemmelig",
      mail: "superCool@hotmail.com",
      address: "someWhereLane",
      zipcode: "3870",
      shoppingCart: [],
      storeOrders: [
        {
          orderDate: "18.01.2023",
          orderNum: 0,
          articleIds: [0, 2],
          totalPrice: 1000,
        },
      ],
    },
  ],

  bookingOrders: [
    {
      firstName: "",
      email: "",
      address: "",
      zipCode: "",
      orderNum: 0,
      days: ["30.1.2023", "31.1.2023"],
    },
  ],
};
