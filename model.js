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

    currentMonthDelta: 0, //for booking side
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
      title: "Kurs: ?",
      img: "img/matte.png",
      courseId: 1,
      price: 9600,
    },
    {
      title: "Kurs: ?",
      img: "img/naturfag.png",
      courseId: 2,
      price: 8500,
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
    {
      title: "Hettegenser",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Hettegenser", "Klær"],
      colors: [
        { text: "Svart", css: "black" },
        { text: "Rød", css: "red" },
      ],
      articleId: 1,
      price: 3999,
    },
    {
      title: "Hettegenser",
      img: "img/renebeathe.jpg",
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
      img: "img/renebeathe.jpg",
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
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Kake", "Matt"],

      articleId: 4,
      price: 4550,
    },
    {
      title: "Brownies",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Kake", "Matt"],

      articleId: 5,
      price: 4550,
    },
    {
      title: "Realfag Juice",
      img: "img/renebeathe.jpg",
      description: "dette er ett flott produkt..",
      category: ["Drikke", "Matt"],
      colors: [
        { text: "Grøn", css: "Green" },
        { text: "Lila", css: "Purple" },
      ],
      articleId: 6,
      price: 1500,
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
      days: ["14.2.2023", "17.2.2023", "20.1.2023", "15.1.2024"],
    },
  ],
};
