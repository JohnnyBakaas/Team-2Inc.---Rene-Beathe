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
    {
      title: "Annen barnehage",
      img: "img/annen barnehage.png",
      content: [
        { text: "i dette prosjektet..." },
        { img: "img/annen barnehage.png" },
        { text: "mer tekst og ting..." },
      ],
      articleId: 1,
    },
  ],

  courseStore: [
    {
      title: "Kurs i mattematikk",
      img: "",
      courseId: 1,
      price: 960,
    },
    {
      title: "Kurs i naturfag",
      img: "",
      courseId: 2,
      price: 850,
    },
  ],

  // merchStore
  storeArticles: [
    {
      title: "Hettegenser",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Hettegenser", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Rød", css: "red" },
      ],
      articleId: 0,
      price: 3999,
    },
  ],

  users: [
    {
      name: "a",
      lastName: "Pizzason",
      username: "HeinePizzason",
      userId: 1,
      password: "1",
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
      courseShoppingCart: [],
      courseOrders: [],
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
